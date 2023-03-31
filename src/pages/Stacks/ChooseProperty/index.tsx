//Styles
import * as S from './styled';
import theme from 'styles/theme';

//React
import { useEffect, useLayoutEffect, useState } from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';

//Redux
import { useAppDispatch, useAppSelector } from 'hooks/redux-hook';
import { Logout, setProperty } from 'store/reducers/user/actions';

//Components
import DefaultButton from 'components/Button';
import HeaderButton from 'components/HeaderButton';

//Types
import { Profile, Property } from 'types/user';
import { StackNavigation } from 'types/Navigation';

//Mock
import { fakeProps } from './mock';

export type UserSignIn = {
  cpf: string;
  password: string;
};

const ChooseProperty = () => {
  const navigation = useNavigation<StackNavigation>();

  const dispatch = useAppDispatch();
  const user: Profile = useAppSelector((state) => state.profile);

  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Property | null>(null);

  const LogoutUser = () => {
    dispatch(Logout());
    navigation.dispatch(StackActions.replace('Login'));
  };

  useEffect(() => {
    if (user?.property?.id) {
      navigation.dispatch(StackActions.replace('DrawerMain'));
    } else {
      setLoading(false);
    }
  }, [user]);

  useLayoutEffect(() => {
    if (selected) {
      navigation.setOptions({
        headerShown: true,
        headerTitle: '',
        headerRight: () => (
          <HeaderButton text="Avançar" onPress={() => saveProperty()} colorText={'purple'} />
        )
      });
    }
  }, [selected]);

  const saveProperty = () => {
    if (selected) {
      dispatch(setProperty(selected));
      navigation.dispatch(StackActions.replace('DrawerMain'));
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
      {loading && (
        <S.LoadingArea>
          <S.LoadingIcon size="large" color={theme.colors.button} />
        </S.LoadingArea>
      )}
      {/* {!loading && !user?.properties?.length && (
        <>
          <S.HeaderArea>
            <S.HeaderTitle>Olá {user.user.name}!</S.HeaderTitle>
            <S.HeaderDescription>Parabens pelo seu novo cadastro!</S.HeaderDescription>
            <S.InformationBox>
              <S.InformationBoxTitle>Agora é com a gente!</S.InformationBoxTitle>
              <S.InformationBoxDescription>
                Por favor! Aguarde até que a administração cadastre seu imóvel
              </S.InformationBoxDescription>
              <S.InformationBoxImageArea>
                <S.InformationBoxImage source={require('assets/home.png')} resizeMode="contain" />
              </S.InformationBoxImageArea>
              <S.InformationBoxRules>
                Esse processo pode levar ate 72 horas úteis para ser efetivado, por favor aguarde
              </S.InformationBoxRules>
            </S.InformationBox>
          </S.HeaderArea>

          <S.BottomArea>
            <DefaultButton text="Sair" onPress={() => LogoutUser()} />
          </S.BottomArea>
        </>
      )} */}
      {/* {!loading && user?.properties?.length && ( */}
        <>
          <S.HeaderArea>
            <S.HeaderTitle>Olá {user.user.name}!</S.HeaderTitle>
            <S.HeaderDescription>Selecione sua residência:</S.HeaderDescription>
          </S.HeaderArea>
          <S.HouseList
            data={fakeProps}
            keyExtractor={(item, index) => String(index)}
            renderItem={(props) => {
              const item = props.item as Property;
              return (
                <S.BoxHome
                  key={item.id}
                  onPress={() => setSelected(item as Property)}
                  isSelected={item.id === selected?.id}
                >
                  <S.BoxImage>
                    <S.HomeImage source={require('assets/home.png')} resizeMode="contain" />
                  </S.BoxImage>
                  <S.HomeName isSelected={item.id === selected?.id}>{item.name}</S.HomeName>
                </S.BoxHome>
              );
            }}
            numColumns={2}
          />
        </>
      {/* )} */}
    </S.Container>
  );
};

export default ChooseProperty;
