import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SessionContext from '../../Contexts.jsx';

import DateTimePicker from '@react-native-community/datetimepicker';
import {TimePicker} from 'react-native-simple-time-picker';


export default ({ navigation }) => {
  const {
    time, setTime,
  } = useContext(SessionContext);

  const [timer, setTimer] = useState(time);
  const [hours, setHours] = useState(Math.floor(time / 3600));
  const [minutes, setMinutes] = useState((time / 60) - (Math.floor(time / 3600) * 60));

  const onChange = ({ hours, minutes }) => {
    setHours(hours);
    setMinutes(minutes);
  };

  const saveTime = () => {
    setTime(hours * 3600 + minutes * 60);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text
        style={styles.back}
        onPress={() => navigation.navigate('Home')}
      > &#x2039; Back </Text>
      <TimePicker
        style={styles.timeSelector}
        value={{ hours, minutes }}
        hoursUnit="Hours"
        minutesUnit="Minutes"
        onChange={onChange}
      />
      {/* <DateTimePicker
        value={date}
        mode="countdown"
        display="default"
        onChange={onChange}
        style={styles.timeSelector}
      /> */}
      <TouchableOpacity style={styles.button} onPress={saveTime}>
        <Text style={styles.actionText}>
          SAVE
          </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#787878',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6ede9',
  },
  timeSelector: {
    width: '80%',
    backgroundColor: '#f6ede9',
  },
  back: {
    position: 'absolute',
    color: '#787878',
    top: '8%',
    left: '5%',
    fontSize: 18,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
    marginTop: '10%',
    height: 75,
    borderWidth: 10,
    borderRadius: 100,
    borderColor: '#ecdcdb',
  },
  actionText: {
    margin: 10,
    fontSize: 30,
    fontWeight: '600',
    color: '#787878',
  },
});