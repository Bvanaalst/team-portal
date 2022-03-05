import React from 'react'
import TelFluitBeschikbaarheid from './TelFluitBeschikbaarheid'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

type TelFluitBeschikbaarheidStackParamList = {
  TelFluitBeschikbaarheid: undefined
}

const Stack =
  createNativeStackNavigator<TelFluitBeschikbaarheidStackParamList>()

const TelFluitBeschikbaarheidStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="TelFluitBeschikbaarheid"
      component={TelFluitBeschikbaarheid}
    />
  </Stack.Navigator>
)

export default TelFluitBeschikbaarheidStack
export type { TelFluitBeschikbaarheidStackParamList }
