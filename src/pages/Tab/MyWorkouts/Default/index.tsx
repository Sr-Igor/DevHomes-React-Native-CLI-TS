//Styled
import * as S from './styled';

//React
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { setUserWorkouts } from 'store/reducers/user/actions';
import { useAppSelector, useAppDispatch } from 'hooks/redux-hook';

//Components
import AddButton from 'components/AddButton';
import WorkoutItem from 'components/WorkoutItem';

//Types
import { User } from 'types/user';
import { Workout } from 'types/workout';
import { StackScreenNavigationProp } from 'types/MyWorkouts';

const MyWorkouts = () => {
  const user: User = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackScreenNavigationProp>();

  const handleDelete = (data: Workout) => {
    const workouts = user.myWorkouts.filter((item) => +item.id !== +data.id);
    dispatch(setUserWorkouts(workouts));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Meus treinos',
      headerRight: () => <AddButton onPress={() => actionWorkout()} />
    });
  }, [navigation]);

  const actionWorkout = (id?: number) => {
    navigation.navigate('ActionWorkout', { id: id || null });
  };

  return (
    <S.Container>
      <S.WorkoutList
        data={user.myWorkouts}
        renderItem={({ item }) => (
          <WorkoutItem
            onPress={(data) => actionWorkout(data.id)}
            userWorkouts={user.myWorkouts || []}
            data={item as Workout}
            isEditable
            onDelete={(data) => handleDelete(data)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </S.Container>
  );
};

export default MyWorkouts;
