import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

//General Stack Types
export type RootStackParamList = {
  //Hight Order
  Login: undefined;
  Register: undefined;
  // StackDefault: undefined;
  // StarterLevel: undefined;
  // StarterRecommends: undefined;

  //Stacks
  // Starter: undefined;
  // StarterName: undefined;
  // StarterDays: undefined;

  //Tabs
  // HomeStack: undefined;
  // WorkoutStack: undefined;
  // MyWorkoutStack: undefined;
};

//Default Stack Types
type StackScreenRouteProp = RouteProp<RootStackParamList, 'Login' | 'Register'>;

type StackScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Login' | 'Register'>,
  BottomTabNavigationProp<RootStackParamList>
>;

//Default Tab Types
export type TabScreenRouteProp = RouteProp<RootStackParamList>;
// 'TabDefault' | 'HomeStack' | 'WorkoutStack' | 'MyWorkoutStack'
export type TabScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList>,
  // 'TabDefault' | 'HomeStack' | 'WorkoutStack' | 'MyWorkoutStack'
  BottomTabNavigationProp<RootStackParamList>
>;

export type StackRoute = StackScreenRouteProp;
export type StackNavigation = StackScreenNavigationProp;
