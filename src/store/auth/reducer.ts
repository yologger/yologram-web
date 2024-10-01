import { RootActions } from "~/store";
import ActionTypes, { IAuthState } from "./types";

export const initialState: IAuthState = {
    isLoggedIn: false,
    accessToken: "dummy_access_token",
    userInfo: {
        email: "test@test.com",
        name: "test_name",
        nickname: "test_nickname"
    }
}

export default (state: IAuthState = initialState, action: RootActions): IAuthState => {
    switch (action.type) {
        case ActionTypes.LOGIN:
            return state;
        case ActionTypes.VALIDATE_ACCESS_TOKEN:
            return state;    
        case ActionTypes.LOGOUT:
            return state;
        case ActionTypes.GET_USER_INFO:
            return state;            
        default:
            return state;
    }
}