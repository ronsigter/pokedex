import { Box, Button, Center, Text, useDisclosure } from '@chakra-ui/react'
import useGetKantoPokemon from 'hooks/useGetKantoPokemon'
import { useEffect, useState } from 'react'
import { Poke } from 'types'
import Drawer from './Drawer'
import Loader from './Loader'

const Pokes: React.FC = () => {
  const [offset, setOffset] = useState(1)
  const { getPokes, pokes, loading } = useGetKantoPokemon()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onClickPokeCard = (poke: Poke): void => {
    console.log(poke)
    onOpen()
  }

  useEffect(() => {
    getPokes(0)
  }, [])

  return (
    <Box p={6}>
      <Text>POKEDEX</Text>
      <Loader items={pokes} isLoading={loading} onClickCard={onClickPokeCard} />
      <Box pt={8}>
        {!loading && (
          <Center>
            <Button
              onClick={() => {
                getPokes(offset * 20)
                setOffset(offset + 1)
              }}
            >
              Load More Pokes
            </Button>
          </Center>
        )}
      </Box>
      <Drawer isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default Pokes
