import Periode from './Periode'
import Persoon from './Persoon'

export default class Bhvdienst implements Periode {
  constructor(public start: Date, public eind: Date, public bhver: Persoon) {}
}
