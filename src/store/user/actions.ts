import { IJoinPayload, IJoinResult } from '~/types';
import { ThunkDispatch } from 'redux-thunk';
import { IRootState, RootActions } from '~/store';
import * as umsApi from '~/api/ums';
import { fail } from '~/store/error';

export const join = (payload: IJoinPayload) => {
  return async (
    dispatch: ThunkDispatch<IRootState, null, RootActions>,
    getState: () => IRootState
  ): Promise<IJoinResult> => {
    try {
      const { data } = await umsApi.join({
        email: payload.email,
        name: payload.name,
        nickname: payload.nickname,
        password: payload.password
      });

      return {
        data: data
      };
    } catch (err) {
      const {
        response: {
          data: {
            data: { errorCode, errorMessage }
          }
        }
      } = err;

      if (errorCode === 'DUPLICATE_USER') {
        return { ...err.response.data.data };
      }

      dispatch(fail(`[${errorCode}] ${errorMessage}`));
      return { ...err.response.data.data };
    }
  };
};
