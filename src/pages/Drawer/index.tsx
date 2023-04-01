import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerCustom from 'components/DrawerCustom';

const Drawer = createDrawerNavigator();

//Screens
import { WallScreen } from './WallScreen';
import { DocumentsScreen } from './DocumentsScreen';
import { ReservationScreen } from './ReservationScreen';
import { WarningScreen } from './WarningScreen';
import { FoundAndLostScreen } from './FoundAndLostScreen';
import { BilletScreen } from './BilletScreen';
import { ProfileScreen } from './ProfileScreen';

const DrawerMain = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerCustom {...props} />}>
      <Drawer.Screen name="WallScreen" component={WallScreen} />
      <Drawer.Screen name="DocumentsScreen" component={DocumentsScreen} />
      <Drawer.Screen name="ReservationScreen" component={ReservationScreen} />
      <Drawer.Screen name="WarningScreen" component={WarningScreen} />
      <Drawer.Screen name="FoundAndLostScreen" component={FoundAndLostScreen} />
      <Drawer.Screen name="BilletScreen" component={BilletScreen} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerMain;
