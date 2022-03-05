import { Text, View } from 'react-native'

import { MijnOverzichtStackParamList } from './MijnOverzichtStack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'

type Props = NativeStackScreenProps<
  MijnOverzichtStackParamList,
  'MijnOverzicht'
>

const MijnOverzicht = ({ route }: Props) => (
  <View>
    <Text>{route.name}</Text>
    <Text>Nog meer text</Text>
  </View>
)

export default MijnOverzicht
