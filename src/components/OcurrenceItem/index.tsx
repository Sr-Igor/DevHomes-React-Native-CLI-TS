import * as S from './styled';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from 'styles/theme';

import { Linking } from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { Ocurrence } from 'types/Ocurrence';
import { useState } from 'react';
import Modal from 'components/Modal';

type DocItemProps = {
  item: Ocurrence;
};

const OcurrenceItem = ({ item }: DocItemProps) => {
  const [openImage, setOpenImage] = useState<string | boolean>(false);

  return (
    <S.Container colorBox={item.status === 'RESOLVED' ? theme.colors.primary : theme.colors.red}>
      <S.Date>{item.datacreated}</S.Date>
      <S.Title>{item.title}</S.Title>
      <S.StatusBox>
        <Icon
          name="circle"
          size={10}
          color={item.status === 'RESOLVED' ? theme.colors.primary : theme.colors.red}
        />
        <S.StatusText
          colorText={item.status === 'RESOLVED' ? theme.colors.primary : theme.colors.red}
        >
          {item.status === 'RESOLVED' ? 'Resolvido' : 'Em análise'}
        </S.StatusText>
      </S.StatusBox>
      <S.PhotosArea horizontal showsHorizontalScrollIndicator={false}>
        {item.photos.map((photo, index) => (
          <S.PhotoItem key={index} onPress={() => setOpenImage(photo)}>
            <S.Photo source={{ uri: photo }} resizeMode="cover" />
          </S.PhotoItem>
        ))}
      </S.PhotosArea>
      {openImage && (
        <Modal isOpen={!!openImage} onClose={() => setOpenImage(false)}>
          <S.ModalArea>
            <S.ModalImage source={{ uri: openImage as string }} resizeMode="contain" />
          </S.ModalArea>
        </Modal>
      )}
    </S.Container>
  );
};

export default OcurrenceItem;
