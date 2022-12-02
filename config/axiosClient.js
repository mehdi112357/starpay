import axios from 'axios';
import * as AxiosLogger from 'axios-logger';

const axiosClient = axios.create({
  baseURL: process.env.NEXT_API_HOST ?? process.env.NEXT_PUBLIC_API_HOST,
  headers: { 'Content-Type': 'application/json' },
});

if (process.env.NODE_ENV === 'development') {
  setupDevInterceptors();
}

function setupDevInterceptors() {
  axiosClient.interceptors.request.use(request => {
    return AxiosLogger.requestLogger(request);
  }, AxiosLogger.errorLogger);
  axiosClient.interceptors.response.use(response => {
    return AxiosLogger.responseLogger(response);
  }, AxiosLogger.errorLogger);
}

export default axiosClient;
