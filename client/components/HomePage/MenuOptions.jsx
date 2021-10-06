import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function MenuOptions() {
  return (
    <View
      style={style.menu}
    >
    </View>
  )
};

const style = StyleSheet.create({
  menu: {
    // justifyContent: 'center',
    width: 260,
    height: 180,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  }
})