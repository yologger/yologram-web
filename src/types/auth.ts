export interface ILoginPayload {
  email: string;
  password: string;
}

export interface ILoginResult {
  data?: {
    uid?: number;
    accessToken?: string;
  };
  errorCode?: string;
  errorMessage?: string;
}

export interface ILogoutResult {
  data?: {
    uid?: number;
  };
  errorCode?: string;
  errorMessage?: string;
}
