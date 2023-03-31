import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

//Screens
import { WallScreen } from './WallScreen';

const DrawerMain = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="WallScreen" component={WallScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerMain;
