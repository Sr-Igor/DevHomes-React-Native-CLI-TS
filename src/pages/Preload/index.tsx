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

const PreloadScreen = () => {
  const token = useAppSelector((state) => state.profile.token);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    verifyToken();
  }, []);

  const verifyToken = async () => {
    if (!token) {
      navigation.dispatch(StackActions.replace('StackDefault'));
    } else {
      const res = await validateToken();
      if (!res.error) {
        dispatch(setUser(res.user));
        navigation.dispatch(StackActions.replace('TabDefault'));
      } else {
        dispatch(setToken(''));
        navigation.dispatch(StackActions.replace('StackDefault'));
        alert('Token inválido');
      }
    }
  };

  return null;
};

export default PreloadScreen;
