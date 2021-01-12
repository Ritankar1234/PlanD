import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {AppStackNavigator} from './Components/AppStackNavigator';
import LogInScreen from './Screens/LogInScreen'

export default function App() {
  return (
    <View >
      <AppContainer></AppContainer>
    </View>
  );
}

const switchNavigator= createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  //Stack:{screen: AppStackNavigator}
  LogIn:{screen:LogInScreen},
  SignUpScreen:{screen:SignUpScreen}
})
const AppContainer=createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
