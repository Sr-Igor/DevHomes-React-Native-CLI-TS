//Styles
import * as S from './styled';

//React
import { useLayoutEffect, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

//Redux
import { useAppDispatch, useAppSelector } from 'hooks/redux-hook';
import { setLogin } from 'store/reducers/user/actions';

//Components
import DefaultButton from 'components/Button';
import { InputText } from 'components/InputText';

//Services
import * as services from './services';

//Types
import { StackNavigation } from 'types/Navigation';

//Validation
import { signInValidate } from 'utils/validations';
import { Profile } from 'types/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type UserSignIn = {
  cpf: string;
  password: string;
};

const Starter = () => {
  const navigation = useNavigation<StackNavigation>();
  const dispatch = useAppDispatch();

  const auth: Profile = useAppSelector((state) => state.profile);

  //Form States

  const [userForm, setUserForm] = useState({
    cpf: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [fieldsError, setFieldsError] = useState<UserSignIn>();
  const [requestError, setRequestError] = useState<string>('');

  useEffect(() => {
    if (auth.token) {
      navigation.navigate('ChooseProperty');
    }
  }, [auth]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

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
    const errors = signInValidate(userForm);

    if (Object.keys(errors).length) {
      setLoading(false);
      setFieldsError(errors as UserSignIn);
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'Preencha todos os campos corretamente!'
      });
      return;
    }

    setLoading(true);
    const response = await services.handleLogin(userForm);
    if (!response.error) {
      dispatch(setLogin(response));
      navigation.navigate('ChooseProperty');
    } else {
      setRequestError(response.error);
    }
    setLoading(false);
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
      <InputText
        value={userForm.cpf}
        onChangeText={(text) => handleForm('cpf', text)}
        placeholder="Digite seu cpf"
        error={fieldsError?.cpf || requestError}
      />

      <InputText
        value={userForm.password}
        onChangeText={(text) => handleForm('password', text)}
        placeholder="Digite sua senha"
        error={fieldsError?.password || requestError}
        secureTextEntry
      />

      <DefaultButton text="Login" onPress={handleSubmit} loading={loading} />
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
