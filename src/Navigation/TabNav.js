import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import Profile from '../Screens/Profile'
import Home from '../Screens/Home'
import Contests from '../Screens/Contests'




const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Contests" component={Contests} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    )
}

export default TabNav
