import Icon from 'react-native-vector-icons/FontAwesome';
import { Recovered } from 'types/RecoveredItem';
import * as S from './styled';
import { Alert } from 'react-native';

type RecoverItemProps = {
  item: Recovered;
  onRecover?: (item: Recovered) => void;
  isRecovered?: boolean;
};

const RecoverItem = ({ item, onRecover, isRecovered }: RecoverItemProps) => {
  const handleIsMine = () => {
    Alert.alert('É seu?', 'Deseja marcar como seu?', [
      {
        text: 'Não',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      { text: 'Sim', onPress: () => onRecover && onRecover(item) }
    ]);
  };

  return (
    <S.Container>
      <S.ImageArea>
        <S.Image source={{ uri: item.photo }} resizeMode="cover" />
      </S.ImageArea>
      <S.DescriptionText>{item.description}</S.DescriptionText>

      <S.Box>
        <S.InfoText>Encontrado em:</S.InfoText>
        <S.DataInfo>{item.where}</S.DataInfo>
      </S.Box>

      <S.Box>
        <S.InfoText>Data</S.InfoText>
        <S.DataInfo>{item.datecreated}</S.DataInfo>
      </S.Box>

      {!isRecovered && (
        <S.MackButton onPress={handleIsMine}>
          <Icon name="hand-pointer-o" size={24} color={'#FFF'} />
          <S.MackText>É meu</S.MackText>
        </S.MackButton>
      )}
    </S.Container>
  );
};

export default RecoverItem;
