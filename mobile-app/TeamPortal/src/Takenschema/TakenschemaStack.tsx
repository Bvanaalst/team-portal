import React from 'react'
import Takenschema from './Takenschema'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

type TakenschemaStackParamList = {
  Takenschema: undefined
}

const Stack = createNativeStackNavigator<TakenschemaStackParamList>()

const TakenschemaStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Takenschema" component={Takenschema} />
  </Stack.Navigator>
)

export default TakenschemaStack
