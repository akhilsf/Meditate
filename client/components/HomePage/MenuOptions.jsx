import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function MenuOptions() {
  return (
    <View style={style.menu} >
      <View style={style.selectorContainer}>
        <Text style={style.text}>Time</Text>
        <Text style={style.text}>30 minutes</Text>
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
    flex: .5,
    flexDirection: 'column',
    bottom: '10%',
    justifyContent: 'space-around',
    padding: '5%',
    width: '80%',
    height: '20%',
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