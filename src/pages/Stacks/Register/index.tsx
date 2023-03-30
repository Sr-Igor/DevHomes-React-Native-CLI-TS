//Styles
import * as S from './styled';

//React
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

//Components
import DefaultButton from 'components/Button';
import { InputText } from 'components/InputText';

//Services
import * as services from './services';

//Redux
import { useAppDispatch } from 'hooks/redux-hook';
import { setLogin } from 'store/reducers/user/actions';

//Types
import { StackNavigation } from 'types/Navigation';

//Validation
import { signUpValidate } from 'utils/validations';

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
  const [loading, setLoading] = useState(false);
  const [fieldsError, setFieldsError] = useState<UserRegister>();
  const [requestError, setRequestError] = useState<string>('');

  const handleForm = (key: string, value: string) => {
    setUserForm({
      ...userForm,
      [key]: value
    });

    setRequestError('');
    setFieldsError({
      ...fieldsError!,
      [key]: ''
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setRequestError('');
    const errors = signUpValidate(userForm);

    if (Object.keys(errors).length) {
      setLoading(false);
      setFieldsError(errors as UserRegister);
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'Preencha todos os campos corretamente!'
      });
      return;
    }

    const res = await services.handleRegister(userForm);
    if (!res.error) {
      Toast.show({
        type: 'success',
        text1: 'Sucesso',
        text2: 'Cadastro realizado com sucesso!'
      });
      dispatch(setLogin(res));
      setLoading(false);
      navigation.navigate('Login');
    } else {
      setRequestError('Verifique os dados e tente novamente!');
    }
    setLoading(false);
  };

  return (
    <S.Container>
      <S.ScrollSreaUser>
        <S.TiltedArea>
          <S.TitleBold>DEV</S.TitleBold>

          <S.TitleViolet>COND</S.TitleViolet>
        </S.TiltedArea>

        <S.ImageArea>
          <S.ImageItem source={require('assets/undraw_home.png')} resizeMode="contain" />
        </S.ImageArea>
        <S.keyboardArea>
          <InputText
            value={userForm.name}
            onChangeText={(text) => handleForm('name', text)}
            placeholder="Digite seu nome completo"
            error={fieldsError?.name || requestError}
          />
          <InputText
            value={userForm.email}
            onChangeText={(text) => handleForm('email', text)}
            placeholder="Digite seu email"
            error={fieldsError?.email || requestError}
            keyboardType="email-address"
          />
          <InputText
            value={userForm.cpf}
            onChangeText={(text) => handleForm('cpf', text)}
            placeholder="Digite seu cpf"
            keyboardType="numeric"
            error={fieldsError?.cpf || requestError}
          />
          <InputText
            value={userForm.password}
            onChangeText={(text) => handleForm('password', text)}
            placeholder="Digite sua senha"
            error={fieldsError?.password || requestError}
            secureTextEntry
          />
          <InputText
            value={userForm.password_confirm}
            onChangeText={(text) => handleForm('password_confirm', text)}
            placeholder="Confirme sua senha"
            error={fieldsError?.password_confirm || requestError}
            secureTextEntry
          />
        </S.keyboardArea>
        <DefaultButton text="Cadastrar-se" onPress={handleSubmit} loading={loading} />
        <S.NewUserArea>
          <S.BoldText>Já tem uma conta?</S.BoldText>
          <S.TouchButton onPress={() => navigation.navigate('Login')}>
            <S.ButtonText>Faça Login</S.ButtonText>
          </S.TouchButton>
        </S.NewUserArea>
      </S.ScrollSreaUser>
    </S.Container>
  );
};

export default Register;
