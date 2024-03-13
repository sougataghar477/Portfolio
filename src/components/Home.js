import { Link } from "react-router-dom";
import { Heading,Text,Button,Image } from "@chakra-ui/react";
function Home(){
    return <>
    <Heading textAlign={'center'}>Welcome to my website!</Heading>
    <Image mt={4} src='/hello.jpeg'/>
    <Text mt={4} fontSize={20} mx={'auto'} lineHeight={1.6} fontWeight={'bold'} fontStyle={'italic'}>
        My name is Sougata Ghar and I am a front end web developer who is proficient in HTML, CSS, Javascript,React,Vue,Next JS,Nuxt JS,Express JS and MongoDB. 
    </Text>
    
    <Link to={'/projects'}><Button w={'100%'} mt={4}>Check out my projects ➡️</Button></Link>
    <Link to={'/contact'}><Button w={'100%'}  mt={4}>Contact Me ☎️</Button></Link>
    </>
}
export default Home;