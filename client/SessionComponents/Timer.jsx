import React, { useState, useContext } from 'react';
import { StyleSheet, Animated, Text, View } from 'react-native';
import SessionContext from '../Contexts.jsx';
import ActionButton from './ActionButton.jsx';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function Timer() {
  const { inMeditation, setInMeditation, time, inSession, setInSession } = useContext(SessionContext);
  const [isPlaying, setIsPlaying] = useState(false);

  const timeConvert = (remainingTime) => {
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

  return (
    <Animated.View style={
      inSession ? dynamicStyle('20%').container : dynamicStyle('10%').container
      }>
      <CountdownCircleTimer
        isPlaying={inMeditation}
        duration={10}
        colors={[['#A4AA88', 1]]}
        size={300}
        onComplete={() => setInSession(!inSession)}
      >
        {({ remainingTime, animatedColor }) => (
          <View style={style.textContainer}>
            <Animated.Text style={style.timerText}>
              {timeConvert(remainingTime)}
            </Animated.Text>
            <Text style={style.subtext}>remaining</Text>
          </View>
        )}
      </CountdownCircleTimer>
        <ActionButton />
    </Animated.View>
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

