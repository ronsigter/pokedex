import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import { PokeCardProps } from './types'

const PokeCard: React.FC<PokeCardProps> = ({ poke }) => {
  return (
    <Flex bgColor='red.100' p={4} borderRadius='2xl'>
      <Box mr={4}>
        <Text textTransform='capitalize'>{poke?.name}</Text>
        {poke?.types.map(({ type }, key) => (
          <Text
            key={key}
            textTransform='capitalize'
            px={3}
            py={1}
            bgColor='red.300'
            textAlign='left'
            mb={poke.types.length - 1 !== key ? 2 : 0}
            borderRadius='2xl'
          >
            {type?.name}
          </Text>
        ))}
      </Box>
      <Center h='100%'>
        <Image src={poke.imageUrl} boxSize='4rem' />
      </Center>
    </Flex>
  )
}

export default PokeCard
