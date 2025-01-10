import { AxiosResponse } from "axios";
import * as process from "process";

import authApi from ".";

type Request = {
    accessToken: string
}

type Response = {
    data: {
        uid: number;
        accessToken: string;
    };
}

export const validateToken = ({ accessToken }: Request): Promise<AxiosResponse<Response>> => {
    const path = '/v1/validate_token'
    return authApi.post(path, null, {
        headers: {
            "X-YOLOGRAM-USER-AUTH-TOKEN": accessToken,
        },
    })
}