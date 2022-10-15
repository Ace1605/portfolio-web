import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../navbar";
import NoSsr from "../no-ssr";
import VoxelPika from "../voxel-pika";

const Layout = ({children, router}) => {
    return(
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width= device-width, initial-scale= 1" />
                <title>Ace -Homepage</title>
            </Head>

            <Navbar path={router.asPath} />
            <Container maxW="container" pt={14} >
                <NoSsr>
                    <VoxelPika/>
                </NoSsr>
                {children}

            </Container>
        </Box>
    )
}

export default Layout;