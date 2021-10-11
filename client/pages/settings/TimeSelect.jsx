import React, { useState, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TimePicker from 'react-native-wheel-time-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const MILLISECONDS_PER_MINUTE = 60 * 1000;
const MILLISECONDS_PER_HOUR = 60 * 60 * 1000;
const MILLISECONDS_PER_DAY = 24 * MILLISECONDS_PER_HOUR;

export default () => {
  const [timeValue, setTimeValue] = useState(Date.now() % MILLISECONDS_PER_DAY);
  const [hour, min] = useMemo(() => {
    return [
      Math.floor(timeValue / MILLISECONDS_PER_HOUR),
      Math.floor((timeValue % MILLISECONDS_PER_HOUR) / MILLISECONDS_PER_MINUTE),
      Math.floor((timeValue % MILLISECONDS_PER_MINUTE) / 1000),
    ];
  }, [timeValue]);

  return (
    <View style={styles.container}>
      <TimePicker
        value={timeValue}
        wheelProps={{
          wheelHeight: 100,
          itemHeight: 15,
        }}
        onChange={(newValue) => setTimeValue(newValue)}
      />
      <Text style = {styles.timeValue}>
        {`${hour < 10 ? '0' : ''}${hour}:${min < 10 ? '0' : ''}${min}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#787878',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 229, 217, 0.33)',
  },
  timeValue: {
    marginVertical: 40,
    color: '#787878',
    fontSize: 43,
  },
});