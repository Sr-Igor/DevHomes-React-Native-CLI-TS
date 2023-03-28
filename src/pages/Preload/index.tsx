//Navigation
import { StackActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

//Redux
import { useAppSelector } from 'hooks/redux-hook';

//Types
import { User } from 'types/user';

const PreloadScreen = () => {
  const user: User = useAppSelector((state) => state.profile);
  const navigation = useNavigation();

  if (!user.name || !user.level) {
    navigation.dispatch(StackActions.replace('StackDefault'));
  } else {
    navigation.dispatch(StackActions.replace('TabDefault'));
  }

  return null;
};

export default PreloadScreen;
