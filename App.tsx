import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import MainRoute from '@screens/index';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <MainRoute />;
};

export default App;
