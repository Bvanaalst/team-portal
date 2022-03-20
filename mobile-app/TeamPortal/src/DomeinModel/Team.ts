import Persoon from './Persoon'

export default class Team {
  spelers: Persoon[] = []

  constructor(public id: string, public naam: string) {}
}
