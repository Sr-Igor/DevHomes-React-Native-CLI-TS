import api from 'api';

export const myReservations = async (id: number) => {
  //TODO!: fix this, dont send property because is mocked, with this we recive a error
  const { data } = await api.get(`/myreservations/`);
  return data;
};

export const removeReservation = async (id: number) => {
  const { data } = await api.delete(`/reservation/${id}`);
  return data;
};
