import {IJoinPayload, IJoinResult} from "~/types";
import {ThunkDispatch} from "redux-thunk";
import {IRootState, RootActions} from "~/store";
import * as umsApi from "~/api/ums";
import {fail} from "~/store/error";
import {IFailAction} from "~/store/error/types";

export const joinAction = (payload: IJoinPayload) => {
    return async (dispatch: ThunkDispatch<IRootState, null, RootActions>, getState: () => IRootState): Promise<IJoinResult | IFailAction> => {
        try {
            const { data } = await umsApi.join({
                email: payload.email,
                name: payload.name,
                nickname: payload.nickname,
                password: payload.password
            })

            console.log(data)

            // const { session } = getState().auth;
            // login 처리

            return {
                data: data
            }

        } catch(err) {

            const { response: {
                data: {
                    data: {
                        errorCode,
                        errorMessage
                    }
                }
            } } = err;

            console.log(errorCode)
            console.log(errorMessage)

            // if (errorCode === 'DUPLICATE_USER') {
            //     return { ...err.response.data.data };
            // }
            //
            // if (errorCode === 'METHOD_ARGUMENT_NOT_VALID') {
            //     return { ...err.response.data.data };
            // }
            //
            // if (errorCode === 'METHOD_ARGUMENT_NOT_VALID') {
            //     return { ...err.response.data.data };
            // }
            //
            // if (errorCode === 'HTTP_MESSAGE_NOT_READABLE') {
            //     return { ...err.response.data.data };
            // }

            if (errorCode) {
                return { ...err.response.data.data };
            }

            return dispatch(fail());
        }
    }
}