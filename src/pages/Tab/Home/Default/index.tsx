//Styles
import * as S from './styled';

//React
import { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

//Redux
import { useAppSelector, useAppDispatch } from 'hooks/redux-hook';

//Components
import ConfigButton from 'components/ConfigButton';

import { StackScreenNavigationProp as HomeProps } from 'types/Home';
import { TabScreenNavigationProp as WorkoutProps } from 'types/Navigation';

const Home = () => {
  const navigation = useNavigation<WorkoutProps & HomeProps>();

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

  return <S.Container></S.Container>;
};

export default Home;
