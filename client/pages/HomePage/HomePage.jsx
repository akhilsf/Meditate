import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from '../../SessionComponents/Timer.jsx';
import ActionButton from '../../SessionComponents/ActionButton.jsx';
import MenuOptions from './MenuOptions.jsx';
import SessionContext from '../../Contexts.jsx';

export default ({ navigation }) => {
  const { inSession } = useContext(SessionContext);

  return (
    <View style={styles.container}>
      <Timer />
      {inSession ? null :
       < MenuOptions navigation={navigation} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'rgba(255, 229, 217, 0.33)',
    alignItems: 'center',
  }
});