import { Text, View } from 'react-native'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { TelFluitBeschikbaarheidStackParamList } from './TelFluitBeschikbaarheidStack'

type Props = NativeStackScreenProps<
  TelFluitBeschikbaarheidStackParamList,
  'TelFluitBeschikbaarheid'
>

const TelFluitBeschikbaarheid = ({ route }: Props) => (
  <View>
    <Text>TelFluitBeschikbaarheid: {route.name}</Text>
  </View>
)

export default TelFluitBeschikbaarheid
