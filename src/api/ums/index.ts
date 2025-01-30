import axios from 'axios';
import * as process from 'process';

const umsApi = axios.create({
  baseURL: `${process.env.REACT_APP_API}/api/ums`
});

export * from './join';

export default umsApi;
