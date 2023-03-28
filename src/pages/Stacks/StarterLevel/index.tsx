//Styles
import * as S from './styled';

//React
import { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

//Redux
import { setUserLevel } from 'store/reducers/user/actions';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hook';

//Components
import DefaultButton from 'components/Button';
import DefaultTitle from 'components/Title';
import HeaderButton from 'components/HeaderButton';

//Types
import { User } from 'types/user';
import { StackScreenNavigationProp } from 'types/Navigation';

//Utils
import { formatTitle } from './actions';
import { userLevel } from 'utils/constants';

const StarterLevel = () => {
  const navigation = useNavigation<StackScreenNavigationProp>();
  const user: User = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();

  const [level, setLevel] = useState(user.level);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerRight: () => <HeaderButton onPress={handleNextAction} />
    });
  }, [navigation, level]);

  const handleNextAction = () => {
    if (!level) {
      alert('Selecione seu nível para continuar!');
    } else {
      dispatch(setUserLevel(level));
      navigation.navigate('StarterRecommends');
    }
  };

  return (
    <S.Container>
      <DefaultTitle title={formatTitle(user.workoutDays.length)} noMargin />
      <DefaultTitle title="Qual seu nível?" />
      <S.LevelArea>
        {userLevel?.map((item, index) => (
          <DefaultButton
            key={index}
            text={item.level_name}
            onPress={() => setLevel(item.level_id)}
            bgColor={level === item.level_id ? 'selected' : 'unfilled'}
          />
        ))}
      </S.LevelArea>
    </S.Container>
  );
};

export default StarterLevel;
