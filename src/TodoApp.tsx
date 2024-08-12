import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';

function TodoApp(): React.JSX.Element {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>To Do App</Text>
    </View>
  );
}

export default TodoApp;
