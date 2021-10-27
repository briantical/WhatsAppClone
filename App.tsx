import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NativeBaseProvider } from 'native-base';

import MainRoute from '@screens/index';
import { theme } from '@styles/index';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NativeBaseProvider theme={theme}>
      <MainRoute />
    </NativeBaseProvider>
  );
};

export default App;
