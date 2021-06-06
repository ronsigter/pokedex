import { Box, Flex } from '@chakra-ui/react'
import Cards from 'components/Cards'
import useGetKantoPokemon from 'hooks/useGetKantoPokemon'

const Pokes: React.FC = () => {
  const { pokes, loading } = useGetKantoPokemon()

  return (
    <Flex wrap='wrap' p={4}>
      {pokes.map((poke, key) => (
        <Box key={key} m={4}>
          <Cards.PokeCard poke={poke} />
        </Box>
      ))}
    </Flex>
  )
}

export default Pokes
