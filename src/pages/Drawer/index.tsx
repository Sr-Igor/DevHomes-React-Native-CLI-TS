import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerCustom from 'components/DrawerCustom';

const Drawer = createDrawerNavigator();

//Screens
import { WallScreen } from './WallScreen';

const DrawerMain = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerCustom {...props} />}
    >
      <Drawer.Screen name="WallScreen" component={WallScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerMain;
