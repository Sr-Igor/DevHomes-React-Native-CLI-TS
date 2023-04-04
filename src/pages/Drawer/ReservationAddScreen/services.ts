import api from 'api';

export const getUnvalableDates = async (id: number) => {
  const { data } = await api.get(`/reservation/${id}/disableddates`);
  return data;
};

export const getAvailableHours = async (id: number, date: string) => {
  const { data } = await api.get(`/reservation/${id}/times?date=${date}`);
  return data;
};

export const addReservation = async (id: number, date: string, time: string, property: number) => {
  //TODO!: fix this, dont send property because is mocked, with this we recive a error
  const { data } = await api.post(`/reservation/${id}`, {
    // property,
    date,
    time
  });
  return data;
};
