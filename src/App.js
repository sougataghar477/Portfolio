import './App.css';
import { 
  Container,
  Flex,
  Box,Link
} from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Extensions from './components/Extensions';
import Contact from './components/Contact';
import Header from './components/Header';
function App() {
  return (
      <Router>
        <Container maxW='90ch'>
      <Header/>
      <Flex gap={16}>
        <Sidebar/>
        <Box flex='1'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/extensions" element={<Extensions />} />
          <Route path="/contact" element={<Contact />} />
           
        </Routes>
  </Box>
      </Flex>
 <footer><Link isExternal mr={3} href='https://github.com/sougataghar477/Portfolio'>Github</Link>©{new Date().getFullYear()}</footer>
        </Container>
      </Router>
  );
}

export default App;
