import api from 'api';

export const getWarnings = async (id: number) => {
  //TODO!: fix this, dont send id because is mocked, with this we recive a error
  const { data } = await api.get(`/warnings/`);
  return data;
};
