import api from 'api';
import { UserSignIn } from '.';

export const handleLogin = async (body: UserSignIn) => {
  const response = await api.post('/auth/login', body);

  return response.data;
};
