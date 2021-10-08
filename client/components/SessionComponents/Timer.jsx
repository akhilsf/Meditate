import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SessionContext from '../Contexts.jsx';

export default function Timer() {
  const { time } = useContext(SessionContext);

  let minutes = Math.floor(time / 60);
  let secs = time % 60;
  if (secs < 10) {
    secs = `0${secs}`;
  }

  return (
    <View style={style.timer}>
      <Text style={style.timerText}>{minutes}:{secs}</Text>
      <Text style={style.subtext}>minutes</Text>
    </View>
  )
};

const style = StyleSheet.create({
  timer: {
    flex: 1,
    alignItems: 'center',
    top: '20%',
    marginBottom: '5%'
  },
  timerText: {
    color: '#787878',
    fontSize: 86,
  },
  subtext: {
    color: '#787878',
    fontSize: 24,
    fontWeight: '500',
  }
})

