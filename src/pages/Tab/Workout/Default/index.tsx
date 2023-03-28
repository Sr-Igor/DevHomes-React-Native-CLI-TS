//Styled
import * as S from './styled';

//React
import { useAppSelector } from 'hooks/redux-hook';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useLayoutEffect, useState } from 'react';

//Components
import WorkoutItem from 'components/WorkoutItem';

//Types
import { User } from 'types/user';
import { Workout } from 'types/workout';
import { StackScreenNavigationProp } from 'types/Workouts';
import HeaderButton from 'components/HeaderButton';

const WorkoutPage = () => {
  const user: User = useAppSelector((state) => state.profile);
  const navigation = useNavigation<StackScreenNavigationProp>();
  const [lastWorkout, setLastWorkout] = useState<Workout | null>(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Escolha um treino',
      headerLeft: () => <HeaderButton onPress={() => navigation.goBack()} text="Voltar" />
    });
  }, []);

  useEffect(() => {
    if (user.lastWorkout) {
      const workout = user.myWorkouts.find((item) => item.id == user.lastWorkout);
      setLastWorkout(workout || null);
    }
  }, [user]);

  const actionWorkout = (id: number) => {
    navigation.navigate('CheckList', { id });
  };

  return (
    <S.Container>
      {lastWorkout && (
        <S.LastWorkoutArea>
          <S.Title> Seu último treino:</S.Title>
          <WorkoutItem
            onPress={(data) => actionWorkout(data.id)}
            userWorkouts={user.myWorkouts || []}
            data={lastWorkout}
            isAction
          />
        </S.LastWorkoutArea>
      )}

      <S.Title> Escolha seu treino:</S.Title>
      <S.WorkoutList
        data={user.myWorkouts}
        renderItem={({ item }) => (
          <WorkoutItem
            onPress={(data) => actionWorkout(data.id)}
            userWorkouts={user.myWorkouts || []}
            data={item as Workout}
            isAction
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </S.Container>
  );
};

export default WorkoutPage;
