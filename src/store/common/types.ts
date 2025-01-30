export interface ICommonState {
  popupCount: number;
  isLoginPopupOpened: boolean;
}

enum ActionTypes {
  SET_LOGIN_POPUP = 'SET_LOGIN_POPUP',
  ADD_POPUP_COUNT = 'ADD_POPUP_COUNT',
  DELETE_POPUP_COUNT = 'DELETE_POPUP_COUNT'
}

export interface ISetLoginPopup {
  readonly type: ActionTypes.SET_LOGIN_POPUP;
  readonly payload: {
    isLoginPopupOpen: boolean;
  };
}

export interface IAddPopupCountAction {
  readonly type: ActionTypes.ADD_POPUP_COUNT;
}

export interface IDeletePopupCountAction {
  readonly type: ActionTypes.DELETE_POPUP_COUNT;
}

export type CommonActions = ISetLoginPopup | IAddPopupCountAction | IDeletePopupCountAction;

export default ActionTypes;
