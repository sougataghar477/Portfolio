import { Box } from "@chakra-ui/react";
import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
function Content(){
    return <Box flex='1'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />  
    </Routes>
</Box>
}
export default Content;