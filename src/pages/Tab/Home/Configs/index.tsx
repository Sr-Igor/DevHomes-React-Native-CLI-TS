//Styled
import * as S from './styled';

//React
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

//Redux
import { useAppSelector, useAppDispatch } from 'hooks/redux-hook';
import { setUserName, setWorkoutDays, setUserLevel, resetUser } from 'store/reducers/user/actions';

//Utils
import { days, userLevel } from 'utils/constants';

//Types
import { User } from 'types/user';
import { StackScreenNavigationProp as StackHome } from 'types/Home';
import { StackScreenNavigationProp as StackDefault } from 'types/Navigation';

const Home = () => {
  const navigation = useNavigation<StackHome & StackDefault>();

  const user: User = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Configurações'
    });
  }, [navigation]);

  const handleNamaChange = (name: string) => {
    dispatch(setUserName(name));
  };

  const handleDayPress = (index: number) => {
    let newList = [...user.workoutDays];

    if (user.workoutDays.includes(index)) {
      if (newList.length === 1) {
        alert('Você precisa treinar em pelo menos um dia da semana');
        return;
      }
      newList = newList.filter((i) => i != index);
    } else {
      newList.push(index);
    }
    dispatch(setWorkoutDays(newList));
  };

  const handleLevelPress = (index: number) => {
    dispatch(setUserLevel(index));
  };

  const handleReset = () => {
    dispatch(resetUser());
    navigation.navigate('StackDefault');
  };

  return (
    <S.Container>
      <S.Title>Seu nome:</S.Title>
      <S.InputName value={user.name} onChangeText={(text) => handleNamaChange(text)} />
      <S.Title>Dias que você treina:</S.Title>
      <S.List>
        {days.map((day, index) => (
          <S.Day
            key={index}
            selected={user.workoutDays.includes(day.id)}
            onPress={() => handleDayPress(day.id)}
            underlayColor="none"
          >
            <S.DayText selected={user.workoutDays.includes(day.id)}>{day.name[0]}</S.DayText>
          </S.Day>
        ))}
      </S.List>
      <S.Title>Seu nível:</S.Title>
      <S.List>
        {userLevel.map((level, index) => (
          <S.LevelItem
            key={index}
            selected={level.level_id === user.level}
            onPress={() => handleLevelPress(level.level_id)}
            underlayColor="none"
          >
            <S.LevelItemText selected={level.level_id === user.level}>
              {level.level_name}
            </S.LevelItemText>
          </S.LevelItem>
        ))}
      </S.List>

      <S.ResetButton onPress={() => handleReset()}>
        <S.ResetButtonText>Resetar dados</S.ResetButtonText>
      </S.ResetButton>
    </S.Container>
  );
};

export default Home;
