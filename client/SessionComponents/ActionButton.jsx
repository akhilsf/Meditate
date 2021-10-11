import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SessionContext from '../Contexts.jsx';


export default function ActionButton() {
  const { inSession, setSession, time, setTime } = useContext(SessionContext);
  const [buttonStyle, setButtonStyle] = useState('#DBE3EC');

  const sessionAction = () => {
    setSession(!inSession);
  };


  return (
    <View style={style(inSession).container}>
      <TouchableOpacity style={style(inSession).button} onPress={sessionAction}>
        <Text style={style(inSession).text}>
          {inSession ? 'PAUSE' : 'START'}
        </Text>
      </TouchableOpacity>
    </View>
  )
};

const style = (inSession) => StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%',
    width: '80%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 75,
    borderWidth: 10,
    borderRadius: 100,
    borderColor: inSession ? '#ECE4DB' : '#ecdcdb',
  },
  text: {
    fontSize: 30,
    fontWeight: '600',
    color: '#787878',
  }
});

