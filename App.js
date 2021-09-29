import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SessionContext from './components/Contexts.jsx'
import Router from './components/router.js';

export default () => {
  return (
    <SessionContext.Provider>
      <Router />
      <View>
        <StatusBar style="auto" />
      </View>
    </SessionContext.Provider>
  );
}
