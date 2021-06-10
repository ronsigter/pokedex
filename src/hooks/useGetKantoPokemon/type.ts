import { Poke } from 'types'

export type UseGetKantoPokemon = {
  pokes: Poke[]
  loading: boolean
  getPokes: (offset?: number) => void
}
