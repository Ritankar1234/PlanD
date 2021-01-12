import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import LogInScreen from '../Screens/LogInScreen';
import SignUpScreen  from '../Screens/SignUpScreen';




export const AppStackNavigator = createStackNavigator({
  LogIn : {
    screen : LogInScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  SignUp : {
    screen : SignUpScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'LogIn'
  }
)