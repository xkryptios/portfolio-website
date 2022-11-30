import NextLink from 'next/link';
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
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph';
// import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item.js';
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
// import thumbYouTube from '../public/images/links/youtube.png';
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png';
import Image from 'next/image';

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, Welcome to my Homepage
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ruixiang Lin
          </Heading>
          <p>Software Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/test1.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
          I am Rui Xiang, a penultimate Computer Science student in Nanyang
          Technological University. I have passion in Tech and is eager to learn
          about new technologies. I love to develop functional applications.
        </Paragraph>

        <Box align="center" my={4}>
          {/* <NextLink href="/works" passHref scroll={false}> */}
          <Button rightIcon={<DownloadIcon />} colorScheme="teal">
            Résumé
          </Button>
          {/* </NextLink> */}
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Have code with
        </Heading>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="left"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <Heading variant='section-content'>
            Languages
          </Heading>
          <Paragraph>
            Python, Javascript, Typescript, Java, C, HTML/CSS
          </Paragraph>
          <br />
          <Heading variant='section-content'>
            Frameworks/Libraries & Tools
          </Heading>
          <Paragraph>
            React, Nextjs, Express, Nodejs, SpringBoot, Threejs, Prisma, MongoDB, PostgreSQL, Git, Prettier, NPM, Postman
          </Paragraph>

        </Box>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Socials
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/xkryptios" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @xkryptios
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/rui-xiang-lin-16a0a9206/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Ruixiang Lin
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/ahxiang_rx/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @ahxiang_rx
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from '../components/chakra';