import { Flex, Card, Button, CardBody, Link, Stack, Heading, Text } from "@chakra-ui/react";
function Extensions(){
const extensions=[
    { heading: 'Instagram image copier', text: 'An addon that copies image or its url on a click.', link: 'https://image-copier-website.vercel.app', github: 'https://github.com/sougataghar477/instagram-image-url-copier' },
    { heading: 'Twitch brightness controller', text: 'Controls brightness of the video player of a twitch stream', link: 'https://addons.mozilla.org/en-US/firefox/addon/twitch-brightness-reducer/', github: 'https://github.com/sougataghar477/twitch-brightness-reducer' },
    { heading: 'Copy Message extension for 7TV', text: 'Copies message in twitch chat if you have 7TV extension', link: 'https://addons.mozilla.org/en-US/firefox/addon/message-copier-for-7tv/', github: 'https://github.com/sougataghar477/7TV-message-copier-for-twitch' },
]
return <Flex wrap={'wrap'} gap={8} p={2}>
        <Heading>My Extensions</Heading>
        {extensions.map((extension, index) => (
            <Card key={index} flexGrow={1} >
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{extension.heading}</Heading>
                        <Text>{extension.text}</Text>
                        <Flex gap={4}>
                            <Link href={extension.link} isExternal>
                                <Button>Check Out</Button>
                            </Link>
                            {extension?.github && <Link href={extension.github}>
                                <Button>Github</Button>
                            </Link>}


                        </Flex>
                    </Stack>
                </CardBody>
            </Card>
        ))}

    </Flex>
}
export default Extensions;