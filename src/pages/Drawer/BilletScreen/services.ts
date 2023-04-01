import api from 'api';

export const getDocs = async (id: number) => {
  //TODO!: fix this, dont send id because is mocked, with this we recive a error
  const { data } = await api.get(`/billets/`);
  return data;
};
