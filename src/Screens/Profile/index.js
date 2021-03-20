import React from 'react'
import { View, Text, Button } from 'react-native'
import { Icon } from 'react-native-magnus'


const index = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Button title="Go" onPress={() => navigation.navigate('Home')} />
        <Icon name="like1" color="blue700"  />
      </View>
    )
}

export default index
