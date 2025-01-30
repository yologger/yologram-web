import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';

import errorReducer, { ErrorTypes } from '~/store/error';
import commonReducer, { CommonTypes } from '~/store/common';
import authReducer, { AuthTypes } from '~/store/auth';
import userReducer, { UserTypes } from '~/store/user';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = applyMiddleware(thunk);

const withReduxDevTools = composeWithDevTools({ trace: true, traceLimit: 25 });

export interface IRootState {
  error: ErrorTypes.IErrorState;
  common: CommonTypes.ICommonState;
  auth: AuthTypes.IAuthState;
  user: UserTypes.IUserState;
}

export type RootActions =
  | IDefaultAction
  | ErrorTypes.ErrorActions
  | CommonTypes.CommonActions
  | AuthTypes.AuthActions
  | UserTypes.UserActions;

export enum ActionTypes {
  DEFAULT = 'DEFAULT'
}

export interface IDefaultAction {
  readonly type: ActionTypes.DEFAULT;
}

const rootReducer = combineReducers({
  error: errorReducer,
  common: commonReducer,
  auth: authReducer,
  user: userReducer
});

const store = createStore(
  rootReducer,
  process.env.NODE_ENV === 'development' ? withReduxDevTools(middlewares) : middlewares
);

export default store;
