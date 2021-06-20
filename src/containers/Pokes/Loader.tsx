import {
  Box,
  Center,
  Image,
  keyframes,
  SimpleGrid,
  Skeleton,
  Text,
  usePrefersReducedMotion,
} from '@chakra-ui/react'
import { Waypoint } from 'react-waypoint'
import Cards from 'components/Cards'
import { LoaderProps } from './types'

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Loader: React.FC<LoaderProps> = ({
  items,
  isLoading,
  onClickCard,
  fetchMore,
}) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 2s linear`

  return (
    <>
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
            {key === items.length - 1 && <Waypoint onEnter={fetchMore} />}
          </Box>
        ))}

        {/* Loading UI on First load*/}
        {isLoading &&
          items.length === 0 &&
          Array.from(Array(20)).map((poke, key) => (
            <Skeleton key={key} isLoaded={!isLoading}>
              <Box data-testid='loading-poke-card' height='8rem'>
                <Cards.PokeCard poke={poke} isLoading={true} />
              </Box>
            </Skeleton>
          ))}
      </SimpleGrid>
      {/* Loading UI on every fetch */}
      {/* {isLoading && items.length > 0 && ( */}
      <Center flexDirection='column' pt={20} bgColor='white'>
        <Image
          animation={animation}
          boxSize='4rem'
          src='/images/pokeball.png'
        />
        <Text>Loading...</Text>
      </Center>
      {/* )} */}
    </>
  )
}

export default Loader
