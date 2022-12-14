import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, ProjectImage } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout title="YOUtility">
        <Container>
            <Title>
                YOUtility <Badge>2021</Badge>
            </Title>
            <P>
                A Graphic User Interface(GUI) that helps with the calculation of shear force and bending moment on a given beam. User is able to select a beam type (Simply supported, Overhanging supported, Cantilever) and add weights of different types to the system. The GUI will be able to generate the shear force and bending moment graph for the given beam system.
                User is able to save a calculated beam system and load it from a text file.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href="https://github.com/xkryptios/beam-calculator-GUI">
                        https://github.com/xkryptios/beam-calculator-GUI <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Python GUI</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Python, Turtle(GUI)</span>
                </ListItem>
            </List>

            <ProjectImage src="/images/projects/beam_1.png" alt="YOUtility" />
            <ProjectImage src="/images/projects/beam_2.png" alt="YOUtility" />
            <ProjectImage src="/images/projects/beam_0.png" alt="YOUtility" />
        </Container>
    </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
