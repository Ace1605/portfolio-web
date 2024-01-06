import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
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
          Hello, I&apos;m a front-end developer based in Nigeria
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Achugo Ebuka
            </Heading>
            <p>(Frontend Developer)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
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
              alt="author-image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Hi, I am an accomplished frontend developer currently working at
            Chequebase and having previously worked at SmadeandSmight. With over
            two years of experience, Ace excels in crafting digital solutions
            that tackle real-world challenges. Specializing in modern frontend
            technologies, including React, Next.js, Redux, and REST, Ace has
            played a pivotal role in projects such as TheHangout, actively
            contributing to the development of high-quality and user-centric
            digital services. Notably, Ace has leveraged Next.js, React, and
            Typescript in the finance management platform{' '}
            <Link href="https://chequebase.io" target="_blank">
              Chequebase.io
            </Link>
            , demonstrating versatility and a mobile-first approach.{' '}
            <Link href="https://myhangout.co/" target="_blank">
              MyHangout
            </Link>{' '}
            is a lifestyle product developed during my tenure with
            SmadeandSmight
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
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
            Completed the SSCE program in BrainPoint College where i graduated
            with highest honors.
          </BioSection>
          <BioSection>
            <BioYear>2018 to 2023</BioYear>
            First Class Honours B.Sc Microbiology
          </BioSection>
          <BioSection>
            <BioYear>2020 to 2022</BioYear>
            Worked as a freelancer
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Frontend Developer
          </BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            I ♡
          </Heading>
          <Paragraph>
            Music, Game, <Link href="https://animepahe.com">Anime</Link>, Car
            race, Swimming, building fun projects
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}
