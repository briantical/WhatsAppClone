import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeTabs from './HomeTab';
import SettingsTabs from './SettingsTab';

const Stack = createStackNavigator();

const MainRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='HomeScreens' children={HomeTabs} />
        <Stack.Screen name='SettingsScreens' children={SettingsTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoute;
