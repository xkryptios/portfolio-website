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
                Secret Confession <Badge>2019</Badge>
            </Title>
            <P>
                A web app that provides a platform for users to write confession anonymous. This was the first web app that I created!
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href="https://github.com/xkryptios/secret-confession-webapp">
                        https://github.com/xkryptios/secret-confession-webapp <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web App</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>NodeJS, Express, EJS, MongoDB, OAuth</span>
                </ListItem>
            </List>

            {/* <ProjectImage src="/images/projects/youtility_2.png" alt="YOUtility" /> */}
            {/* <ProjectImage src="/images/projects/youtility_1.png" alt="YOUtility" /> */}
        </Container>
    </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
