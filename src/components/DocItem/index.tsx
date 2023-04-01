import * as S from './styled';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from 'styles/theme';
import { Doc } from 'types/Document';
import { Linking } from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

type DocItemProps = {
  item: Doc;
};

const DocItem = ({ item }: DocItemProps) => {
  const handleClick = async () => {
    const supported = await Linking.canOpenURL(item.fileurl);
    if (supported) {
      await Linking.openURL(item.fileurl);
    } else {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'Não foi possível abrir o documento'
      });
    }
  };

  return (
    <S.Container onPress={handleClick}>
      <Icon name="file-text" size={25} color={theme.colors.button} />
      <S.TitleWall>{item.title}</S.TitleWall>
    </S.Container>
  );
};

export default DocItem;
