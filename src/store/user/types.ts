enum ActionTypes {
  JOIN = 'JOIN',
  WITHDRAW = 'WITHDRAW'
}

export interface IUserState {
  uid?: number;
  email?: string;
  name?: string;
  nickname?: string;
}

export interface IJoinAction {
  readonly type: ActionTypes.JOIN;
}

export interface IWithdrawAction {
  readonly type: ActionTypes.WITHDRAW;
}

export default ActionTypes;

export type UserActions = IJoinAction | IWithdrawAction;
