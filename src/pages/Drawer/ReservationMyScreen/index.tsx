import DefaultButton from 'components/Button';
import * as S from './styled';
import { useEffect, useState, useLayoutEffect, useRef } from 'react';
import * as services from './services';
import { Reservation } from 'types/Reservation';
import { StackNavigation, DrawerScreenRouteProp } from 'types/Navigation';
import { useNavigation, useRoute } from '@react-navigation/native';
import HeaderButton from 'components/HeaderButton';
import theme from 'styles/theme';
import CalendarPicker from 'react-native-calendar-picker';
import { addMonths, format, formatISO } from 'date-fns';
import { ScrollView } from 'react-native/types';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { Profile } from 'types/user';
import { useAppSelector } from 'hooks/redux-hook';
import ReservationItem from 'components/ReservationItem';
import { mock } from './mock';
import { MyReservation } from 'types/MyReservation';

type TimeList = {
  id: string;
  title: string;
};

export const ReservationMyScreen = () => {
  const auth: Profile = useAppSelector((state) => state.profile);
  const route = useRoute<DrawerScreenRouteProp>();
  const navigation = useNavigation<StackNavigation>();

  const scroller = useRef<ScrollView>(null);

  const [loading, setLoading] = useState(true);
  const [list, setList] = useState<Reservation[]>([]);

  useEffect(() => {
    getMyReservations();
  }, [navigation]);

  const getMyReservations = async () => {
    setLoading(true);
    const res = await services.myReservations(auth.property.id);
    if (!res.error) {
      setList(res.list);
    }
    setLoading(false);
  };

  const deleteReservation = async (id: number) => {
    //TODO? Mock because dont have property
    // const res = await services.removeReservation(id);
    // if (!res.error) {
    getMyReservations();
    // }
  };

  return (
    <S.Container>
      <S.ReservationList
        data={mock}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ReservationItem item={item as MyReservation} delFunc={deleteReservation} />
        )}
      />
    </S.Container>
  );
};
