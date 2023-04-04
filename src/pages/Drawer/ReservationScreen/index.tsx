import DefaultButton from 'components/Button';
import * as S from './styled';
import { useEffect, useState } from 'react';
import * as services from './services';
import { Reservation } from 'types/Reservation';

export const ReservationScreen = () => {
  const [list, setList] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReservations();
  }, []);

  const getReservations = async () => {
    setLoading(true);
    const res = await services.getReservations();
    if (!res.error) {
      setList(res.list);
    }
    setLoading(false);
  };

  return (
    <S.Container>
      <S.ButtonTopArea>
        <DefaultButton text="Minhas Reservas" onPress={() => alert('...')} />
      </S.ButtonTopArea>
      <S.ScrollSpace>
        {list?.map((item, index) => (
          <S.SpaceArea key={index}>
            <S.SpaceImage source={{ uri: item.cover }} resizeMode="cover" />
            <S.TextBox>
              <S.SpaceTitle>{item.title}</S.SpaceTitle>
              <S.SpaceDescription>Horários de funcionamento</S.SpaceDescription>
              {item.dates.map((date, index) => (
                <S.DateLine key={index}>{date}</S.DateLine>
              ))}
            </S.TextBox>
          </S.SpaceArea>
        ))}
      </S.ScrollSpace>
    </S.Container>
  );
};
