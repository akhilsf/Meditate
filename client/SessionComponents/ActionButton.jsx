import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SessionContext from '../Contexts.jsx';
import SoundPlayer from './SoundPlayer.jsx';

export default function ActionButton({ resetTimer }) {
  const {
    inMeditation, setInMeditation,
    time, setTime,
    inSession, setInSession,
    sessionFinished, setSessionFinished
  } = useContext(SessionContext);

  const sessionAction = () => {
    if (sessionFinished) {
      setInMeditation(false);
      setInSession(false);
      setSessionFinished(false);
      resetTimer();
    } else if (!inSession) {
      setInSession(!inSession);
      setInMeditation(!inMeditation)
      SoundPlayer();
    } else {
      setInMeditation(!inMeditation);
    }
  };

  return (
    <View style={style(inMeditation).container}>
      <TouchableOpacity style={style(inMeditation).button} onPress={sessionAction}>
        <Text style={style(inMeditation).actionText}>
          {!inSession ? 'START' : inMeditation ? 'PAUSE' : sessionFinished ? 'FINISH' : 'RESUME'}
        </Text>
      </TouchableOpacity>
      <Text
        style={style(inMeditation).finishText}
        onPress={() => {
          setInMeditation(false);
          setInSession(false);
          setSessionFinished(false);
          resetTimer();
        }}
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

