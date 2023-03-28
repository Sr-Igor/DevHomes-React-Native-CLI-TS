import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

//General Stack Types
export type RootStackParamList = {
  //Hight Order
  Preload: undefined;
  TabDefault: undefined;
  StackDefault: undefined;
  StarterLevel: undefined;
  StarterRecommends: undefined;

  //Stacks
  Starter: undefined;
  StarterName: undefined;
  StarterDays: undefined;

  //Tabs
  HomeStack: undefined;
  WorkoutStack: undefined;
  MyWorkoutStack: undefined;
};

//Default Stack Types
export type StackScreenRouteProp = RouteProp<
  RootStackParamList,
  | 'StackDefault'
  | 'StarterName'
  | 'StarterDays'
  | 'StarterLevel'
  | 'StarterRecommends'
  | 'HomeStack'
>;

export type StackScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<
    RootStackParamList,
    'StackDefault' | 'StarterName' | 'StarterDays' | 'StarterLevel' | 'StarterRecommends'
  >,
  BottomTabNavigationProp<RootStackParamList>
>;

//Default Tab Types
export type TabScreenRouteProp = RouteProp<
  RootStackParamList,
  'TabDefault' | 'HomeStack' | 'WorkoutStack' | 'MyWorkoutStack'
>;
export type TabScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<
    RootStackParamList,
    'TabDefault' | 'HomeStack' | 'WorkoutStack' | 'MyWorkoutStack'
  >,
  BottomTabNavigationProp<RootStackParamList>
>;
