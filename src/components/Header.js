import { Flex,Heading,Button,ButtonGroup,useColorMode,useDisclosure } from "@chakra-ui/react";
import { SunIcon,MoonIcon,HamburgerIcon } from '@chakra-ui/icons';
import MobileNavigationBar from "./MobileNavigationBar";

function Header(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    return <Flex justifyContent={'space-between'} alignItems={'center'}>
    <Heading>Sougata Ghar</Heading>
    <ButtonGroup>
    <Button 
    onClick={toggleColorMode} 
    mt={4}  
     >{colorMode==='light'?<SunIcon/>:<MoonIcon/>}
    </Button>
    <Button display={['flex','flex','none']} onClick={onOpen} mt={4} ><HamburgerIcon/></Button>
  <MobileNavigationBar isOpen={isOpen} onClose={onClose}/>
    </ButtonGroup>
  </Flex>
}
export default Header;