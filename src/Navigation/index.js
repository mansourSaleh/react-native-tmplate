import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './StackNav';
import {Icon} from 'react-native-magnus';
import TabNav from './TabNav';

const index = () => {
  return (
    <NavigationContainer>
      {/* <StackNav /> */}
      <TabNav />
    </NavigationContainer>
  );
};

export default index;
