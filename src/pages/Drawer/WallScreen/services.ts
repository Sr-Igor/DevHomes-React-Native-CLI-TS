import api from 'api';

export const getWarning = async () => {
  const { data } = await api.get('/walls');
  return data;
};
