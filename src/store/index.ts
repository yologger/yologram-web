import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';

import errorReducer, { ErrorTypes } from './error';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = applyMiddleware(thunk);

const withReduxDevTools = composeWithDevTools({ trace: true, traceLimit: 25 });

export interface IRootState {
  error: ErrorTypes.IErrorState;
}

export type RootActions = IDefaultAction | ErrorTypes.ErrorActions;

export enum ActionTypes {
  DEFAULT = 'DEFAULT'
}

export interface IDefaultAction {
  readonly type: ActionTypes.DEFAULT;
}

const rootReducer = combineReducers({
  error: errorReducer
});

const store = createStore(
  rootReducer,
  process.env.NODE_ENV === 'development' ? withReduxDevTools(middlewares) : middlewares
);

export default store;
