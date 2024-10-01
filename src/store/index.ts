import { Reducer, combineReducers, createStore } from "redux";
import errorReducer, { ErrorTypes } from "~/store/error";

export interface IRootState {
  error: ErrorTypes.IErrorState;
}

export type RootActions =
  | IDefaultAction
  | ErrorTypes.ErrorActions

export enum ActionTypes {
  DEFAULT = "DEFAULT",
}

export interface IDefaultAction {
  readonly type: ActionTypes.DEFAULT;
}

export const rootReducer: Reducer<IRootState> = combineReducers({
  error: errorReducer
});

const store = createStore(rootReducer);

export default store;