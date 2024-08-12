import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';
import styles from './src/style';
import TodoApp from './src/TodoApp';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <TodoApp />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
