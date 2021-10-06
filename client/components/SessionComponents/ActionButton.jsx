import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ActionButton() {
  return (
    <View>
      <TouchableOpacity
        style={style.button}
      >
        <Text
          style={style.text}
        >
        BEGIN
        </Text>
      </TouchableOpacity>
    </View>
  )
};

const style = StyleSheet.create({
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

