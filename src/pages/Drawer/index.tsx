import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerCustom from 'components/DrawerCustom';

const Drawer = createDrawerNavigator();

//Screens
import { WallScreen } from './WallScreen';
import { DocumentsScreen } from './DocumentsScreen';
import { ReservationScreen } from './ReservationScreen';
import { ReservationAddScreen } from './ReservationAddScreen';
import { ReservationMyScreen } from './ReservationMyScreen';
import { WarningScreen } from './WarningScreen';
import { FoundAndLostScreen } from './FoundAndLostScreen';
import { FoundAndLostAddScreen } from './FoundAndLostAddScreen';
import { BilletScreen } from './BilletScreen';
import { ProfileScreen } from './ProfileScreen';
import { WarningAddScreen } from './WarningAddScreen';

const DrawerMain = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerCustom {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F2F2F2'
        },
        headerShadowVisible: false
      }}
    >
      <Drawer.Screen
        name="WallScreen"
        component={WallScreen}
        options={{
          title: 'Mural de Avisos'
        }}
      />
      <Drawer.Screen
        name="DocumentsScreen"
        component={DocumentsScreen}
        options={{
          title: 'Documentos'
        }}
      />
      <Drawer.Screen
        name="ReservationScreen"
        component={ReservationScreen}
        options={{
          title: 'Reservas'
        }}
      />
      <Drawer.Screen
        name="ReservationAddScreen"
        component={ReservationAddScreen}
        options={{
          title: 'Reservar'
        }}
      />
      <Drawer.Screen
        name="ReservationMyScreen"
        component={ReservationMyScreen}
        options={{
          title: 'Minhas Reservas'
        }}
      />
      <Drawer.Screen
        name="WarningScreen"
        component={WarningScreen}
        options={{
          title: 'Ocorrências'
        }}
      />
      <Drawer.Screen
        name="WarningAddScreen"
        component={WarningAddScreen}
        options={{
          title: 'Adicionar Ocorrência'
        }}
      />
      <Drawer.Screen
        name="FoundAndLostScreen"
        component={FoundAndLostScreen}
        options={{
          title: 'Achados e Perdidos'
        }}
      />
      <Drawer.Screen
        name="FoundAndLostAddScreen"
        component={FoundAndLostAddScreen}
        options={{
          title: 'Adicionar Perdido'
        }}
      />
      <Drawer.Screen
        name="BilletScreen"
        component={BilletScreen}
        options={{
          title: 'Boletos'
        }}
      />
      <Drawer.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Perfil'
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerMain;
