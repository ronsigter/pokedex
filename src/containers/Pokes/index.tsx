import { Box, Text, useDisclosure } from '@chakra-ui/react'
import useGetKantoPokemon from 'hooks/useGetKantoPokemon'
import { Poke } from 'types'
import Drawer from './Drawer'
import Loader from './Loader'

const Pokes: React.FC = () => {
  const { pokes, loading } = useGetKantoPokemon()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onClickPokeCard = (poke: Poke): void => {
    console.log(poke)
    onOpen()
  }

  return (
    <Box p={6}>
      <Text>POKEDEX</Text>
      <Loader items={pokes} isLoading={loading} onClickCard={onClickPokeCard} />
      <Drawer isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default Pokes
