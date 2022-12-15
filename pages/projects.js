import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'

import thumbTest from '../public/images/projects/test_eyecatch.png'
import thumbYoutility from '../public/images/projects/test.png'
import thumbRecipely from '../public/images/projects/recipely_0.png'
import thumbBeam from '../public/images/projects/beam_0.png'
import thumbPortfolio from '../public/images/projects/portfolio_0.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>

      <Heading as="h3" fontSize={20} mb={4}>
        Past Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

        <Section>
          <ProjectGridItem id="youtility" title="YOUtility" thumbnail={thumbYoutility}>
            An android app that monitors water and electricity usage in the household and provide recommendations
          </ProjectGridItem>
        </Section>

        <Section>
          <ProjectGridItem id="recipely" title="Recipely" thumbnail={thumbRecipely}>
            An ingredient inventory management and recipe recommendation mobile application
          </ProjectGridItem>
        </Section>


        <Section>
          <ProjectGridItem id="portfolio-website" title="Portfolio Website" thumbnail={thumbPortfolio} >
            A website to share more information about myself
          </ProjectGridItem>

        </Section>

        <Section delay={0.1}>
          <ProjectGridItem id="secret-confession" title="Secret Confession" thumbnail={thumbTest}>
            A website that provides a platform for anonymous sharing of secrets
          </ProjectGridItem>
        </Section>

        <Section delay={0.1}>
          <ProjectGridItem id="beam-calculator" title="Beam Calculator GUI" thumbnail={thumbBeam}>
            An GUI to calculate visualise shear force and bending moment
          </ProjectGridItem>
        </Section>

        {/* <Section delay={0.2}>
          <ProjectGridItem id="budget-tracker" title="Budget Tracker" thumbnail={thumbTest}>
            An app that keeps track of user spending and provide visualisation
          </ProjectGridItem>
        </Section>

        <Section delay={0.2}>
          <ProjectGridItem id="connect4" title="Connect4" thumbnail={thumbTest}>
            An webapp game where user can play against an AI
          </ProjectGridItem>
        </Section> */}

        {/* <Section delay={0.2}>
          <ProjectGridItem id="move-award-nomination-predictor" title="Movie Award Nomination Predictor" thumbnail={thumbTest}>
            A Machine Learning Modal that predicts if a movie would be nominated for an award
          </ProjectGridItem>
        </Section> */}

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
