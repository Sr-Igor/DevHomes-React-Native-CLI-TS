import api from 'api';

export const getReservations = async () => {
  const { data } = await api.get(`/reservations`);
  return data;
};
