import api from 'api';
import { GetToken } from 'api/globalFunctions';
import { Asset } from 'react-native-image-picker';

export const addWarningFile = async (file: Asset) => {
  console.log('file', file);
  const formData = new FormData();

  formData.append('photo', {
    uri: file.uri,
    type: file.type,
    name: file.fileName
  });

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${await GetToken()}`
    }
  };

  const { data } = await api.post('/warning/file', formData, config);
  return data;
};

export const addWarning = async (property: number, title: string, list: string[]) => {
  const { data } = await api.post('/warning', {
    // property, //TODO!: fix this, dont send id because is mocked, with this we recive a error
    title,
    list
  });
  return data;
};
