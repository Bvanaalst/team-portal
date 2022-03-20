import MijnOverzicht from './MijnOverzicht'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

type MijnOverzichtStackParamList = {
  MijnOverzicht: undefined
}

const Stack = createNativeStackNavigator<MijnOverzichtStackParamList>()

const MijnOverzichtStack = () => (
  <Stack.Navigator initialRouteName="MijnOverzicht">
    <Stack.Screen name="MijnOverzicht" component={MijnOverzicht} />
  </Stack.Navigator>
)

export default MijnOverzichtStack

export type { MijnOverzichtStackParamList }
