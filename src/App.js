import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, } from 'react-native';
import Navigation from './Navigation';
import {Icon, ThemeProvider} from 'react-native-magnus';
import {DataProvider, DataConsumer} from './Context';
import './i18n'

function App() {
  return (
    <DataProvider>
      <DataConsumer>
        {state =>
          state.loading || state.gettingUserInfo ? (
            <ThemeProvider>
              <View>
                <Text>Loading ddd</Text>
              </View>
            </ThemeProvider>
          ) : (
            <ThemeProvider>
              <Navigation />
            </ThemeProvider>
          )
        }
      </DataConsumer>
    </DataProvider>
  );
}

export default App;
