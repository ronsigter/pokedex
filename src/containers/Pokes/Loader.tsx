import { Box, SimpleGrid, Skeleton } from '@chakra-ui/react'
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
        spacing={4}
      >
        {Array.from(Array(20)).map((poke, key) => (
          <Skeleton key={key} isLoaded={!isLoading}>
            <Box data-testid='loading-poke-card' height='8rem'>
              <Cards.PokeCard poke={poke} isLoading={true} />
            </Box>
          </Skeleton>
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
        spacing={4}
      >
        {items.map((poke, key) => (
          <Box
            height='8rem'
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
