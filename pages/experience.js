import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  UnorderedList,
  Divider
} from '@chakra-ui/react';
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph';
import { BioYear } from '../components/bio'
import content from '../public/data/experience.json'

const works = content.work
const competitions = content.competitions

const Experience = () => {
  const bgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')
  return (
    <Layout title="Experience">
      <Container>
        <Heading variant='section-title'>
          Work Experience
        </Heading>
        {works.map((work, index) => {
          return (
            <Box key={index}
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="left"
              bg={bgColor}
              css={{ backdropFilter: 'blur(10px)' }}
            >
              <Heading variant='subsection-title'>
                {work.title}
              </Heading>
              <BioYear>{work.year}</BioYear>
              <UnorderedList fontSize={16} fontWeight="light">
                {work.description.map((text, index) => {
                  return (
                    <ListItem key={index}>
                      {text}
                    </ListItem>
                  )
                })}
              </UnorderedList>
            </Box>
          )
        })}
        <Divider></Divider>
        <Heading variant='section-title'>
          Hackathons/Competitions
        </Heading>
        {
          competitions.map((comp, index) => {
            return (
              <Box key={index}
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="left"
                bg={bgColor}
                css={{ backdropFilter: 'blur(10px)' }}
              >
                <Heading variant='subsection-title'>
                  {comp.title}
                </Heading>
                <UnorderedList fontSize={16} fontWeight="light">
                  {
                    comp.description.map((text, index) => {
                      return (
                        <ListItem key={index}>
                          {text}
                        </ListItem>)
                    })}
                </UnorderedList>
              </Box>
            )
          })}
      </Container>
    </Layout >

  )

};

export default Experience;
