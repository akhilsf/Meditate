import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SessionContext from '../Contexts.jsx';
import { Audio } from 'expo-av';

export default function ActionButton({ resetTimer }) {
  const {
    inMeditation, setInMeditation,
    time, setTime,
    inSession, setInSession,
    sessionFinished, setSessionFinished
  } = useContext(SessionContext);

  const [sound, setSound] = useState();

  async function toggleAmbiance(status) {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/sounds/ambiance/stormInbound.mp3')
      );
      sound.setStatusAsync({ isLooping: true })
      setSound(sound);

    if (status) {
      console.log('Playing Sound');
      await sound.playAsync();
    } else {
      console.log('Stopping Sound');
      await sound.stopAsync();
    }
  }

  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound])

  const sessionAction = () => {
    // handle sound first
    inMeditation ? toggleAmbiance(false) : toggleAmbiance(true);

    // reset all session state when session is over
    if (sessionFinished) {
      setInMeditation(false);
      setInSession(false);
      setSessionFinished(false);
      resetTimer();
      toggleAmbiance(false);

    // start a session if there is no session
    } else if (!inSession) {
      setInSession(true);
      console.log(inMeditation);
      setInMeditation(!inMeditation);

    // resume and pause current session
    } else {
      setInMeditation(!inMeditation);
    }
  };

  const finishSession = () => {
    setInMeditation(false);
    setInSession(false);
    setSessionFinished(false);
    resetTimer();
  }

  return (
    <View style={style(inMeditation).container}>
      <TouchableOpacity style={style(inMeditation).button} onPress={sessionAction}>
        <Text style={style(inMeditation).actionText}>
          {!inSession ? 'START' : inMeditation ? 'PAUSE' : sessionFinished ? 'FINISH' : 'RESUME'}
        </Text>
      </TouchableOpacity>
      <Text
        style={style(inMeditation).finishText}
        onPress={finishSession}
      >
          {inSession && !inMeditation && !sessionFinished ?
            'Finish' : null
          }
        </Text>
    </View>
  )
};

const style = (inMeditation) => StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 75,
    borderWidth: 10,
    borderRadius: 100,
    borderColor: inMeditation ? '#ECE4DB' : '#ecdcdb',
  },
  actionText: {
    margin: 10,
    fontSize: 30,
    fontWeight: '600',
    color: '#787878',
  },
  finishText: {
    fontSize: 18,
    color: '#787878',
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '10%',
    textDecorationLine: 'underline'
  }
});

