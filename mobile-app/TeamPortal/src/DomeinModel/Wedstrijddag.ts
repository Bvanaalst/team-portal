import Bardienst from './Bardienst'
import Bhvdienst from './Bhvdienst'
import Wedstrijd from './Wedstrijd'
import Zaalwacht from './Zaalwacht'

export class Wedstrijddag {
  wedstrijden: Wedstrijd[] = []
  bardiensten: Bardienst[] = []
  zaalwachten: Zaalwacht[] = []
  bhvdiensten: Bhvdienst[] = []

  constructor(public date: Date) {}
}
