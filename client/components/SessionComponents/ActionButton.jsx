import React, { useState, useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SessionContext from '../Contexts.jsx';


export default function ActionButton() {
  const { inSession, setSession, time, setTime } = useContext(SessionContext);

  const sessionAction = () => {
    console.log(inSession);
    const changeSession = new Promise((resolve, reject) => {
      resolve(setSession(!inSession))
    });

    changeSession
      .then(console.log(inSession))
      .catch((error) => {
        console.log(error);
      })

    // if (inSession) {
    //   setInterval(() => {
    //     setTime(time - 1);
    //   }, 1000);
    // } else {
    //   setTime(time);
    // }
  };

  return (
    <View style={style.wrapper}>
      <TouchableOpacity style={style.button} onPress={sessionAction}>
        <Text style={style.text}>
          {inSession ? 'PAUSE' : 'START'}
        </Text>
      </TouchableOpacity>
    </View>
  )
};

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    height: 130,
    backgroundColor: '#D8E2DC',
    borderWidth: 10,
    borderRadius: 100,
    borderColor: '#ECE4DB',
  },
  text: {
    fontSize: 30,
    fontWeight: '600',
    color: '#787878',
  }
});

