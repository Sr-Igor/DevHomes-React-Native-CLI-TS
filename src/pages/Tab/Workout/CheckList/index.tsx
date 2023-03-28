//Styled
import * as S from './styled';

//React
import { useEffect, useLayoutEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'hooks/redux-hook';
import { setDailyProgress, setLastWorkout } from 'store/reducers/user/actions';
import { StackActions, useNavigation, useRoute } from '@react-navigation/native';

//Components
import HeaderButton from 'components/HeaderButton';
import ExerciseCheck from 'components/ExerciseCheck';

//Utils
import { formatDate } from 'utils/formatDate';
import { generateProgress } from 'utils/generateProgress';

//Types
import { User } from 'types/user';
import { Exercise, Workout } from 'types/workout';
import { StackScreenNavigationProp, StackScreenRouteProp } from 'types/Workouts';

const WorkoutCheckList = () => {
  //Hooks
  const navigation = useNavigation<StackScreenNavigationProp>();
  const route = useRoute<StackScreenRouteProp>();

  //Redux
  const user: User = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();

  //States
  const [currentWorkout, setCurrentWorkout] = useState<Workout>({} as Workout);
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []);

  useEffect(() => {
    const id = route.params?.id;
    const wokrouts = [...user.myWorkouts];
    const findedWorkout = wokrouts.find((workout: Workout) => workout.id == (id as number));
    setCurrentWorkout(findedWorkout as Workout);
    setExercises(findedWorkout?.exercises as Exercise[]);
  }, [route.params?.id]);

  const checkExercise = (exercise: Exercise) => {
    const index = exercises.findIndex((item) => item.id === exercise.id);
    const newExercises = [...exercises];
    newExercises[index] = { ...exercise, done: !exercise.done };
    setExercises(newExercises);
  };

  useEffect(() => {
    if (exercises.length) {
      checkWorkout();
    }
  }, [exercises]);

  const checkWorkout = () => {
    const doneExercises = exercises.every((exercise) => exercise.done);
    // alert(doneExercises);
    if (doneExercises) {
      alert('Parabéns, você concluiu o treino!');
      const date = formatDate(new Date());

      const newProgress = generateProgress(user.dailyProgress, date);
      dispatch(setDailyProgress(newProgress));
      dispatch(setLastWorkout(currentWorkout.id.toString()));
      navigation.dispatch(StackActions.replace('TabDefault'));
    }
  };

  return (
    <S.Background source={require('assets/fitness.jpg')}>
      <S.Container>
        <S.WorkouHeader>
          <S.WorkoutTitle>{currentWorkout.name}</S.WorkoutTitle>
          <S.WorkoutClose>
            <HeaderButton text="Fechar" onPress={() => navigation.goBack()} />
          </S.WorkoutClose>
        </S.WorkouHeader>

        <S.WorkoutList
          data={exercises}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ExerciseCheck exercise={item as Exercise} onPress={checkExercise} />
          )}
        />
      </S.Container>
    </S.Background>
  );
};

export default WorkoutCheckList;
