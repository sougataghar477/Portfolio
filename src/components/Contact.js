import { Heading,Link,Text,Box,Image } from "@chakra-ui/react"
function Contact(){
    return <>
        <Image src="https://images.pexels.com/photos/1829198/pexels-photo-1829198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        <Box mt={8} lineHeight={1.6}>
        <Heading>Email 📬</Heading>
        <Text fontSize={20}><Link href='mailto:sougataghar47@gmail.com' isExternal> sougataghar47@gmail.com</Link></Text>     
        </Box>
        <Box mt={8} lineHeight={1.6}>
            <Heading>Phone Number 📲</Heading>
        <Text fontSize={20}><Link href='tel:+918777859897' isExternal>+91 8777859897</Link></Text>
        </Box>
    </>
}
export default Contact;