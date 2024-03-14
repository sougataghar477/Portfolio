import './App.css';
import { 
  Container,
  Flex,
  Box
} from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
function App() {
  return (
      <Router>
        <Container maxW='90ch'>
      <Header/>
      <Flex gap={16} mt={'16px'}>
        <Sidebar/>
        <Box flex='1'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
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
