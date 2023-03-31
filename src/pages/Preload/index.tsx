//Navigation
import { StackActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

//React
import { useEffect } from 'react';

//Redux
import { useAppSelector, useAppDispatch } from 'hooks/redux-hook';
import { setToken, setUser } from 'store/reducers/user/actions';

//Api
import { validateToken } from 'api/globalFunctions';
import { Profile } from 'types/user';

const PreloadScreen = () => {
  const user: Profile = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    verifyToken();
  }, []);

  const verifyToken = async () => {
    if (!user.token) {
      navigation.dispatch(StackActions.replace('StackDefault'));
    } else {
      const res = await validateToken();
      // if (!res.error) {
        // dispatch(setUser(res.user));
        navigation.dispatch(StackActions.replace('DrawerMain'));
      // }
      // else {
      //   dispatch(setToken(''));
      //   navigation.dispatch(StackActions.replace('StackDefault'));
      //   alert('Token inválido');
      // }
    }
    navigation.dispatch(StackActions.replace('StackDefault'));
  };

  return null;
};

export default PreloadScreen;
