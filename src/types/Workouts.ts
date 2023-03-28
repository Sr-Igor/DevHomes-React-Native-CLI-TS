import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

//General Stack Types
export type WorkoutStackParamList = {
  //Hight Order
  Workout: undefined;
  CheckList: { id: number };
};

//Default Stack Types
export type StackScreenRouteProp = RouteProp<WorkoutStackParamList, 'Workout' | 'CheckList'>;

export type StackScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<WorkoutStackParamList, 'Workout', 'CheckList'>,
  BottomTabNavigationProp<WorkoutStackParamList>
>;
