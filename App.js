/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import OtpValidate from './app/views/otpvalidate';


const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        
          <OtpValidate />
        
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
