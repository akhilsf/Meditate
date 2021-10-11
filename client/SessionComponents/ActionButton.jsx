import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SessionContext from '../Contexts.jsx';


export default function ActionButton() {
  const { inMeditation, setInMeditation, time, setTime, inSession, setInSession } = useContext(SessionContext);
  const [buttonStyle, setButtonStyle] = useState('#DBE3EC');

  const sessionAction = () => {
    if (!inSession) {
      setInSession(!inSession);
      setInMeditation(!inMeditation)
    } else {
      setInMeditation(!inMeditation);
    }
  };


  return (
    <View style={style(inMeditation).container}>
      <TouchableOpacity style={style(inMeditation).button} onPress={sessionAction}>
        <Text style={style(inMeditation).text}>
          {!inSession ? 'START' : inMeditation ? 'PAUSE' : 'RESUME'}
        </Text>
      </TouchableOpacity>
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
  text: {
    margin: 10,
    fontSize: 30,
    fontWeight: '600',
    color: '#787878',
  }
});

