import * as services from './services';
import { useState } from 'react';
import * as S from './styled';

import { Profile } from 'types/user';
import { useAppSelector } from 'hooks/redux-hook';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from 'types/Navigation';

import theme from 'styles/theme';

import { InputText } from 'components/InputText';
import DefaultTitle from 'components/Title';
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchCamera } from 'react-native-image-picker';
import DefaultButton from 'components/Button';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export const WarningAddScreen = () => {
  const [title, setTitle] = useState('');
  const [photoList, setPhotoList] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<StackNavigation>();

  const auth: Profile = useAppSelector((state) => state.profile);

  const handleAddPhoto = async () => {
    launchCamera(
      {
        mediaType: 'photo',
        maxWidth: 1280
      },
      async (res) => {
        setLoading(true);
        if (!res.didCancel && res?.assets) {
          const response = await services.addWarningFile(res.assets[0]);
          if (!response.error) {
            setPhotoList([...photoList, response.photo]);
          }
          setLoading(false);
        }
      }
    );
  };

  const handleDeletePhoto = async (photo: string) => {
    setPhotoList(photoList.filter((item) => item !== photo));
  };

  const handleSaveOcurrence = async () => {
    if (!title) {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'Digite o titulo da ocorrência'
      });
      return;
    }
    const res = await services.addWarning(auth?.property?.id, title, photoList);

    if (!res.error) {
      Toast.show({
        type: 'success',
        text1: 'Sucesso',
        text2: 'Ocorrência cadastrada com sucesso'
      });
      navigation.goBack();
    }
  };

  return (
    <S.Container>
      <S.Scroller>
        <DefaultTitle title="Descreva a ocorrência" noMargin />
        <InputText
          value={title}
          onChangeText={(t) => setTitle(t)}
          placeholder="Digite o titulo da ocorrência"
        />
        <DefaultTitle title="Fotos relacionadas" noMargin />
        <S.PhotoArea>
          <S.PhotoScroll horizontal>
            <S.AddButton onPress={handleAddPhoto}>
              <Icon name="camera" size={30} color={theme.colors.button} />
            </S.AddButton>
            {photoList.map((item, index) => (
              <S.PhotoItem key={index}>
                <S.Photo source={{ uri: item }} />
                <S.RemoveButton onPress={() => handleDeletePhoto(item)}>
                  <Icon name="trash" size={20} color={theme.colors.red} />
                </S.RemoveButton>
              </S.PhotoItem>
            ))}
          </S.PhotoScroll>
        </S.PhotoArea>
        {loading && <S.LoadingIcon size={'large'} />}

        <S.ButtonArea>
          <DefaultButton text="Salvar" onPress={handleSaveOcurrence} />
        </S.ButtonArea>
      </S.Scroller>
    </S.Container>
  );
};
