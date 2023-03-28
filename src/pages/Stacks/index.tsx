//Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Types
import { RootStackParamList } from 'types/Navigation';

//Pages
import Starter from './Starter';
import StarterName from './StarterName';
import StarterDays from './StarterDays';
import StarterLevel from './StarterLevel';
import StarterRecommends from './StarterRecommends';

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
    <MainStack.Screen name="StarterName" component={StarterName} />
    <MainStack.Screen name="StarterDays" component={StarterDays} />
    <MainStack.Screen name="StarterLevel" component={StarterLevel} />
    <MainStack.Screen name="StarterRecommends" component={StarterRecommends} />
  </MainStack.Navigator>
);

export default DefaultStack;
