export interface IJoinResult {
    data?: {
        uid: number;
    }
    errorCode?: string
    errorMessage?: string
}

export interface IJoinData {
    email: string
    name: string
    nickname: string
    password: string
}