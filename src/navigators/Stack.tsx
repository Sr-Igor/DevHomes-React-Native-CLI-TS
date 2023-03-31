import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Preload from 'pages/Preload';
import StackDefault from 'pages/Stacks';
// import TabDefault from 'pages/Tab';
import DrawerMain from 'pages/Drawer';

import { RootStackParamList } from 'types/Navigation';

const MainStack = createNativeStackNavigator<RootStackParamList>();

const DefaultStack = () => (
  <MainStack.Navigator
    initialRouteName="Preload"
    screenOptions={{
      headerShown: false
    }}
  >
    <MainStack.Screen name="Preload" component={Preload} />
    <MainStack.Screen name="StackDefault" component={StackDefault} />
    <MainStack.Screen name="DrawerMain" component={DrawerMain} />
    {/* <MainStack.Screen name="TabDefault" component={TabDefault} /> */}
  </MainStack.Navigator>
);

export default DefaultStack;
