import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import SessionContext from './Contexts.jsx'
import HomePage from './pages/HomePage/HomePage.jsx';
import TimeSelect from './pages/settings/TimeSelect.jsx';

const Stack = createNativeStackNavigator();

export default () => {
  const [inMeditation, setInMeditation] = useState(false);
  const [inSession, setInSession] = useState(false);
  const [time, setTime] = useState(600);
  const [sessionFinished, setSessionFinished] = useState(false);
  const value = {
    inMeditation, setInMeditation,
    time, setTime,
    inSession, setInSession,
    sessionFinished, setSessionFinished
  };

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
          <Stack.Screen
            name='TimeSelect'
            component={TimeSelect}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SessionContext.Provider>
  );
}
