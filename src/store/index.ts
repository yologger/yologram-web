import {Reducer, combineReducers, createStore, StoreEnhancer, applyMiddleware} from "redux";
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';
import errorReducer, { ErrorTypes } from "~/store/error";
import commonReducer, { CommonTypes } from "~/store/common";
import authReducer, { AuthTypes } from "~/store/auth";
import userReducer, { UserTypes } from "~/store/user"

const reduxEnhancer: StoreEnhancer<{ dispatch: ThunkDispatch<IRootState, null, RootActions> }> = applyMiddleware(
    thunkMiddleware
);

export interface IRootState {
  error: ErrorTypes.IErrorState;
  common: CommonTypes.ICommonState;
  auth: AuthTypes.IAuthState;
  user: UserTypes.IUserState
}

export type RootActions =
  | IDefaultAction
  | ErrorTypes.ErrorActions
  | CommonTypes.CommonActions
  | AuthTypes.AuthActions
  | UserTypes.UserActions

export enum ActionTypes {
  DEFAULT = "DEFAULT",
}

export interface IDefaultAction {
  readonly type: ActionTypes.DEFAULT;
}

export const rootReducer: Reducer<IRootState> = combineReducers({
  error: errorReducer,
  common: commonReducer,
  auth: authReducer,
  user: userReducer
});

const store = createStore(rootReducer, reduxEnhancer);

export default store;