//Styles
import * as S from './styled';

//React
import { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

//Redux
import { useAppDispatch } from 'hooks/redux-hook';
import { setLogin } from 'store/reducers/user/actions';

//Components
import DefaultButton from 'components/Button';

//Services
import * as services from './services';

//Types
import { StackNavigation } from 'types/Navigation';

const Starter = () => {
  const navigation = useNavigation<StackNavigation>();
  const dispatch = useAppDispatch();

  //Form States
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
        dispatch(setLogin(response));
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
        <S.TouchButton onPress={() => navigation.navigate('Register')}>
          <S.ButtonText>Clique aqui</S.ButtonText>
        </S.TouchButton>
      </S.NewUserArea>
    </S.Container>
  );
};

export default Starter;
