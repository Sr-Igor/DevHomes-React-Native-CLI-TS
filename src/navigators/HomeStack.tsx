import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from 'pages/Tab/Home/Default';
import Config from 'pages/Tab/Home/Configs';

import { HomeStackParamList } from 'types/Home';

const MainStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => (
  <MainStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#F2F2F2'
      },
      headerShadowVisible: false,
      statusBarStyle: 'dark',
      statusBarColor: '#F2F2F2',
      animation: 'slide_from_right',
      headerTitleAlign: 'center',
      headerTitle: 'Seu progresso diário'
    }}
  >
    <MainStack.Screen name="Home" component={Home} />
    <MainStack.Screen name="Config" component={Config} />
  </MainStack.Navigator>
);

export default HomeStack;
