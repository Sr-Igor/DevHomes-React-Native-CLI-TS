//Styles
import * as S from './styled';

//React
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

//Components
import DefaultButton from 'components/Button';
import DefaultTitle from 'components/Title';
import * as services from './services';

//Types
import { StackScreenNavigationProp } from 'types/Navigation';
import { LayoutAnimation } from 'react-native';
import { useAppDispatch } from 'hooks/redux-hook';
import { setToken, setUser } from 'store/reducers/user/actions';

const Starter = () => {
  const navigation = useNavigation<StackScreenNavigationProp>();
  const dispatch = useAppDispatch();

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  const handleSubmit = async () => {
    if (cpf && password) {
      const response = await services.handleLogin(cpf, password);
      if (!response.error) {
        dispatch(setToken(response.token));
        dispatch(setUser(response.user));
        // navigation.navigate('Home');
        alert(response.token);
      } else {
        alert(response.error);
      }
    }
  };

  return (
    <S.Container>
      <S.TiltedArea>
        <S.TitleBold>DEV</S.TitleBold>

        <S.TitleViolet>COND</S.TitleViolet>
      </S.TiltedArea>

      <S.ImageArea>
        <S.ImageItem source={require('assets/undraw_home.png')} resizeMode="contain" />
      </S.ImageArea>
      <S.InputField
        value={cpf}
        onChangeText={(text) => setCpf(text)}
        placeholder="Digite seu cpf"
      />
      <S.InputField
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Digite sua senha"
      />
      <DefaultButton text="Login" onPress={handleSubmit} />
      <S.NewUserArea>
        <S.BoldText>Primeiro acesso?</S.BoldText>
        <S.TouchButton>
          <S.ButtonText>Clique aqui</S.ButtonText>
        </S.TouchButton>
      </S.NewUserArea>
    </S.Container>
  );
};

export default Starter;
