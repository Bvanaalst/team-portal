import {
  IconDefinition,
  faCalendarCheck,
  faChartColumn,
  faHouseUser,
  faListCheck,
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import MijnOverzichtStack from './MijnOverzicht/MijnOverzichtStack'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import StatistiekenStack from './Statistieken/StatistiekenStack'
import TakenschemaStack from './Takenschema/TakenschemaStack'
import TelFluitBeschikbaarheid from './TelFluitBeschikbaarheid/TelFluitBeschikbaarheid'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

type RootTabParamList = {
  MijnOverzichtStack: undefined
  TelFluitBeschikbaarheidStack: undefined
  TakenschemaStack: undefined
  StatistiekenStack: undefined
}

type TabDetails = {
  name: string
  icon: IconDefinition
}

const Tab = createBottomTabNavigator<RootTabParamList>()

const icons = new Map<keyof RootTabParamList, TabDetails>([
  [
    'MijnOverzichtStack',
    {
      name: 'Mijn overzicht',
      icon: faHouseUser,
    },
  ],
  ['StatistiekenStack', { name: 'Statistieken', icon: faChartColumn }],
  ['TakenschemaStack', { name: 'Takenschema', icon: faListCheck }],
  [
    'TelFluitBeschikbaarheidStack',
    { name: 'Tellen en Fluiten', icon: faCalendarCheck },
  ],
])

const getIcon = (tabName: keyof RootTabParamList): IconDefinition =>
  icons.get(tabName)!.icon

const getTitle = (tabName: keyof RootTabParamList): string =>
  icons.get(tabName)!.name

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => <FontAwesomeIcon icon={getIcon(route.name)} />,
          title: getTitle(route.name),
        })}>
        <Tab.Screen name="MijnOverzichtStack" component={MijnOverzichtStack} />
        <Tab.Screen
          name="TelFluitBeschikbaarheidStack"
          component={TelFluitBeschikbaarheid}
        />
        <Tab.Screen name="TakenschemaStack" component={TakenschemaStack} />
        <Tab.Screen name="StatistiekenStack" component={StatistiekenStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

export type { RootTabParamList }
