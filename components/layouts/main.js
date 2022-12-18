import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-loader'

const VoxelRoom = dynamic(() => import('../voxel-object'), {
    ssr: false,
    loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Ruixiang Lin's homepage" />
                <meta name="author" content="Ruixiang Lin" />
                <link rel="apple-touch-icon" href="corgi.png" />
                <link rel="shortcut icon" href="/corgi.png" type="image/x-icon" />
                <meta property="og:site_name" content="Ruixiang Lin" />
                <meta name="og:title" content="Ruixiang Lin" />
                <meta property="og:type" content="website" />
                <title>Ruixiang Lin - Home</title>
            </Head>

            <NavBar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <VoxelRoom />

                {children}

                <Footer />
            </Container>
        </Box>
    )
}

export default Main