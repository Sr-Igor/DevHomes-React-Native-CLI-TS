import { DrawerScreenRouteProp } from './Navigation';

export type Menu = {
  id: number;
  title: string;
  icon: string;
  screen: DrawerScreenRouteProp | string;
};
