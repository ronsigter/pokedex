import { Box, Flex, Progress, Stack, Text } from '@chakra-ui/react'
import { StatsProps } from './types'

const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <Stack spacing={4}>
      {stats?.map((item, key) => (
        <Flex key={key} alignItems='center'>
          <Box w={{ sm: '40%', md: '30%' }}>
            <Text textTransform='capitalize'>{item?.stat.name}</Text>
          </Box>
          <Flex flex='1' alignItems='center'>
            <Text as='span' w={{ sm: '20%', md: '10%' }}>
              {item?.base_stat}
            </Text>
            <Progress
              flex='1'
              value={item?.base_stat}
              max={255}
              borderRadius='2xl'
            />
          </Flex>
        </Flex>
      ))}
    </Stack>
  )
}

export default Stats
