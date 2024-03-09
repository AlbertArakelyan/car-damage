import axios, { Method, AxiosResponse } from 'axios';

import { apiUrl } from '../constants';

const axiosApi = axios.create({
  baseURL: apiUrl,
});

// axiosApi.interceptors.request.use((req) => {
//   if (req && req.headers && req.method !== 'GET') {
//     req.headers['Content-Type'] = 'application/json';
//   }
// });

const request = <T = any, D = any, R = AxiosResponse<T>>(
  method: Method,
  url: string,
  data?: D,
  params?: any
): Promise<R> => {
  return axiosApi
    .request<T, R, D>({
      method,
      url,
      data,
      params,
    })
    .then((response): R => {
      return response;
    })
    .catch((error) => {
      console.log(method, url, error.message);
      return error.response;
    });
};

export default request;