import api from 'api';

export const getDocs = async () => {
  const { data } = await api.get('/docs');
  return data;
};
