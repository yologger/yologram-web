import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';

import errorReducer, { ErrorTypes } from './error';
import commonReducer, { CommonTypes } from './common';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = applyMiddleware(thunk);

const withReduxDevTools = composeWithDevTools({ trace: true, traceLimit: 25 });

export interface IRootState {
  error: ErrorTypes.IErrorState;
  common: CommonTypes.ICommonState;
}

export type RootActions = IDefaultAction | ErrorTypes.ErrorActions | CommonTypes.CommonActions;

export enum ActionTypes {
  DEFAULT = 'DEFAULT'
}

export interface IDefaultAction {
  readonly type: ActionTypes.DEFAULT;
}

const rootReducer = combineReducers({
  error: errorReducer,
  common: commonReducer
});

const store = createStore(
  rootReducer,
  process.env.NODE_ENV === 'development' ? withReduxDevTools(middlewares) : middlewares
);

export default store;
