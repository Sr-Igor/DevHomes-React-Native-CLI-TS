import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const MainTab = createBottomTabNavigator();

//Bar
import TabBar from 'components/TabBar';

import HomeStack from '../../navigators/HomeStack';
import WorkoutStack from '../../navigators/WorkoutStack';
import MyWorkoutStack from '../../navigators/MyWorkoutStack';

const DefaultTab = () => (
  <MainTab.Navigator
    initialRouteName="HomeStack"
    tabBar={(props) => <TabBar {...props} />}
    screenOptions={{
      headerShown: false
    }}
  >
    <MainTab.Screen
      name="HomeStack"
      component={HomeStack}
      options={{
        tabBarLabel: 'Home'
      }}
    />
    <MainTab.Screen
      name="WorkoutStack"
      component={WorkoutStack}
      options={{
        tabBarLabel: 'WorkoutStack'
      }}
    />

    <MainTab.Screen
      name="MyWorkoutStack"
      component={MyWorkoutStack}
      options={{
        tabBarLabel: 'My Workouts'
      }}
    />
  </MainTab.Navigator>
);

export default DefaultTab;
