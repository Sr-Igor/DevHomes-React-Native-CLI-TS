import axios from 'axios';
import { getToken } from './globalFunctions';

import { api_url } from '../../app.json';

const api = axios.create({ baseURL: api_url });

api.interceptors.request.use(
  async (config) => {
    const token = getToken();
    config.timeout = 5000;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
