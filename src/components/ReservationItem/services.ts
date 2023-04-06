import api from 'api';

export const likeWall = async (id: number) => {
  const { data } = await api.post(`/wall/${id}/like`);
  return data;
};
