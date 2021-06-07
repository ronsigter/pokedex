import {
  Button,
  Drawer as Sidedrawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
} from '@chakra-ui/react'
import { DrawerProps } from './types'

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <Sidedrawer
      isOpen={isOpen}
      placement='bottom'
      onClose={onClose}
      size='full'
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create your account</DrawerHeader>

        <DrawerBody>
          <Input placeholder='Type here...' />
        </DrawerBody>

        <DrawerFooter>
          <Button variant='outline' mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme='blue'>Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Sidedrawer>
  )
}

export default Drawer
