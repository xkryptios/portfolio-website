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
                YOUtility was a academic project (CZ2006 Software Engineering) geared towards a smart nation applications. It collects and monitor data (water and electricity usage) from household sensors in real-time. It provides personalised tips for users with the goal of reducing water and electricity consumptions.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Frontend Repo</Meta>
                    <Link href="https://github.com/xkryptios/CZ2006_Frontend">
                        https://github.com/xkryptios/CZ2006_Frontend <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Backend Repo</Meta>
                    <Link href="https://github.com/xkryptios/CZ2006_SWE_Backend">
                        https://github.com/xkryptios/CZ2006_SWE_Backend <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Android Studio, NodeJS, Express, MongoDB</span>
                </ListItem>
            </List>

            <ProjectImage src="/images/projects/youtility_2.png" alt="YOUtility" />
            <ProjectImage src="/images/projects/youtility_1.png" alt="YOUtility" />
        </Container>
    </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
