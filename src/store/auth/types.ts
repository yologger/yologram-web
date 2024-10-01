import { IUserInfo } from "~/types"

enum ActionTypes {
  LOGIN = "LOGIN",
  VALIDATE_ACCESS_TOKEN = "VALIDATE_ACCESS_TOKEN", 
  LOGOUT = "LOGOUT",
  GET_USER_INFO = "GET_USER_INFO"
}

export interface IAuthState {
  isLoggedIn: boolean,
  accessToken?: string,
  userInfo: IUserInfo
}

export interface ILoginAction {
  readonly type: ActionTypes.LOGIN
}

export interface IValidateAccessTokenAction {
  readonly type: ActionTypes.VALIDATE_ACCESS_TOKEN
}

export interface ILogoutAction {
  readonly type: ActionTypes.LOGOUT
}

export interface IGetUserInfoAction {
  readonly type: ActionTypes.GET_USER_INFO
}

export default ActionTypes

export type AuthActions = 
  | ILoginAction
  | ILogoutAction
  | IGetUserInfoAction
  | IValidateAccessTokenAction