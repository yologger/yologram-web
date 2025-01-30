import { IUserInfo } from '~/types/userInfo';

enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  GET_USER_INFO = 'GET_USER_INFO'
}

export interface IAuthState {
  accessToken?: string;
  userInfo?: IUserInfo;
}

export interface ILoginAction {
  readonly type: ActionTypes.LOGIN;
  readonly payload: {
    accessToken: string;
    userInfo: IUserInfo;
  };
}

export interface ILogoutAction {
  readonly type: ActionTypes.LOGOUT;
}

export interface IGetUserInfoAction {
  readonly type: ActionTypes.GET_USER_INFO;
}

export default ActionTypes;

export type AuthActions = ILoginAction | ILogoutAction | IGetUserInfoAction;
