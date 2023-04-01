import api from 'api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GetToken = async () => {
  const token = await AsyncStorage.getItem('token');
  return token;
};

export const validateToken = async () => {
  const token = await GetToken();
  if (token) {
    try {
      const response = await api.get('/auth/validate');
      return response.data;
    } catch (err) {
      return false;
    }
  }
  return false;
};
