import {
  Drawer as Sidedrawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Container,
  Box,
  Grid,
  GridItem,
  Stack,
  Text,
  Image,
  Center,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react'
import Stats from 'containers/Stats'
import { typeColor } from 'utils/typeColor'
import { DrawerProps } from './types'

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, item }) => {
  const color = typeColor(item?.types?.[0].type.name || null)

  return (
    <Sidedrawer
      isOpen={isOpen}
      placement='bottom'
      onClose={onClose}
      size='full'
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton zIndex='overlay' top={24} right={8} />
        <DrawerBody p='0'>
          <Container maxW='container.sm' h='100%' p='0'>
            <Grid h='100%' templateRows='60vh 40vh'>
              <GridItem
                rowSpan={1}
                bgColor={color}
                px={8}
                pt={20}
                pos='relative'
                overflow='hidden'
              >
                <Text
                  fontWeight='bold'
                  fontSize='4xl'
                  color='white'
                  textTransform='capitalize'
                >
                  {item?.name}
                </Text>
                <Stack isInline spacing={2} pt={2}>
                  {item?.types.map(({ type }, key) => (
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
                <Box position='absolute' bottom='-2.5rem' right='-4rem'>
                  <Image
                    src='/images/pokeball.png'
                    boxSize='18rem'
                    filter='opacity(20%)'
                    transform='rotate(-20deg)'
                  />
                </Box>
                <Center
                  position='absolute'
                  bottom='0.5rem'
                  right='0'
                  left='0'
                  zIndex='overlay'
                >
                  <Image
                    src={item?.imageUrl}
                    boxSize='18rem'
                    fallbackSrc='/images/pokeball.png'
                  />
                </Center>
              </GridItem>

              <GridItem rowSpan={1} pos='relative'>
                <Box
                  position='absolute'
                  left='0'
                  right='0'
                  top='-3rem'
                  h='3rem'
                  bgColor='white'
                  borderTopRightRadius='4rem'
                  borderTopLeftRadius='4rem'
                />
                <Tabs isFitted px={4}>
                  <TabList>
                    <Tab>About</Tab>
                    <Tab>Stats</Tab>
                    <Tab>Evolution</Tab>
                    <Tab>Moves</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                      <Stats stats={item?.stats} />
                    </TabPanel>
                    <TabPanel>
                      <p>three!</p>
                    </TabPanel>
                    <TabPanel>
                      <p>four!</p>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </GridItem>
            </Grid>
          </Container>
        </DrawerBody>
      </DrawerContent>
    </Sidedrawer>
  )
}

export default Drawer
