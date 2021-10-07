import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SessionContext from '../Contexts.jsx';

export default function Timer() {
  const state = useContext(SessionContext);
  const [seconds, setSeconds] = useState(1800);

  let minutes = Math.floor(seconds / 60);
  let secs = secs < 10 ? '0' + secs : seconds % 60;

  let startTimer = () => {
    const tick = setInterval(() => {
      setSeconds(seconds => seconds - 1);
      console.log(seconds);
    }, 1000);
    return () => clearInterval(tick);
  };

  // startTimer();

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

