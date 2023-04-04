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

type TimeList = {
  id: string;
  title: string;
};

export const ReservationAddScreen = () => {
  const auth: Profile = useAppSelector((state) => state.profile);
  const route = useRoute<DrawerScreenRouteProp>();
  const navigation = useNavigation<StackNavigation>();

  const scroller = useRef<ScrollView>(null);

  const [loading, setLoading] = useState(true);
  const [loadingTimes, setLoadingTimes] = useState(false);
  const [unvalidDate, setUnvalidDate] = useState([]);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [timeList, setTimeList] = useState<TimeList[]>([]);
  const [selectedTime, setSelectedTime] = useState<string>('');

  //Unavailable dates
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

  //Available hours
  useEffect(() => {
    getAvailableHours();
  }, [selectedDay]);

  const getAvailableHours = async () => {
    if (!selectedDay) return;
    setLoadingTimes(true);
    const res = await services.getAvailableHours(
      route.params?.data?.id as number,
      selectedDay as string
    );
    if (!res.error) {
      setSelectedTime('');
      console.log(res.list);
      setTimeList(res.list);
      const scrollEvent = scroller?.current;
      setTimeout(() => {
        scrollEvent && scrollEvent.scrollToEnd({ animated: true });
      }, 500);
    }
    setLoadingTimes(false);
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

  const handleDateChange = (date: string) => {
    const result = formatISO(new Date(date), { representation: 'date' });
    setSelectedDay(result);
  };

  const handleSave = async () => {
    if (!selectedDay || !selectedTime) return;
    const res = await services.addReservation(
      route.params?.data?.id as number,
      selectedDay,
      selectedTime,
      auth.property.id
    );

    if (!res.error) {
      Toast.show({
        type: 'success',
        text1: 'Reserva realizada com sucesso!',
        text2: 'Agora é só esperar o dia chegar.'
      });
      navigation.navigate('ReservationScreen');
    }
  };

  return (
    <S.Container>
      <S.ScrollSpace ref={scroller}>
        <S.SpaceImage source={{ uri: route.params?.data.cover }} resizeMode="cover" />
        {loading && <S.Loading size="large" color={theme.colors.button} />}
        {!loading && (
          <S.CalendarArea>
            <CalendarPicker
              disabledDates={unvalidDate}
              onDateChange={(date) => handleDateChange(date.toString())}
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

        {!loading && loadingTimes && <S.Loading size="large" color={theme.colors.button} />}
        {!loadingTimes && selectedDay && (
          <S.BoxHours>
            <S.HoursTitle>{`Horários disponíveis em ${format(
              new Date(selectedDay),
              'dd/MM/yyyy'
            )}:`}</S.HoursTitle>
            <S.TimeListArea>
              {timeList.map((item, index) => (
                <S.TimeItem
                  key={index}
                  onPress={() => setSelectedTime(item.id)}
                  isSelected={item.id === selectedTime}
                  underlayColor="transparent"
                >
                  <S.TimeText isSelected={item.id === selectedTime}>{item.title}</S.TimeText>
                </S.TimeItem>
              ))}
            </S.TimeListArea>
            <S.ButtonArea>
              {selectedTime !== '' && (
                <DefaultButton text="Reservar" onPress={() => handleSave()} />
              )}
            </S.ButtonArea>
          </S.BoxHours>
        )}
      </S.ScrollSpace>
    </S.Container>
  );
};
