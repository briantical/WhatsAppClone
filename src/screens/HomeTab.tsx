import React from 'react';
import { View, Text, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Entypo';

import { Home } from '@components/index';

const { Camera, Calls, Chats, Status } = Home;

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const HomeStacks = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Camera'
        component={Camera}
        options={{ tabBarShowLabel: false, tabBarIcon: () => <Icon name='camera' /> }}
      />
      <Tab.Screen name='Chats' component={Calls} />
      <Tab.Screen name='Status' component={Chats} />
      <Tab.Screen name='Calls' component={Status} />
    </Tab.Navigator>
  );
};

const HomeTabs = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation }) => (
          <View style={{ height: 50 }}>
            <Text>WhatsApp</Text>
            <Button title='Press me' onPress={() => navigation.navigate('SettingsScreens')} />
          </View>
        ),
      }}
    >
      <Stack.Screen name='HomeTabs' children={HomeStacks} />
    </Stack.Navigator>
  );
};

export default HomeTabs;
