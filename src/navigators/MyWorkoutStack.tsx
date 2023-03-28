import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyWorkout from 'pages/Tab/MyWorkouts/Default';
import ActionWorkout from 'pages/Tab/MyWorkouts/ActionWorkout';

import { MyWorkoutStackParamList } from 'types/MyWorkouts';

const MainStack = createNativeStackNavigator<MyWorkoutStackParamList>();

const MyWorkoutStack = () => (
  <MainStack.Navigator
    initialRouteName="MyWorkout"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#F2F2F2'
      },
      headerShadowVisible: false,
      statusBarStyle: 'dark',
      statusBarColor: '#F2F2F2',
      animation: 'slide_from_right',
      headerTitleAlign: 'center'
    }}
  >
    <MainStack.Screen name="MyWorkout" component={MyWorkout} />
    <MainStack.Screen name="ActionWorkout" component={ActionWorkout} />
  </MainStack.Navigator>
);

export default MyWorkoutStack;
