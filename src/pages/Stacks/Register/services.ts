import api from 'api';
import { UserRegister } from '.';

export const handleRegister = async (body: UserRegister) => {
  const response = await api.post('/auth/register', body);
  console.log('res', response.data);
  return response.data;
};
