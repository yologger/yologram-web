export interface IJoinPayload {
  email: string;
  name: string;
  nickname: string;
  password: string;
}

export interface IJoinResult {
  data?: {
    uid: number;
  };
  errorCode?: string;
  errorMessage?: string;
}
