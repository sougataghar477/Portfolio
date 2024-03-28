import { Flex, Card, Button, CardBody, Link, Stack, Heading, Text } from "@chakra-ui/react";
function Projects() {
    let cards = [
        { heading: 'Kontrast Productions', text: 'Made the portfolio and contact sections', link: 'https://www.kontrastproduction.sk/#testimonials' },
        { heading: 'PersonalFinance redesign', text: 'A website I made with react', link: 'https://www.personalfinances.stage.iamthedev.eu/' },
        { heading: 'Rabbit API', text: 'An open source Rabbit Image API made with Next JS,Chakra UI,MongoDB and Firebase.', link: 'https://rabbit-api-two.vercel.app/', github: 'https://github.com/sougataghar477/rabbit-api' },
        {heading:'Todos App',text:'A full stack todos app made with Next JS,Mantine',link:'https://test-todos-next.vercel.app/',github:'https://github.com/sougataghar477/test-todos-next'},
        { heading: 'Help Ukraine', text: 'A website containing useful links for helping Ukraine.', link: 'https://help-ukraine.netlify.app/', github: 'https://github.com/sougataghar477/helpUkraine' },
        { heading: 'CSS Units Converter', text: 'Converts lots of units into another units.', link: 'https://css-unitsconverter.netlify.app/', github: 'https://github.com/sougataghar477/css-units-converter' },
        { heading: 'Instagram image copier', text: 'An addon for Firefox that copies image or its url on click.', link: 'https://chromewebstore.google.com/detail/image-copier-for-instsgra/lejedjokmndehmcbfmpjbmimihobnfpo', github: 'https://github.com/sougataghar477/instagram-image-url-copier' },
        { heading: 'Random Color Generator', text: 'Generates random color on click and you can copy it', link: 'https://sougataghar477.github.io/colors/index.html', github: 'https://github.com/sougataghar477/7TV-message-copier-for-twitch' },
        { heading: 'Copy Message extension for 7TV', text: 'Copies message in twitch chat if you have 7TV extension', link: 'https://addons.mozilla.org/en-US/firefox/addon/message-copier-for-7tv/', github: 'https://github.com/sougataghar477/7TV-message-copier-for-twitch' },
        { heading: 'Twitch brightness controller', text: 'Controls brightness of the video player of a twitch stream', link: 'https://addons.mozilla.org/en-US/firefox/addon/twitch-brightness-reducer/', github: 'https://github.com/sougataghar477/twitch-brightness-reducer' }
    ]
    return <Flex wrap={'wrap'} gap={8} p={2}>
        <Heading>My Projects</Heading>
        {cards.map((card, index) => (
            <Card key={index} flexGrow={1} >
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{card.heading}</Heading>
                        <Text>{card.text}</Text>
                        <Flex gap={4}>
                            <Link href={card.link} isExternal>
                                <Button>Check Out</Button>
                            </Link>
                            {card?.github && <Link href={card.github}>
                                <Button>Github</Button>
                            </Link>}


                        </Flex>
                    </Stack>
                </CardBody>
            </Card>
        ))}

    </Flex>
}
export default Projects;
