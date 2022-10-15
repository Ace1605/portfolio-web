import {
  Button,
  Container, 
  Box, 
  Heading, 
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link';
import Layout from '../components/layouts/article'




export default function Home() {
  return (
    <Layout>
        <Container>
          <Box 
          borderRadius="lg" 
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
          p={3} 
          mb={6} 
          mt={6} 
          align="center" 
          >
            Hello,  I&apos;m a front-end developer based in Nigeria
          </Box>

          <Box display={{md:'flex'}} >
              <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Achugo Chika
                </Heading>
                <p>Ace Devs (Microbiologist / Developer)</p>
              </Box>
              <Box 
                flexShrink={0} 
                mt={{base: 4, md: 0}}
                ml={{md: 6}} 
                align="center" >
                <Image 
                borderColor="whiteAlpha.800" 
                borderWidth={2} 
                borderStyle="solid" 
                objectFit="cover" 
                width="110px" 
                height="110px" 
                display="inline-block" 
                borderRadius="full" 
                src="/images/Ace.jpeg" 
                alt="author-image"/>
              </Box>
          </Box>
          <Section delay={0.1}>
            <Heading as="h3" variant="section-title" >
              Work
            </Heading>
            <Paragraph>
              Ace is a freelancer 
              and with an employment contract
              with The Hangout Technologies.
              He has a passion for building digital services/softwares
              that provide solution to real-life problems, loves
              watching animes, gaming and swimming. Currently working
              on a product called {' '}
              <Link href="https://myhangout.co/" target="_blank">TheHangout</Link>
              .
            </Paragraph>
            <Box align="center" my={4}>
              <NextLink href="/works">
                <Button rightIcon={<ChevronRightIcon/>} colorScheme = "blue">
                My portfolio
                </Button>
              </NextLink>
            </Box>
          </Section>
          <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
              Bio
            </Heading>
            <BioSection>
              <BioYear>1999</BioYear>
              Born in Lagos, Nigeria.
            </BioSection>
            <BioSection>
              <BioYear>2015</BioYear>
              Completed the SSCE program in BrainPoint College
              where i graduated with highest honors but couldn&apos;t
              receive the award cause he chose to get a new phone over
              going for the graduation ceremony
            </BioSection>
            <BioSection>
              <BioYear>2018 to present</BioYear>
                Undergraduate of Microbiology
            </BioSection>
            <BioSection>
              <BioYear>2020 to present</BioYear>
              Works as a freelancer
            </BioSection>
            <BioSection>
              <BioYear>Present</BioYear>
                Software Engineer for The Hangout Technologies
            </BioSection>
          </Section>

          <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
              I ♡
            </Heading>
            <Paragraph>
              Music, Game, {' '}
                <Link href='https://animepahe.com' >Anime</Link>
                , Car race, {''}
                <Link href='https://animepahe.com' >Swimming</Link>
                , building fun projects
            </Paragraph>
          </Section>
        </Container>
  </Layout>
  )
}
