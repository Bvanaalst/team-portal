import Persoon from './Persoon'
import Team from './Team'

export default class Wedstrijd {
  scheidsrechter: Persoon | null = null
  tellers: Persoon[] = []

  constructor(
    public code: string,
    public thuisTeam: Team,
    public uitTeam: Team,
  ) {}
}
