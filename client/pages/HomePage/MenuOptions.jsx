import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SessionContext from '../../Contexts.jsx';


export default function MenuOptions({ navigation }) {
  const {
    time
  } = useContext(SessionContext);

  const sessionTime = () => {
    console.log('this is time', time);
    let tempTime = time;

    let sessionLength = ``;
    const hours = Math.floor(tempTime / 3600);
    let minutes = tempTime / 60;

    if (hours > 0) {
      sessionLength += `${hours} hours & `;
      minutes -= hours * 60;
    }
    sessionLength += `${minutes} minutes`;


    return sessionLength;
  }

  return (
    <View style={style.menu} >
      <View style={style.selectorContainer}>
        <Text style={style.text}>Time</Text>
        <Text style={style.text} onPress={() => navigation.navigate('TimeSelect')}>
          {sessionTime()} &#x203A;
        </Text>
      </View>
      <View style={style.line} />

      <View style={style.selectorContainer}>
        <Text style={style.text}>Intervals</Text>
        <Text style={style.text}>2</Text>
      </View>
      <View style={style.line} />

      <View style={style.selectorContainer}>
        <Text style={style.text}>Interval Sound</Text>
        <Text style={style.text}>Wood block</Text>
      </View>
      <View style={style.line} />

      <View style={style.selectorContainer}>
        <Text style={style.text}>Ambiance</Text>
        <Text style={style.text}>Wood fire</Text>
      </View>
      <View style={style.line} />
    </View>
  )
};

const style = StyleSheet.create({
  menu: {
    flex: .35,
    flexDirection: 'column',
    bottom: '10%',
    justifyContent: 'space-around',
    padding: '5%',
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  selectorContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    color: '#787878',
    fontWeight: '600'
  },
  line: {
    width: '100%',
    height: 0,
    borderWidth: 1,
    borderColor: '#D4D4D4',
  }
})