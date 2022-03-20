import { Agenda, AgendaEntry, AgendaSchedule } from 'react-native-calendars'
import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import Bardienst from '../DomeinModel/Bardienst'
import Bhvdienst from '../DomeinModel/Bhvdienst'
import Persoon from '../DomeinModel/Persoon'
import React from 'react'
import Team from '../DomeinModel/Team'
import Wedstrijd from '../DomeinModel/Wedstrijd'
import { Wedstrijddag } from '../DomeinModel/Wedstrijddag'
import Zaalwacht from '../DomeinModel/Zaalwacht'

const toDateString = (date: Date): string => {
  return date.toISOString().split('T')[0]
}

const convert = (dag: Wedstrijddag, i: number): AgendaEntry => {
  return {
    name: `${i}) De dag is ${toDateString(dag.date)}`,
    height: 10,
    day: toDateString(dag.date),
  }
}

const renderItem = (reservation: AgendaEntry) => {
  return (
    <TouchableOpacity onPress={() => Alert.alert(reservation.name)}>
      <View style={styles.item}>
        <Text>{reservation.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const renderEmptyDate = () => {
  return (
    <View style={styles.emptyDate}>
      <Text>This is empty date!</Text>
    </View>
  )
}

const rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
  return r1.name !== r2.name
}

const MijnOverzicht = () => {
  let items: AgendaSchedule = {}

  const skcHeren1 = new Team('SKC HS 1', 'Heren 1')
  const skcHeren2 = new Team('SKC HS 2', 'Heren 2')
  const leythonHeren1 = new Team('Leython HS 1', 'Heren 1')
  const leythonHeren2 = new Team('Leython HS 2', 'Heren 2')

  const maartje = new Persoon(1, 'Maartje Kanaar')
  const jonathan = new Persoon(2, 'Jonathan Neuteboom')

  const dag1 = new Wedstrijddag(new Date('2022-03-05'))
  dag1.bardiensten = [new Bardienst(new Date(), new Date())]
  dag1.bardiensten[0].barmensen = [maartje, jonathan]

  const dag2 = new Wedstrijddag(new Date('2022-03-06'))
  dag2.wedstrijden = [
    new Wedstrijd('3000NKF', skcHeren1, leythonHeren1),
    new Wedstrijd('3000NKF', skcHeren2, leythonHeren2),
  ]

  const dag3 = new Wedstrijddag(new Date('2022-03-08'))
  dag3.zaalwachten = [
    new Zaalwacht(new Date(), new Date(), skcHeren1),
    new Zaalwacht(new Date(), new Date(), skcHeren2),
  ]
  dag3.bhvdiensten = [new Bhvdienst(new Date(), new Date(), maartje)]

  const wedstrijddagen = [dag1, dag2, dag3]
  wedstrijddagen.forEach((dag) => {
    items[toDateString(dag.date)] = [convert(dag, 1), convert(dag, 2)]
  })

  items['2022-03-07'] = []

  const { height } = Dimensions.get('screen')

  return (
    <View style={{ height }}>
      <Agenda
        items={items}
        selected={'2022-03-05'}
        current={'2022-03-05'}
        minDate={'2022-03-05'}
        maxDate={'2022-05-30'}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
        rowHasChanged={rowHasChanged}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    borderWidth: 1,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
})

export default MijnOverzicht
