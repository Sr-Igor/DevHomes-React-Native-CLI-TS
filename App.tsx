import 'react-native-gesture-handler';

//React Navigation
import DefaultStack from 'navigators/Stack';
import { NavigationContainer } from '@react-navigation/native';

//Toast
import Toast from 'react-native-toast-message';

//Styled Components
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

//Redux Configs
import { store, persistor } from 'store';
import { Provider as ProviderRedux } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './global.js';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProviderRedux store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <DefaultStack />
            <Toast />
          </NavigationContainer>
        </PersistGate>
      </ProviderRedux>
    </ThemeProvider>
  );
};

export default App;
