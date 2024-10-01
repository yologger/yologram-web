export interface IErrorState {
  toggle: boolean;
  message: string;
  authorized: boolean;
}

enum ActionTypes {
  INIT = "INIT",
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
  UNAUTHORIZED = "UNAUTHORIZED",
  ERROR = "ERROR",
  CLOSE_UNAUTHORIZED = "CLOSE_UNAUTHORIZED",
}

export interface IInitAction {
  readonly type: ActionTypes.INIT;
}

export interface ISuccessAction {
  readonly type: ActionTypes.SUCCESS;
  readonly payload: string;
}

export interface IFailAction {
  readonly type: ActionTypes.FAIL;
  readonly payload: string;
}

export interface IUnauthorizedAction {
  readonly type: ActionTypes.UNAUTHORIZED;
  readonly payload: string;
}

export interface ICloseUnauthorizedAction {
  readonly type: ActionTypes.CLOSE_UNAUTHORIZED;
}

export interface IErrorAction {
  readonly type: ActionTypes.ERROR;
  readonly payload: string;
}

export type ErrorActions =
  | IInitAction
  | ISuccessAction
  | IFailAction
  | IUnauthorizedAction
  | ICloseUnauthorizedAction
  | IErrorAction;

export default ActionTypes;
