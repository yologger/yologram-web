import { AxiosResponse } from 'axios';

import umsApi from '.';

type Request = {
  email: string;
  name: string;
  nickname: string;
  password: string;
};

type Response = {
  uid: number;
};

export const join = (request: Request): Promise<AxiosResponse<Response>> => {
  const path = '/v1/join';
  return umsApi.post(path, request);
};
