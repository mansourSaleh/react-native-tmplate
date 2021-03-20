import  React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-magnus'

import Home from '../Screens/Home'
import Profile from '../Screens/Profile'


  
  
  const Stack = createStackNavigator();
  
  function index() {
      const defaultOptions = {
        headerShown: false, 
      }
    return (
      
        <Stack.Navigator  screenOptions={defaultOptions}>
          {/* <Stack.Screen name="Home" component={Home} /> */}
        </Stack.Navigator>
    );
  }
  

export default index
