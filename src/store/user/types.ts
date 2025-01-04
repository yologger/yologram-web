enum ActionTypes {
    JOIN = "JOIN",
    WITHDRAW = "WITHDRAW",
}

export interface IUserState {

}


export interface IJoinAction {
    readonly type: ActionTypes.JOIN
}

export interface IWithdrawAction {
    readonly type: ActionTypes.WITHDRAW
}

export default ActionTypes

export type UserActions =
    | IJoinAction
    | IWithdrawAction