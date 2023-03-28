import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Workout from 'pages/Tab/Workout/Default';
import CheckList from 'pages/Tab/Workout/CheckList';

import { WorkoutStackParamList } from 'types/Workouts';

const MainStack = createNativeStackNavigator<WorkoutStackParamList>();

const MyWorkoutStack = () => (
  <MainStack.Navigator
    initialRouteName="Workout"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#F2F2F2'
      },
      headerShadowVisible: false,
      statusBarStyle: 'dark',
      statusBarColor: '#F2F2F2',
      animation: 'slide_from_right',
      headerTitleAlign: 'center',
      headerBackVisible: true
    }}
  >
    <MainStack.Screen name="Workout" component={Workout} />
    <MainStack.Screen
      name="CheckList"
      component={CheckList}
      options={{
        headerShown: false,
        statusBarTranslucent: true,
        statusBarHidden: true,
        statusBarStyle: 'light'
      }}
    />
  </MainStack.Navigator>
);

export default MyWorkoutStack;
