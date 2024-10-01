import ActionTypes, { ICommonState } from './types';
import { RootActions } from '../index';

export const initialState: ICommonState = {
  popupCount: 0,
  isShownLoginPopup: false
};

export default (state: ICommonState = initialState, action: RootActions): ICommonState => {
  switch (action.type) {
    case ActionTypes.SET_LOGIN_POPUP:
      return {
        ...state,
        isShownLoginPopup: action.payload.isLoginPopupOpen
      };
    case ActionTypes.ADD_POPUP_COUNT:
      return {
        ...state,
        popupCount: state.popupCount + 1,
      };
    case ActionTypes.DELETE_POPUP_COUNT:
      return {
        ...state,
        popupCount: state.popupCount - 1,
      };
    default:
      return state;
  }
};
