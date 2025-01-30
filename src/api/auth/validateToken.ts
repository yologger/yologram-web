import { AxiosResponse } from 'axios';

import authApi from '.';

type Request = {
  accessToken: string;
};

type Response = {
  data: {
    accessToken: string;
    uid: number;
    email: string;
    name: string;
    nickname: string;
  };
};

export const validateToken = ({ accessToken }: Request): Promise<AxiosResponse<Response>> => {
  const path = '/v1/validate_token';
  return authApi.post(path, null, {
    headers: {
      'X-YOLOGRAM-USER-AUTH-TOKEN': accessToken
    }
  });
};
