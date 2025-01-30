import ActionTypes, {
  IAddPopupCountAction,
  IDeletePopupCountAction,
  ISetLoginPopup
} from './types';

export const setLoginPopup = (isLoginPopupOpen: boolean): ISetLoginPopup => ({
  type: ActionTypes.SET_LOGIN_POPUP,
  payload: {
    isLoginPopupOpen
  }
});

export const addPopupCount = (): IAddPopupCountAction => ({
  type: ActionTypes.ADD_POPUP_COUNT
});

export const deletePopupCount = (): IDeletePopupCountAction => ({
  type: ActionTypes.DELETE_POPUP_COUNT
});
