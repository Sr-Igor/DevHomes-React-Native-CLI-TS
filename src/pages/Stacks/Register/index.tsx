//Styles
import * as S from './styled';

//React
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

//Components
import DefaultButton from 'components/Button';

//Services
import * as services from './services';

//Redux
import { useAppDispatch } from 'hooks/redux-hook';
import { setLogin } from 'store/reducers/user/actions';
//Types
import { StackNavigation } from 'types/Navigation';

export type UserRegister = {
  name: string;
  email: string;
  cpf: string;
  password: string;
  password_confirm: string;
};

const Register = () => {
  const navigation = useNavigation<StackNavigation>();
  const dispatch = useAppDispatch();

  const [userForm, setUserForm] = useState({
    name: '',
    email: '',
    cpf: '',
    password: '',
    password_confirm: ''
  });

  const handleForm = (key: string, value: string) => {
    setUserForm({
      ...userForm,
      [key]: value
    });
  };

  const handleSubmit = async () => {
    const res = await services.handleRegister(userForm);
    if (res.error) {
      alert(res.error);
    } else {
      alert('Registrado com sucesso!');
      dispatch(setLogin(res));

      navigation.navigate('Login');
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
        value={userForm.name}
        onChangeText={(text) => handleForm('name', text)}
        placeholder="Digite seu nome completo"
      />
      <S.InputField
        value={userForm.email}
        onChangeText={(text) => handleForm('email', text)}
        placeholder="Digite seu email"
      />
      <S.InputField
        value={userForm.cpf}
        onChangeText={(text) => handleForm('cpf', text)}
        placeholder="Digite seu cpf"
        keyboardType="numeric"
      />
      <S.InputField
        value={userForm.password}
        onChangeText={(text) => handleForm('password', text)}
        placeholder="Digite sua senha"
      />
      <S.InputField
        value={userForm.password_confirm}
        onChangeText={(text) => handleForm('password_confirm', text)}
        placeholder="Confirme sua senha"
      />
      <DefaultButton text="Cadastrar-se" onPress={handleSubmit} />
      <S.NewUserArea>
        <S.BoldText>Já tem uma conta?</S.BoldText>
        <S.TouchButton onPress={() => navigation.navigate('Login')}>
          <S.ButtonText>Faça Login</S.ButtonText>
        </S.TouchButton>
      </S.NewUserArea>
    </S.Container>
  );
};

export default Register;
