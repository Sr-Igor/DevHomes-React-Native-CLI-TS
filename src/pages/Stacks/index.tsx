//Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Types
import { RootStackParamList } from 'types/Navigation';

//Pages
import Starter from './Starter';

const MainStack = createNativeStackNavigator<RootStackParamList>();

const DefaultStack = () => (
  <MainStack.Navigator
    initialRouteName="Starter"
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
    <MainStack.Screen name="Starter" component={Starter} />
  </MainStack.Navigator>
);

export default DefaultStack;
