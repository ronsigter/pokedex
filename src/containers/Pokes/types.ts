import { Poke } from 'types'

export type LoaderProps = {
  items: Poke[]
  isLoading: boolean
  onClickCard: (poke: Poke) => void
}
