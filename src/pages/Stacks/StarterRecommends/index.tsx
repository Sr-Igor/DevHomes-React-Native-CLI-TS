//Styles
import * as S from './styled';

//React
import { useLayoutEffect } from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';

//Redux
import { setUserWorkouts } from 'store/reducers/user/actions';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hook';

//Components
import DefaultTitle from 'components/Title';
import WorkoutItem from 'components/WorkoutItem';
import HeaderButton from 'components/HeaderButton';

//Types
import { User } from 'types/user';
import { Workout } from 'types/workout';
import { StackScreenNavigationProp } from 'types/Navigation';

//Utils
import { defaultWorkouts } from 'utils/presetWorkouts';
import { generateWorkout } from 'utils/generateWorkout';

const StarterLevel = () => {
  const navigation = useNavigation<StackScreenNavigationProp>();
  const user: User = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerRight: () => (
        <HeaderButton
          text={user.myWorkouts.length ? 'Concluir' : 'Ignorar'}
          onPress={handleNextAction}
        />
      )
    });
  }, [navigation, user.myWorkouts]);

  const handleNextAction = () => {
    navigation.dispatch(StackActions.replace('TabDefault'));
  };

  const handleWorkout = (data: Workout) => {
    const newUserWorkout = generateWorkout(data, user.myWorkouts);
    dispatch(setUserWorkouts(newUserWorkout));
  };

  return (
    <S.Container>
      <DefaultTitle title="Opções de treino para o seu nível" noMargin />
      <DefaultTitle title={`Treinos selecionados: ${user.myWorkouts?.length || 0}`} small />
      <S.WorkoutList
        data={defaultWorkouts.filter((item) => item.recommendedLevel === user.level)}
        renderItem={({ item }) => (
          <WorkoutItem
            onPress={(data) => handleWorkout(data)}
            userWorkouts={user.myWorkouts || []}
            data={item as Workout}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </S.Container>
  );
};

export default StarterLevel;
