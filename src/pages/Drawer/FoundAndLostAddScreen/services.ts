import api from 'api';
import { GetToken } from 'api/globalFunctions';
import { Asset } from 'react-native-image-picker';

type Data = {
  description: string;
  where: string;
  photo: Asset;
};

export const saveFoundAndLost = async (item: Data) => {
  const formData = new FormData();

  formData.append('description', item.description);
  formData.append('where', item.where);
  formData.append('photo', {
    uri: item.photo.uri,
    type: item.photo.type,
    name: item.photo.fileName
  });

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${await GetToken()}`
    }
  };

  const { data } = await api.post('/foundandlost', formData, config);
  return data;
};
