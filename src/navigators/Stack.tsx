import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackDefault from 'pages/Stacks';
import TabDefault from 'pages/Tab';
import Preload from 'pages/Preload';
import { RootStackParamList } from 'types/Navigation';

const MainStack = createNativeStackNavigator<RootStackParamList>();

const DefaultStack = () => (
  <MainStack.Navigator
    initialRouteName="Preload"
    screenOptions={{
      headerShown: false
    }}
  >
    <MainStack.Screen name="StackDefault" component={StackDefault} />
    <MainStack.Screen name="TabDefault" component={TabDefault} />
    <MainStack.Screen name="Preload" component={Preload} />
  </MainStack.Navigator>
);

export default DefaultStack;
