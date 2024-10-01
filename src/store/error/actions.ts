import ActionTypes, { IInitAction, ISuccessAction, IFailAction, IUnauthorizedAction, ICloseUnauthorizedAction, IErrorAction } from './types';

export const init = (): IInitAction => ({
  type: ActionTypes.INIT,
});

export const success = (msg = '요청에 성공했습니다.'): ISuccessAction => ({
  type: ActionTypes.SUCCESS,
  payload: msg,
});

export const fail = (msg = '요청에 실패했습니다.'): IFailAction => ({
  type: ActionTypes.FAIL,
  payload: msg,
});

export const unauthorized = (msg = '권한이 없습니다.'): IUnauthorizedAction => ({
  type: ActionTypes.UNAUTHORIZED,
  payload: msg,
});

export const closeUnauthorized = (): ICloseUnauthorizedAction => ({
  type: ActionTypes.CLOSE_UNAUTHORIZED,
});

export const error = (msg = '알수없는 오류가 발생했습니다.'): IErrorAction => ({
  type: ActionTypes.ERROR,
  payload: msg,
});
