import { Box, Flex, Image, Text, Stack } from '@chakra-ui/react'
import { typeColor } from 'utils/typeColor'
import { PokeCardProps } from './types'

const PokeCard: React.FC<PokeCardProps> = ({ poke }) => {
  const color = typeColor(poke?.types?.[0].type.name || null)

  return (
    <Flex
      bgColor={`${color}`}
      p={4}
      borderRadius='2xl'
      h='100%'
      position='relative'
      overflow='hidden'
      transition='all 0.3s ease-out'
      top='0px'
      cursor='pointer'
      _hover={{
        transition: 'all 0.2s ease-out',
        boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.54)',
        top: '-4px',
      }}
    >
      <Stack spacing={2} w='100%'>
        <Flex>
          <Text textTransform='capitalize' fontWeight='bold' color='white'>
            {poke?.name}
          </Text>
          <Text flex='1' textAlign='right'>
            #{poke?.order}
          </Text>
        </Flex>
        <Stack spacing={2}>
          {poke?.types.map(({ type }, key) => (
            <Box
              key={key}
              bgColor={color}
              bgGradient='linear(rgba(9, 14, 26, 0.2), rgba(9, 14, 26, 0.2))'
              px={3}
              py={0.5}
              w='min-content'
              borderRadius='2xl'
            >
              <Text
                as='span'
                w='auto'
                textTransform='capitalize'
                color='white'
                fontSize='sm'
                textAlign='center'
              >
                {type?.name}
              </Text>
            </Box>
          ))}
        </Stack>
      </Stack>
      <Box position='absolute' bottom='-2.5rem' right='-2rem'>
        <Image
          src='/images/pokeball.png'
          boxSize='8rem'
          filter='opacity(20%)'
          transform='rotate(-10deg)'
        />
      </Box>
      <Box position='absolute' bottom='0.5rem' right='0.5rem'>
        <Image src={poke.imageUrl} boxSize='4rem' />
      </Box>
    </Flex>
  )
}

export default PokeCard
