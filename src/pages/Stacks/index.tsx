//Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Types
import { RootStackParamList } from 'types/Navigation';

//Pages
import Login from './Login';
import Register from './Register';
import ChooseProperty from './ChooseProperty';

const MainStack = createNativeStackNavigator<RootStackParamList>();

const DefaultStack = () => (
  <MainStack.Navigator
    initialRouteName="ChooseProperty"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#F2F2F2'
      },
      headerShadowVisible: false,
      statusBarStyle: 'dark',
      statusBarColor: '#F2F2F2',
      animation: 'slide_from_right'
    }}
  >
    <MainStack.Screen name="Login" component={Login} />
    <MainStack.Screen
      name="Register"
      component={Register}
      options={{
        title: 'Registro'
      }}
    />
    <MainStack.Screen
      name="ChooseProperty"
      component={ChooseProperty}
      options={{
        headerShown: false
      }}
    />
  </MainStack.Navigator>
);

export default DefaultStack;
