import './App.css';
import { 
  Container,
  Flex,
  Box, 
  Button,Heading,useColorMode } from '@chakra-ui/react';
import { SunIcon,MoonIcon } from '@chakra-ui/icons';
  import { BrowserRouter as Router, Routes, Route, NavLink   } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
const links=[{name:'🏡  Home',to:'/'},{name:'📋  Projects',to:'/projects'},{name:'📞  Contact',to:'/contact'}]
function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (

      <Router>
        <Container maxW='90ch'>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Heading>Sougata Ghar</Heading>
        <Button onClick={toggleColorMode} 
        mt={4}  
         >{colorMode==='light'?<><SunIcon  />  </>:<><MoonIcon  />  </>}</Button>

      </Flex>
      
      <Flex gap={16} mt={'16px'}>
        <Box display={['none','block']} w={'250px'}>
          <ul style={{position:'fixed'}}>
            {links.map(link=> 
            <NavLink   className={`link ${(isActive)=>isActive ? "active" : null}`}  
            to={link.to}><li style={{listStyleType:'none',fontWeight:'bold',width:'250px'}}>{link.name}</li></NavLink>)}
          </ul>
        </Box>
        <Box flex='1'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
           
        </Routes>
  </Box>
      </Flex>
 <footer>©{new Date().getFullYear()}</footer>
        </Container>

      </Router>
     
  );
}

export default App;
