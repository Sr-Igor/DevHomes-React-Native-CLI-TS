//Styles
import * as S from './styled';

//React
import { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

//Redux
import { setWorkoutDays } from 'store/reducers/user/actions';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hook';

//Components
import DefaultButton from 'components/Button';
import DefaultTitle from 'components/Title';
import HeaderButton from 'components/HeaderButton';

//Types
import { User } from 'types/user';
import { StackScreenNavigationProp } from 'types/Navigation';

//Utils
import { days } from 'utils/constants';

const StarterDays = () => {
  const user: User = useAppSelector((state) => state.profile);
  const [selectedList, setSelectedList] = useState<number[]>(user.workoutDays || []);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerRight: () => <HeaderButton onPress={handleNextAction} />
    });
  }, [navigation, selectedList]);

  const handleNextAction = () => {
    if (!selectedList.length) {
      alert('Selecione pelo menos um dia da semana');
    } else {
      dispatch(setWorkoutDays(selectedList));
      navigation.navigate('StarterLevel');
    }
  };

  const handleDayPress = (index: number) => {
    let newList = [...selectedList];
    if (selectedList.includes(index)) {
      newList = newList.filter((i) => i != index);
    } else {
      newList.push(index);
    }
    setSelectedList(newList);
  };

  return (
    <S.Container>
      <DefaultTitle title={`Olá ${user.name}!`} noMargin />
      <DefaultTitle title="Quais dias da semana deseja treinar?" noMargin />
      <S.DaysArea>
        {days?.map((item, index) => (
          <DefaultButton
            key={index}
            text={item.name}
            onPress={() => handleDayPress(item.id)}
            bgColor={selectedList.includes(item.id) ? 'selected' : 'unfilled'}
          />
        ))}
      </S.DaysArea>
    </S.Container>
  );
};

export default StarterDays;
