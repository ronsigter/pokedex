import { Box, SimpleGrid } from '@chakra-ui/react'
import Cards from 'components/Cards'
import { LoaderProps } from './types'

const Loader: React.FC<LoaderProps> = ({ items, isLoading, onClickCard }) => {
  if (isLoading) {
    return (
      <SimpleGrid
        columns={{
          sm: 2,
          md: 3,
          lg: 5,
        }}
        spacing='1.5rem'
      >
        {Array.from(Array(20)).map((poke, key) => (
          <Box key={key} data-testid='loading-poke-card'>
            <Cards.PokeCard poke={poke} isLoading={true} />
          </Box>
        ))}
      </SimpleGrid>
    )
  } else {
    return (
      <SimpleGrid
        columns={{
          sm: 2,
          md: 3,
          lg: 5,
        }}
        spacing={8}
      >
        {items.map((poke, key) => (
          <Box
            key={`${key}-${poke.name}`}
            data-testid='loaded-poke-card'
            onClick={() => onClickCard(poke)}
          >
            <Cards.PokeCard poke={poke} isLoading={false} />
          </Box>
        ))}
      </SimpleGrid>
    )
  }
}

export default Loader
