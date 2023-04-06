import * as S from './styled';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from 'styles/theme';
import { Doc } from 'types/Document';
import { Linking } from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { Reservation } from 'types/Reservation';
import { MyReservation } from 'types/MyReservation';

type ReservationItemProps = {
  item: MyReservation;
  delFunc: (item: number) => void;
};

const ReservationItem = ({ item, delFunc }: ReservationItemProps) => {
  return (
    <S.Container>
      <S.CoverArea>
        <S.CoverImage source={{ uri: item?.cover as string }} resizeMode="contain" />
      </S.CoverArea>
      <S.InfosArea>
        <S.Title>{item.title}</S.Title>
        <S.SpanTitle>Horario reservado</S.SpanTitle>
        <S.Date>{item.datereserved}</S.Date>
      </S.InfosArea>
      <S.DelArea onPress={() => delFunc(item.id)}>
        <Icon name="trash" size={20} color={theme.colors.red} />
      </S.DelArea>
    </S.Container>
  );
};

export default ReservationItem;
