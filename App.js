/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SigninScreen from './src/vistas/SigninScreen';

const App = () => {  
  return (
    <SafeAreaView style={styles.root}>        
      <SigninScreen/>    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,    
  },  
});

export default App;
