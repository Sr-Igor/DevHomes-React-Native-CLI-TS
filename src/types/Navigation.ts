import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

//General Stack Types
export type RootStackParamList = {
  //Hight Order
  StackDefault: undefined;
  Preload: undefined;
  Login: undefined;
  Register: undefined;
  ChooseProperty: undefined;
  DrawerMain: undefined;

  //Drawers
  WallScreen: undefined;
  DocumentsScreen: undefined;
  ReservationScreen: undefined;
  WarningScreen: undefined;
  FoundAndLostScreen: undefined;
  BilletScreen: undefined;
  ProfileScreen: undefined;
};

//Default Stack Types
type StackScreenRouteProp = RouteProp<
  RootStackParamList,
  'Preload' | 'Login' | 'Register' | 'ChooseProperty' | 'DrawerMain' | 'StackDefault'
>;

type StackScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Login' | 'Register' | 'ChooseProperty' | 'StackDefault'>,
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

//Default Drawer Types
export type DrawerScreenRouteProp = RouteProp<
  RootStackParamList,
  | 'DrawerMain'
  | 'WallScreen'
  | 'DocumentsScreen'
  | 'ReservationScreen'
  | 'WarningScreen'
  | 'FoundAndLostScreen'
  | 'BilletScreen'
  | 'ProfileScreen'
>;

export type DrawerScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<
    RootStackParamList,
    | 'DrawerMain'
    | 'WallScreen'
    | 'DocumentsScreen'
    | 'ReservationScreen'
    | 'WarningScreen'
    | 'FoundAndLostScreen'
    | 'BilletScreen'
    | 'ProfileScreen'
  >,
  BottomTabNavigationProp<RootStackParamList>
>;

export type StackRoute = StackScreenRouteProp & TabScreenRouteProp & DrawerScreenRouteProp;
export type StackNavigation = StackScreenNavigationProp &
  TabScreenNavigationProp &
  DrawerScreenNavigationProp;
