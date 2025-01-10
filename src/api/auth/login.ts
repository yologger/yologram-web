import { AxiosResponse } from "axios";

import authApi from ".";

type Request = {
    email: string
    password: string
}

type Response = {
    data: {
        uid: number;
        accessToken: string;
    };
}

export const login = (request: Request): Promise<AxiosResponse<Response>> => {
    const path = '/v1/login'
    return authApi.post(path, request)
}