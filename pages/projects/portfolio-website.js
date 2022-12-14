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
                Portfolio Website <Badge>2021</Badge>
            </Title>
            <P>
                A website so showcase experience, projects and a little more about my personal self.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href="https://github.com/xkryptios/portfolio-website">
                        https://github.com/xkryptios/portfolio-website <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web App</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React, ThreeJS, NextJS</span>
                </ListItem>
            </List>

            <ProjectImage src="/images/projects/youtility_2.png" alt="YOUtility" />
            <ProjectImage src="/images/projects/youtility_1.png" alt="YOUtility" />
        </Container>
    </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
