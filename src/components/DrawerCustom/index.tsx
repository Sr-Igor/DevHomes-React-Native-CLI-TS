import * as S from './styled';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { StackActions, useNavigation, useRoute } from '@react-navigation/native';
import { useAppSelector, useAppDispatch } from 'hooks/redux-hook';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from 'styles/theme';
import { Profile } from 'types/user';
import DefaultButton from 'components/Button';
import { resetProperty, Logout } from 'store/reducers/user/actions';
import { StackNavigation, StackRoute } from 'types/Navigation';
import { menus } from './constants';

const DrawerCustom = (props: DrawerContentComponentProps) => {
  const auth: Profile = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigation>();
  const route = useRoute<StackRoute>();

  console.log(props.state.index);

  const chooseAnotherProperty = () => {
    dispatch(resetProperty());
    navigation.reset({
      index: 0,
      routes: [{ name: 'StackDefault' }]
    });
  };

  const handleLogout = () => {
    dispatch(Logout());
    navigation.reset({
      index: 0,
      routes: [{ name: 'StackDefault' }]
    });
  };

  return (
    <S.Container>
      <S.LogoArea>
        <S.Logo source={require('assets/homelogo.png')} resizeMode="contain" />
      </S.LogoArea>
      <S.ListOptions>
        {menus.map((item, index) => (
          <S.Item
            key={index}
            isSelected={props.state.index == index}
            onPress={() => navigation.navigate(item.screen)}
          >
            <S.BarSelected isSelected={props.state.index == index} />
            <Icon
              name={item.icon}
              size={20}
              color={props.state.index == index ? theme.colors.button : theme.colors.gray}
            />
            <S.ItemText isSelected={props.state.index == index}>{item.title}</S.ItemText>
          </S.Item>
        ))}
        <S.Item>
          <S.BarSelected isSelected={false} />
          <Icon name="sign-out" size={20} onPress={handleLogout} />
          <S.ItemText>Sair</S.ItemText>
        </S.Item>
      </S.ListOptions>

      <S.UnityArea>
        <DefaultButton text="Alterar residência" onPress={() => chooseAnotherProperty()} />
      </S.UnityArea>
      <S.FooterArea>
        <S.FooterInfos>
          <S.UserText>Olá {auth?.user?.name}</S.UserText>
          <S.FooterInfosText>{auth?.property?.name}</S.FooterInfosText>
        </S.FooterInfos>
        <S.ButtonConfig>
          <Icon name="gear" size={22} color={theme.colors.gray} />
        </S.ButtonConfig>
      </S.FooterArea>
    </S.Container>
  );
};

export default DrawerCustom;
