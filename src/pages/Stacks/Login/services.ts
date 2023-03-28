import api from 'api';

export const handleLogin = async (cpf: string, password: string) => {
  const response = await api.post('/auth/login', {
    cpf,
    password
  });

  return response.data;
};
