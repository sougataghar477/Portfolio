import { 
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react';
  import { NavLink } from 'react-router-dom';
function MobileNavigationBar({isOpen,onClose}){
const links=[{name:'🏡  Home',to:'/'},{name:'📋  Projects',to:'/projects'},{name:'📞  Contact',to:'/contact'}]
    return  <Drawer
    isOpen={isOpen}
    placement='right'
    onClose={onClose}>
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerBody mt={8}>
      {links.map(link=> 
    <NavLink 
    onClick={onClose}
    className={`link ${(isActive)=>isActive ? "active" : null}`}  
    to={link.to}>
      <li>{link.name}</li>
      </NavLink>)}
      </DrawerBody>
    </DrawerContent>
  </Drawer>
}
export default MobileNavigationBar;