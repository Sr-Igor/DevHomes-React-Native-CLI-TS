import axios from 'axios';
import { GetToken } from './globalFunctions';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

import { api_url } from '../../app.json';

const api = axios.create({ baseURL: api_url });

api.interceptors.request.use(
  async (config) => {
    const token = await GetToken();
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

api.interceptors.response.use((response) => {
  if (response.data.error) {
    Toast.show({
      type: 'error',
      text1: 'Erro',
      text2: response.data.error,
      visibilityTime: 6000
    });
  }

  return response;
});

export default api;
