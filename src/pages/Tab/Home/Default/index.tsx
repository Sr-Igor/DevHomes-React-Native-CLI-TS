//Styles
import * as S from './styled';

//React
import { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

//Redux
import { setDailyProgress } from 'store/reducers/user/actions';
import { useAppSelector, useAppDispatch } from 'hooks/redux-hook';

//Components
import DayStatus from 'components/DayStatus';
import DayScroll from 'components/DayScroll';
import MonthScroll from 'components/MonthScroll';
import ConfigButton from 'components/ConfigButton';

//Utils
import { legends } from '../../../../utils/constants';
import { generateProgress } from 'utils/generateProgress';

//Types
import { User } from 'types/user';
import { StackScreenNavigationProp as HomeProps } from 'types/Home';
import { TabScreenNavigationProp as WorkoutProps } from 'types/Navigation';

const Home = () => {
  const navigation = useNavigation<WorkoutProps & HomeProps>();
  const dispatch = useAppDispatch();

  const user: User = useAppSelector((state) => state.profile);
  const today = new Date();

  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState(today.getDate());

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ConfigButton
          onPress={() => {
            navigation.navigate('Config');
          }}
        />
      )
    });
  }, [navigation]);

  const handleDailyProgress = (date: string) => {
    const newProgress = generateProgress(user.dailyProgress, date);
    dispatch(setDailyProgress(newProgress));
  };

  const goToWorkout = () => {
    navigation.navigate('WorkoutStack');
  };

  return (
    <S.Container>
      <MonthScroll selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
      <DayScroll
        selectedMonth={selectedMonth}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        dailyProgress={user.dailyProgress}
        workoutDays={user.workoutDays}
      />
      <DayStatus
        selectedMonth={selectedMonth}
        selectedDay={selectedDay}
        dailyProgress={user.dailyProgress}
        workoutDays={user.workoutDays}
        handleDailyProgress={handleDailyProgress}
        goToWorkout={goToWorkout}
      />

      <S.LegendArea>
        <S.LegendText>Legendas:</S.LegendText>
        {legends.map((legend, index) => (
          <S.LegendItem key={index}>
            <S.LegendBox bgColor={legend.color} />
            <S.LegendTitle>{legend.title}</S.LegendTitle>
          </S.LegendItem>
        ))}
      </S.LegendArea>
    </S.Container>
  );
};

export default Home;
