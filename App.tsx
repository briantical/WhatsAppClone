import React, { useEffect, useReducer } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NativeBaseProvider } from 'native-base';

import MainRoute from '@screens/index';
import { theme } from '@styles/index';
import { contexts, initialStates, reducers } from '@store/index';

const { modalReducer } = reducers;
const { ModalContext } = contexts;
const { modalInitialState } = initialStates;

const App = () => {
  const [state, dispatch] = useReducer(modalReducer, modalInitialState);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      <NativeBaseProvider theme={theme}>
        <MainRoute />
      </NativeBaseProvider>
    </ModalContext.Provider>
  );
};

export default App;
