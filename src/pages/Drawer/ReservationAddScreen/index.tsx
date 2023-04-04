import DefaultButton from 'components/Button';
import * as S from './styled';
import { useEffect, useState, useLayoutEffect } from 'react';
import * as services from './services';
import { Reservation } from 'types/Reservation';
import { StackNavigation, DrawerScreenRouteProp } from 'types/Navigation';
import { useNavigation, useRoute } from '@react-navigation/native';
import HeaderButton from 'components/HeaderButton';
import theme from 'styles/theme';
import CalendarPicker from 'react-native-calendar-picker';
import { addMonths } from 'date-fns';

export const ReservationAddScreen = () => {
  const route = useRoute<DrawerScreenRouteProp>();
  const navigation = useNavigation<StackNavigation>();

  const [loading, setLoading] = useState(true);
  const [unvalidDate, setUnvalidDate] = useState([]);
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [timeList, setTimeList] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string>('');

  useEffect(() => {
    setUnvalidDate([]);
    setSelectedDay(null);
    setTimeList([]);
    setSelectedTime('');
    getUnvalidDates();
  }, [route.params]);

  const getUnvalidDates = async () => {
    setLoading(true);
    const res = await services.getUnvalableDates(route.params?.data?.id as number);
    if (!res.error) {
      setUnvalidDate(res.list.map((item: string) => new Date(item)));
    }
    setLoading(false);
  };

  useLayoutEffect(() => {
    const params = route.params;
    const data = params?.data as Reservation;

    navigation.setOptions({
      headerTitle: `Reservar ${data.title.toLowerCase()}`,
      headerRight: () => (
        <HeaderButton text="Voltar" onPress={() => navigation.navigate('ReservationScreen')} />
      )
    });
  }, [route.params]);

  const handleDateChange = () => {
    alert('mudo');
  };

  return (
    <S.Container>
      <S.SpaceImage source={{ uri: route.params?.data.cover }} resizeMode="cover" />
      {loading && <S.Loading size="large" color={theme.colors.button} />}
      {!loading && (
        <S.CalendarArea>
          <CalendarPicker
            disabledDates={unvalidDate}
            onDateChange={handleDateChange}
            minDate={new Date()}
            maxDate={addMonths(new Date(), 3)}
            weekdays={['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro'
            ]}
            previousTitle="Anterior"
            nextTitle="Próximo"
            selectedDayStyle={{
              backgroundColor: theme.colors.button
            }}
            selectedDayTextColor={theme.colors.white}
            todayBackgroundColor={'transparent'}
            todayTextStyle={{ color: theme.colors.black }}
          />
        </S.CalendarArea>
      )}
    </S.Container>
  );
};
