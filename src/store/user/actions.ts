import { ThunkDispatch } from 'redux-thunk';
import { IRootState, RootActions } from '~/store';
import * as umsApi from '~/api/ums';
import { error, fail } from '~/store/error';
import { IJoinPayload, IJoinResult } from '~/types/ums';

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
      const { response } = err;
      const { data } = response;

      if (data.data) {
        const { errorCode, errorMessage } = data.data;
        if (errorCode === 'DUPLICATE_USER') {
          return { ...err.response.data.data };
        }

        dispatch(fail(`[${errorCode}] ${errorMessage}`));
        return { ...err.response.data.data };
      } else {
        dispatch(error());
        return {
          data: null,
          errorCode: 'Not Found',
          errorMessage: '서버에 접근할 수 없습니다.'
        };
      }
    }
  };
};
