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
                Recipely <Badge>2021</Badge>
            </Title>
            <P>
                Recipely is a ingredient management and recipe recommendation Web App. With the goal of minimising food wastage from expiring ingredients in the house, users are able to store and keep track of ingredients in the house. App provides clear visualization on soon-to-be-expiring food items and recommend recipes based ingredients available in the inventory. The app made use of Spoonacular API for recipe and ingredient information. It was built for an academic project (CZ3002 Advanced Software Engineering).
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href="https://github.com/xkryptios/Recipely">
                        https://github.com/xkryptios/Recipely <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web App</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React, Firebase Auth, NodeJS, Express, MySQL(AWS RDS)</span>
                </ListItem>
            </List>

            <ProjectImage src="/images/projects/recipely_1.png" alt="YOUtility" />
            <ProjectImage src="/images/projects/recipely_2.png" alt="YOUtility" />
            <ProjectImage src="/images/projects/recipely_3.png" alt="YOUtility" />
            <ProjectImage src="/images/projects/recipely_4.png" alt="YOUtility" />
            <ProjectImage src="/images/projects/recipely_5.png" alt="YOUtility" />
        </Container>
    </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
