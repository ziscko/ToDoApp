import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import styles from './src/style';
import TodoApp from './src/TodoApp';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <TodoApp />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
