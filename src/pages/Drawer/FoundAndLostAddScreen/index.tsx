import * as services from './services';
import { useState, useCallback } from 'react';
import * as S from './styled';

import { Profile } from 'types/user';
import { useAppSelector } from 'hooks/redux-hook';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StackNavigation } from 'types/Navigation';
import { Asset } from 'react-native-image-picker';

import theme from 'styles/theme';

import { InputText } from 'components/InputText';
import DefaultTitle from 'components/Title';
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchCamera } from 'react-native-image-picker';
import DefaultButton from 'components/Button';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

type Photo = {
  uri: string;
};

export const FoundAndLostAddScreen = () => {
  const [description, setDescription] = useState('');
  const [where, setWhere] = useState('');
  const [photo, setPhoto] = useState<Asset | null>(null);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<StackNavigation>();

  useFocusEffect(
    useCallback(() => {
      setDescription('');
      setWhere('');
      setPhoto(null);
    }, [])
  );

  const handleAddPhoto = async () => {
    launchCamera(
      {
        mediaType: 'photo',
        maxWidth: 1280
      },
      async (res) => {
        if (!res.didCancel && res?.assets) {
          setPhoto(res.assets[0]);
        }
      }
    );
  };

  const handleSave = async () => {
    if (description && where && photo?.uri) {
      setLoading(true);
      const res = await services.saveFoundAndLost({
        description,
        where,
        photo
      });

      setLoading(false);
      if (!res.error) {
        Toast.show({
          type: 'success',
          text1: 'Sucesso',
          text2: 'Item salvo com sucesso'
        });
        navigation.navigate('FoundAndLostScreen');
      }
    }
  };

  return (
    <S.Container>
      {!loading && (
        <S.Scroller>
          <DefaultTitle title="Descreva o item" noMargin />
          <InputText
            value={description}
            onChangeText={(t) => setDescription(t)}
            placeholder="Descreva o item encontrado"
          />
          <DefaultTitle title="Encontrado em" noMargin />
          <InputText
            value={where}
            onChangeText={(t) => setWhere(t)}
            placeholder="Descreva o local onde foi encontrado"
          />
          <DefaultTitle title="Foto do item" noMargin />
          <S.PhotoArea>
            <S.PhotoScroll horizontal>
              {!photo?.uri && (
                <S.AddButton onPress={handleAddPhoto}>
                  <Icon name="camera" size={30} color={theme.colors.button} />
                </S.AddButton>
              )}
              {photo?.uri && (
                <S.PhotoItem>
                  <S.Photo source={{ uri: photo?.uri }} />
                  <S.RemoveButton onPress={() => setPhoto(null)}>
                    <Icon name="trash" size={20} color={theme.colors.red} />
                  </S.RemoveButton>
                </S.PhotoItem>
              )}
            </S.PhotoScroll>
          </S.PhotoArea>

          <S.ButtonArea>
            <DefaultButton text="Salvar" onPress={handleSave} />
          </S.ButtonArea>
        </S.Scroller>
      )}
      {loading && <S.LoadingIcon size={'large'} />}
    </S.Container>
  );
};
