import Periode from './Periode'
import Team from './Team'

export default class Zaalwacht implements Periode {
  constructor(public start: Date, public eind: Date, public team: Team) {}
}
