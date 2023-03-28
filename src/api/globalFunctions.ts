import AsyncStorage from '@react-native-async-storage/async-storage';
import api from 'api';

export const getToken = async () => {
  const token = await AsyncStorage.getItem('token');
  return token;
};

export const validateToken = async () => {
  const token = await getToken();
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
