import { Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
function Sidebar(){
    const links=[{name:'🏡  Home',to:'/'},{name:'📋  Projects',to:'/projects'},{name:'🧩 Extensions',to:'/extensions'},{name:'📞  Contact',to:'/contact'}]
    return <Box display={['none','none','block']} w={'250px'}>
    <ul style={{position:'fixed',fontSize:'20px',
      
    }}>
      {links.map(link=> 
      <NavLink 
        className={`link ${(isActive)=>isActive ? "active" : null}`}  
        to={link.to}>
<li>{link.name}</li>
</NavLink>)}
    </ul>
  </Box>
}
export default Sidebar;