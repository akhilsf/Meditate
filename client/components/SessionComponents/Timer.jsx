import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SessionContext from '../Contexts.jsx';

export default function Timer() {
  const state = useContext(SessionContext);
  const [seconds, setSeconds] = useState(30);

  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;
  if (secs < 10) {
    secs = '0' + secs;
  }

  let startTimer = () => {
    setInterval(() => {
      let time = seconds - 1;
      setSeconds(time);
    }, 1000)
  };

  // startTimer();

  return (
    <View style={style.timer}>
      <Text style={style.timerText}>{minutes}:{secs}</Text>
      <Text style={style.secondsText}></Text>
    </View>
  )
};

const style = StyleSheet.create({
  timer: {
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    top: '25%',
  },
  timerText: {
    color: '#787878',
    fontSize: 86,
  },
  secondsText: {
    color: '#787878',
    fontSize: 24,
    fontWeight: 'bold',
  }
})

