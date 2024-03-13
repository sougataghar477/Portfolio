import { Heading,Link,Text,Box,Image } from "@chakra-ui/react"
function Contact(){
    return <>
        <Image src="/contact.webp"/>
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