import { RootActions } from "~/store";
import ActionTypes, { IAuthState } from "./types";

export const initialState: IAuthState = {
    isLoggedIn: false,
    accessToken: null,
    userInfo: {
        email: "test@test.com",
        name: "test_name",
        nickname: "test_nickname"
    }
}

export default (state: IAuthState = initialState, action: RootActions): IAuthState => {
    switch (action.type) {
        case ActionTypes.LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                accessToken: action.payload.accessToken
            }
        case ActionTypes.VALIDATE_ACCESS_TOKEN:
            return {
                ...state,
                isLoggedIn: true,
                accessToken: action.accessToken
            }
        case ActionTypes.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                accessToken: null
            }
        case ActionTypes.GET_USER_INFO:
            return state;            
        default:
            return state;
    }
}