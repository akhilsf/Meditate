import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SessionContext from '../../Contexts.jsx';


export default () => {
  const {
    time, setTime,
  } = useContext(SessionContext);

  console.log(zeroToSixty);

  const timeConvert = () => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return [minutes, seconds];
  }

  const minutes = [...Array(60)]

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={10}
      >
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#787878',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 229, 217, 0.33)',
  },
  timeValue: {
    marginVertical: 40,
    color: '#787878',
    fontSize: 43,
  },
});