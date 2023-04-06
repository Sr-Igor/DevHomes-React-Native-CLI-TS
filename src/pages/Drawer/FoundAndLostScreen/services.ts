import api from 'api';

export const getFoundAndLost = async () => {
  const { data } = await api.get(`/foundandlost`);
  return data;
};

export const recovereFoundAndLost = async (id: number) => {
  const { data } = await api.put(`/foundandlost/${id}`, {
    status: 'recovered'
  });
  return data;
};
