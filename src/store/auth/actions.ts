import ActionTypes, { IGetUserInfoAction, ILoginAction, ILogoutAction } from './types';
import { ThunkDispatch } from 'redux-thunk';
import { IRootState, RootActions } from '~/store';
import { IFailAction } from '~/store/error/types';
import * as authApi from '~/api/auth';
import { fail } from '~/store/error';
import { ILoginPayload, ILoginResult, ILogoutResult, IUserInfo } from '~/types';

export const validateAccessToken = () => {
  return async (
    dispatch: ThunkDispatch<IRootState, null, RootActions>,
    getState: () => IRootState
  ): Promise<ILoginAction> => {
    const accessToken = localStorage.getItem('X-YOLOGRAM-USER-AUTH-TOKEN');

    // LocalStorage에 AccessToken이 존재하지 않으면
    if (!accessToken) {
      // console.log("access token not exists.")
      return;
    }

    try {
      // AccessToken이 유효하면
      const { data } = await authApi.validateToken({ accessToken: accessToken });
      const { uid, email, name, nickname } = data.data;
      dispatch(loginAction(accessToken, { uid, email, name, nickname }));
    } catch (err) {
      // AccessToken이 유효하지 않으면
      const {
        response: {
          data: {
            data: { errorCode, errorMessage }
          }
        }
      } = err;
      // console.log(errorCode)
      // console.log(errorMessage)
      localStorage.removeItem('X-YOLOGRAM-USER-AUTH-TOKEN');
      dispatch(logoutAction());
    }
  };
};

export const login = (payload: ILoginPayload) => {
  return async (
    dispatch: ThunkDispatch<IRootState, null, RootActions>,
    getState: () => IRootState
  ): Promise<ILoginResult> => {
    try {
      const { data } = await authApi.login({
        email: payload.email,
        password: payload.password
      });
      const { uid, accessToken, email, name, nickname } = data.data;

      localStorage.setItem('X-YOLOGRAM-USER-AUTH-TOKEN', accessToken);

      dispatch(
        loginAction(accessToken, {
          uid,
          email,
          name,
          nickname
        })
      );

      return data;
    } catch (err) {
      const {
        response: {
          data: {
            data: { errorCode, errorMessage }
          }
        }
      } = err;

      if (errorCode === 'USER_NOT_FOUND') {
        return { ...err.response.data.data };
      }

      if (errorCode === 'WRONG_PASSWORD') {
        return { ...err.response.data.data };
      }

      dispatch(fail(errorMessage));
      return { ...err.response.data.data };
    }
  };
};

export const logout = () => {
  return async (
    dispatch: ThunkDispatch<IRootState, null, RootActions>,
    getState: () => IRootState
  ): Promise<void> => {
    const accessToken = localStorage.getItem('X-YOLOGRAM-USER-AUTH-TOKEN');

    if (accessToken) {
      // LocalStorage에 AccessToken이 존재하면
      try {
        const { data } = await authApi.logout({ accessToken });
        localStorage.removeItem('X-YOLOGRAM-USER-AUTH-TOKEN');
        dispatch(logoutAction());
        return;
      } catch (err) {
        // AccessToken이 유효하지 않으면
        const {
          response: {
            data: {
              data: { errorCode, errorMessage }
            }
          }
        } = err;
        dispatch(logoutAction());
        return;
      }
    } else {
      // LocalStorage에 AccessToken이 존재하지 않으면
      dispatch(logoutAction());
      return;
    }
  };
};

export const loginAction = (accessToken: string, userInfo: IUserInfo): ILoginAction => {
  return {
    type: ActionTypes.LOGIN,
    payload: {
      accessToken: accessToken,
      userInfo: userInfo
    }
  };
};

export const logoutAction = (): ILogoutAction => {
  return {
    type: ActionTypes.LOGOUT
  };
};

export const getUserInfoAction = (): IGetUserInfoAction => {
  return {
    type: ActionTypes.GET_USER_INFO
  };
};
