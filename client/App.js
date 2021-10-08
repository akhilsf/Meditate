import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import SessionContext from './components/Contexts.jsx'
import HomePage from './components/HomePage/HomePage.jsx';

const Stack = createNativeStackNavigator();

export default () => {
  const [inSession, setSession] = useState(false);
  const [time, setTime] = useState(600);
  const value = { inSession, setSession, time, setTime };

  return (
    <SessionContext.Provider value={value}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen
            name='Home'
            component={HomePage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SessionContext.Provider>
  );
}
