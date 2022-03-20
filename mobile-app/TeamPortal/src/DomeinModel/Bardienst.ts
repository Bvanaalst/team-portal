import Periode from './Periode'
import Persoon from './Persoon'

export default class Bardienst implements Periode {
  barmensen: Persoon[] = []

  constructor(public start: Date, public eind: Date) {}
}
