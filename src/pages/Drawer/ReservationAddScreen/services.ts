import api from 'api';

export const getUnvalableDates = async (id: number) => {
  const { data } = await api.get(`/reservation/${id}/disableddates`);
  return data;
};
