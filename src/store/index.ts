import { Reducer, combineReducers, createStore } from "redux";
import errorReducer, { ErrorTypes } from "~/store/error";
import commonReducer, { CommonTypes } from "~/store/common";

export interface IRootState {
  error: ErrorTypes.IErrorState;
  common: CommonTypes.ICommonState;
}

export type RootActions =
  | IDefaultAction
  | ErrorTypes.ErrorActions
  | CommonTypes.CommonActions

export enum ActionTypes {
  DEFAULT = "DEFAULT",
}

export interface IDefaultAction {
  readonly type: ActionTypes.DEFAULT;
}

export const rootReducer: Reducer<IRootState> = combineReducers({
  error: errorReducer,
  common: commonReducer
});

const store = createStore(rootReducer);

export default store;