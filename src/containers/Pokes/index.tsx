import { Box } from '@chakra-ui/react'
import useGetKantoPokemon from 'hooks/useGetKantoPokemon'
import { Poke } from 'types'
import Loader from './Loader'

const Pokes: React.FC = () => {
  const { pokes, loading } = useGetKantoPokemon()
  const onClickPokeCard = (poke: Poke): void => console.log(poke)

  return (
    <Box p={6}>
      <Loader items={pokes} isLoading={loading} onClickCard={onClickPokeCard} />
    </Box>
  )
}

export default Pokes
