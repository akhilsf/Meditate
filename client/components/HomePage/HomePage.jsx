import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from '../SessionComponents/Timer.jsx';
import ActionButton from '../SessionComponents/ActionButton.jsx';
import MenuOptions from './MenuOptions.jsx';

export default () => {
  return (
    <View style={styles.container}>
      <Timer />
      <ActionButton />
      <MenuOptions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 229, 217, 0.33)',
    alignItems: 'center',
    justifyContent: 'center',
  }
});