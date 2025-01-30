import { RootActions } from '~/store';
import ActionTypes, { IAuthState } from './types';

export const initialState: IAuthState = {
  accessToken: null,
  userInfo: null
};

export default (state: IAuthState = initialState, action: RootActions): IAuthState => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        userInfo: {
          uid: action.payload.userInfo.uid,
          email: action.payload.userInfo.email,
          name: action.payload.userInfo.name,
          nickname: action.payload.userInfo.nickname
        }
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        accessToken: null,
        userInfo: null
      };
    case ActionTypes.GET_USER_INFO:
      return state;
    default:
      return state;
  }
};
