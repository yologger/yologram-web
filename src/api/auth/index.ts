import axios from 'axios';
import * as process from 'process';

const authApi = axios.create({
  baseURL: `${process.env.REACT_APP_API}/api/auth`
});

export * from './login';
export * from './validateToken';
export * from './logout';

export default authApi;
