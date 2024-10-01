import { Reducer, combineReducers, createStore } from "redux";
import errorReducer, { ErrorTypes } from "~/store/error";
import commonReducer, { CommonTypes } from "~/store/common";
import authReducer, { AuthTypes } from "~/store/auth";

export interface IRootState {
  error: ErrorTypes.IErrorState;
  common: CommonTypes.ICommonState;
  auth: AuthTypes.IAuthState;
}

export type RootActions =
  | IDefaultAction
  | ErrorTypes.ErrorActions
  | CommonTypes.CommonActions
  | AuthTypes.AuthActions

export enum ActionTypes {
  DEFAULT = "DEFAULT",
}

export interface IDefaultAction {
  readonly type: ActionTypes.DEFAULT;
}

export const rootReducer: Reducer<IRootState> = combineReducers({
  error: errorReducer,
  common: commonReducer,
  auth: authReducer
});

const store = createStore(rootReducer);

export default store;