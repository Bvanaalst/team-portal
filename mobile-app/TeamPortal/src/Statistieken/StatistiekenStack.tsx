import React from 'react'
import Statistieken from './Statistieken'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

type StatistiekenStackParamList = {
  Statistieken: undefined
}

const Stack = createNativeStackNavigator<StatistiekenStackParamList>()

const StatistiekenStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Statistieken" component={Statistieken} />
  </Stack.Navigator>
)

export default StatistiekenStack
