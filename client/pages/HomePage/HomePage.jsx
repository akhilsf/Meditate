import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from '../../SessionComponents/Timer.jsx';
import ActionButton from '../../SessionComponents/ActionButton.jsx';
import MenuOptions from './MenuOptions.jsx';
import SessionContext from '../../Contexts.jsx';

export default ({ navigation }) => {
  const { inSession, sessionFinished } = useContext(SessionContext);

  return (
    <View style={styles.container}>
      <Timer />
      {inSession ? null :
        sessionFinished ? null :
       <MenuOptions navigation={navigation} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#f6ede9',
    alignItems: 'center',
  }
});