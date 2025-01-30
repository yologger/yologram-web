import { AxiosResponse } from 'axios';

import authApi from '.';

type Request = {
  accessToken: string;
};

type Response = {
  data: {
    uid: number;
  };
};

export const logout = (request: Request): Promise<AxiosResponse<Response>> => {
  const path = '/v1/logout';
  return authApi.post(path, null, {
    headers: {
      'X-YOLOGRAM-USER-AUTH-TOKEN': request.accessToken
    }
  });
};
