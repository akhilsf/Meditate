import React, { useState, useContext, useEffect } from 'react';
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
  const [hasHours, setHasHours] = useState(false);

  const timeConvert = (remainingTime) => {
    let hours = Math.floor(remainingTime / 3600);
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;

    if (hours >= 1) {
      minutes -= hours * 60;
      hours = `${hours}`;
      // setHasHours(true);
    } else {
      // setHasHours(false);
    }

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${hours}:${minutes}:${seconds}`;
  }

  const resetTimer = () => {
    setKey(key + 1);
  }

  useEffect(() => {
    setKey(key + 1);
  }, [time]);

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
            <Text style={style.subtext}>{inSession ? 'remaining' : hasHours ? 'hours' : 'minutes'}</Text>
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

