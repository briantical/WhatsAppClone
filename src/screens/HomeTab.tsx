import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Entypo';

import { Home } from '@components/index';
import { Header } from '@commons/index';

const { Camera, Calls, Chats, Status } = Home;

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const HomeStacks = () => {
  return (
    <Tab.Navigator
      initialRouteName='Chats'
      screenOptions={{
        tabBarStyle: { backgroundColor: '#202C33' },
        tabBarActiveTintColor: '#00A884',
        tabBarInactiveTintColor: '#888D90',
        tabBarLabelStyle: { fontWeight: 'bold' },
        tabBarIndicatorStyle: { backgroundColor: '#00A884', height: 3 },
      }}
    >
      <Tab.Screen
        name='Camera'
        component={Camera}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Icon name='camera' color={color} size={25} />,
        }}
      />
      <Tab.Screen name='Chats' component={Chats} />
      <Tab.Screen name='Status' component={Status} />
      <Tab.Screen name='Calls' component={Calls} />
    </Tab.Navigator>
  );
};

const HomeTabs = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <Header {...props} />,
      }}
    >
      <Stack.Screen name='HomeTabs' children={HomeStacks} />
    </Stack.Navigator>
  );
};

export default HomeTabs;
