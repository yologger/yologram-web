import ActionTypes, {IAuthState, IGetUserInfoAction, ILoginAction, ILogoutAction, IValidateAccessTokenAction} from "./types"
import {ThunkDispatch} from "redux-thunk";
import {ILoginPayload, ILoginResult, ILogoutResult} from "~/types/auth";
import {IRootState, RootActions} from "~/store";
import {IFailAction} from "~/store/error/types";
import * as authApi from "~/api/auth";
import {error, fail} from "~/store/error";


export interface ISession {
    isLoggedIn: boolean;
    accessToken: string;
}

export const loginAction = ({isLoggedIn, accessToken}: ISession): ILoginAction => {
    return {
        type: ActionTypes.LOGIN,
        payload: {
            isLoggedIn,
            accessToken
        }
    }
}

export const validateAccessToken = () => {
    return async (dispatch: ThunkDispatch<IRootState, null, RootActions>) => {
        const accessToken = localStorage.getItem("X-YOLOGRAM-USER-AUTH-TOKEN")
        if (accessToken) {
            // LocalStorage에 AccessToken이 존재하면
            try {
                // AccessToken이 유효하면
                const { data } = await authApi.validateToken({accessToken: accessToken})
                return dispatch(validateAccessTokenAction(data.data.accessToken));
            } catch (err) {

                // AccessToken이 유효하지 않으면
                const { response: {
                    data: {
                        data: {
                            errorCode,
                            errorMessage
                        }
                    }
                } } = err;

                return dispatch(error(err));
            }
        } else {
            // LocalStorage에 AccessToken이 존재하지 않으면
            console.log("access token not exists.")
            return dispatch(error());
        }
    }
}

export const login = (payload: ILoginPayload) => {
    return async (dispatch: ThunkDispatch<IRootState, null, RootActions>, getState: () => IRootState): Promise<ILoginResult | IFailAction> => {
        try {
            const { data } = await authApi.login({
                email: payload.email,
                password: payload.password
            })

            const { uid, accessToken } = data.data

            localStorage.setItem("X-YOLOGRAM-USER-AUTH-TOKEN", accessToken)

            dispatch(
                loginAction({
                    isLoggedIn: true,
                    accessToken: accessToken
                })
            )

            // getState().auth.accessToken = "qweqweqwe"

            // const { session } = getState().auth;
            // login 처리
            return data

        } catch(err) {

            const { response: {
                data: {
                    data: {
                        errorCode,
                        errorMessage
                    }
                }
            } } = err;

            if (errorCode) {
                return { ...err.response.data.data }
            }

            return dispatch(fail())
        }
    }
}

export const logout = () => {
    return async (dispatch: ThunkDispatch<IRootState, null, RootActions>, getState: () => IRootState): Promise<ILogoutAction | IFailAction> => {

        const accessToken = localStorage.getItem("X-YOLOGRAM-USER-AUTH-TOKEN")

        if (accessToken) {
            // LocalStorage에 AccessToken이 존재하면
            try {
                const { data } = await authApi.logout({accessToken})
                console.log(data)

                return dispatch(logoutAction())
            } catch (err) {
                // AccessToken이 유효하지 않으면
                const { response: {
                    data: {
                        data: {
                            errorCode,
                            errorMessage
                        }
                    }
                } } = err;            
    
                return dispatch(fail(err));
            }

        } else {
            // LocalStorage에 AccessToken이 존재하지 않으면
            console.log("access token not exists.")
            return dispatch(fail());            
        }
    }
}


export const validateAccessTokenAction = (accessToken: string): IValidateAccessTokenAction => {
    return {
        type: ActionTypes.VALIDATE_ACCESS_TOKEN,
        accessToken: accessToken
    }
}

export const logoutAction = (): ILogoutAction => {
    return {
        type: ActionTypes.LOGOUT
    }
}

export const getUserInfoAction = (): IGetUserInfoAction => {
    return {
        type: ActionTypes.GET_USER_INFO
    }
}