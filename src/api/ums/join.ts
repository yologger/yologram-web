import { AxiosResponse } from "axios";

import umsApi from ".";

type Payload = {
    email: string
    name: string
    nickname: string
    password: string
}

type Response = {
    data: {
        uid: number;
    };
}

export const join = (payload: Payload): Promise<AxiosResponse<Response>> => {
    const path = '/v1/join'
    return umsApi.post(path, payload)
}