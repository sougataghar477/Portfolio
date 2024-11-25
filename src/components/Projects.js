import { Flex, Card, Button, CardBody, Link, Stack, Heading, Text } from "@chakra-ui/react";
function Projects() {
    let projects = [
        { heading:'TimeFramed',text:'Made some parts of the website with React JS',link:'https://timeframed.art'},
        {heading:'Plantly',text:'A Full Stack E-Commerce Website I made with Next JS and Chakra UI',link:'https://plantly-rho.vercel.app/',github:'https://github.com/sougataghar477/plantly'},
        { heading: 'PersonalFinance', text: 'A website I made with react', link: 'https://www.personalfinances.stage.iamthedev.eu/' },
        { heading: 'Rabbit API', text: 'A fullstack open source Rabbit Image API made with Next JS,Chakra UI,MongoDB and Firebase.', link: 'https://rabbit-api-two.vercel.app/', github: 'https://github.com/sougataghar477/rabbit-api' },
        { heading: 'Kontrast Productions', text: 'Made the portfolio and contact sections', link: 'https://www.kontrastproduction.sk/#testimonials' },
        { heading:'Todos App',text:'A full stack todos app made with Next JS,Mantine',link:'https://test-todos-next.vercel.app/',github:'https://github.com/sougataghar477/test-todos-next'},
        {heading:'Alveus Sanctuary',text:'Contributed to website of Alveus Sanctuary',link:'https://www.alveussanctuary.org/',github:'https://github.com/alveusgg/alveusgg/tree/main/apps/website'},
        { heading: 'Help Ukraine', text: 'A website containing useful links for helping Ukraine.', link: 'https://help-ukraine.netlify.app/', github: 'https://github.com/sougataghar477/helpUkraine' },
        { heading: 'CSS Units Converter', text: 'Converts lots of units into another units.', link: 'https://css-unitsconverter.netlify.app/', github: 'https://github.com/sougataghar477/css-units-converter' },
        { heading: 'Random Color Generator', text: 'Generates random color on click and you can copy it', link: 'https://sougataghar477.github.io/colors/index.html', github: 'https://github.com/sougataghar477/7TV-message-copier-for-twitch' },
  ]
    return <Flex wrap={'wrap'} gap={8} p={2}>
        <Heading>My Projects</Heading>
        {projects.map((project, index) => (
            <Card key={index} flexGrow={1} >
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{project.heading}</Heading>
                        <Text>{project.text}</Text>
                        <Flex gap={4}>
                            <Link href={project.link} isExternal>
                                <Button>Check Out</Button>
                            </Link>
                            {project?.github && <Link href={project.github}>
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
