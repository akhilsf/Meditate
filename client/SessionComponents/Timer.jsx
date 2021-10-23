import React, { useState, useContext } from 'react';
import { StyleSheet, Animated, Text, View } from 'react-native';
import SessionContext from '../Contexts.jsx';
import ActionButton from './ActionButton.jsx';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function Timer() {
  const {
    inMeditation, setInMeditation,
    time, setTime,
    inSession, setInSession,
    sessionFinished, setSessionFinished,
  } = useContext(SessionContext);

  const [key, setKey] = useState(0);

  const timeConvert = (remainingTime) => {
    console.log(remainingTime)
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  }

  const resetTimer = () => {
    setKey(key + 1);
  }

  return (
    <View style={
      inMeditation ?
        dynamicStyle('20%').container :
        inSession ?
          dynamicStyle('20%').container :
          dynamicStyle('10%').container
      }>
      <CountdownCircleTimer
        key={key}
        isPlaying={inMeditation}
        duration={time}
        colors={[['#A4AA88', 1]]}
        size={300}
        strokeWidth={8}
        onComplete={() => {
          setSessionFinished(true);
          setInMeditation(!inMeditation);
        }}
      >
        {({ remainingTime }) => (
          <View style={style.textContainer}>
            <Text style={style.timerText}>
              {timeConvert(remainingTime)}
            </Text>
            <Text style={style.subtext}>{inSession ? 'remaining' : 'minutes'}</Text>
          </View>
        )}
      </CountdownCircleTimer>
        <ActionButton resetTimer={resetTimer} />
    </View>
  )
};

const dynamicStyle = (pos, opacity) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: pos,
    marginBottom: '20%',
  },
})

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    color: '#787878',
    fontSize: 60,
  },
  subtext: {
    color: '#787878',
    fontSize: 18,
    fontWeight: '500',
  }
})

