import { Box, Center, Grid, GridItem } from '@chakra-ui/react'
import { LoginLayout } from './types'

const loginLayout: React.FC<LoginLayout> = ({ children }) => {
  return (
    <Grid
      templateRows='1fr'
      templateAreas='
        "content"
        '
      h='100vh'
      w='100vw'
      overflow='hidden'
    >
      <GridItem as='main' gridArea='content' overflowY='scroll'>
        <Center h='100%'>
          <Box maxW='1280px' w='100%' h='100%'>
            {children}
          </Box>
        </Center>
      </GridItem>
    </Grid>
  )
}

export default loginLayout
