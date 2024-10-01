import { RootActions } from "~/store";
import ActionTypes, { IErrorState } from "./types";

export const initialState: IErrorState = {
  toggle: false,
  message: "",
  authorized: true,
};

export default (
  state: IErrorState = initialState,
  action: RootActions
): IErrorState => {
  switch (action.type) {
    case ActionTypes.INIT:
      return {
        ...state,
        toggle: false,
        message: "",
      };
    case ActionTypes.SUCCESS:
      return {
        ...state,
        toggle: true,
        message: action.payload,
      };
    case ActionTypes.FAIL:
      return {
        ...state,
        toggle: true,
        message: action.payload,
      };
    case ActionTypes.UNAUTHORIZED:
      return {
        ...state,
        authorized: false,
      };
    case ActionTypes.CLOSE_UNAUTHORIZED:
      return {
        ...state,
        authorized: true,
      };
    case ActionTypes.ERROR:
      return {
        ...state,
        toggle: false,
        message: action.payload,
      };
    default:
      return state;
  }
};
