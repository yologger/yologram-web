import ActionTypes, { IUserState } from './types';
import { RootActions } from '~/store';

export const initialState: IUserState = {};

export default (state: IUserState = initialState, action: RootActions): IUserState => {
  switch (action.type) {
    case ActionTypes.JOIN:
      return state;
    case ActionTypes.WITHDRAW:
      return state;
    default:
      return state;
  }
};
