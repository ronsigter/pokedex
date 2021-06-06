import { Box } from '@chakra-ui/react'
import { LoginLayout } from 'containers/Layouts'
import Pokes from 'containers/Pokes'
import { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Pokedex</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LoginLayout>
        <Pokes />
      </LoginLayout>
    </Box>
  )
}

export default Home
