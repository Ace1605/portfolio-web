import { Box, Container, Heading, Link, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaWhatsapp
} from 'react-icons/fa'
import Paragraph from '../components/paragraph'

const Contact = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Contact me
        </Heading>
        <SimpleGrid columns={[1, 1]} gap={6}>
          <Section>
            <Box my={3}>
              <Paragraph className="contact-p">
                <Link>
                  <FaPhone />
                  09045310883
                </Link>
              </Paragraph>
            </Box>
            <Box my={3}>
              <Paragraph className="contact-p">
                <Link
                  href="https://api.whatsapp.com/send?phone=+2349045310883"
                  target="_blank"
                >
                  <FaWhatsapp />
                  09045310883 - Let&apos;s chat
                </Link>
              </Paragraph>
            </Box>
            <Box my={3}>
              <Paragraph className="contact-p">
                <Link href="mailto:achugoebuka1@gmail.com" target="_blank">
                  <FaEnvelope />
                  achugoebuka1@gmail.com
                </Link>
              </Paragraph>
            </Box>
            <Box my={3}>
              <Paragraph className="contact-p">
                <Link href="https://github.com/Ace1605" target="_blank">
                  <FaGithub />
                  Ace1605
                </Link>
              </Paragraph>
            </Box>
            <Box my={3}>
              <Paragraph className="contact-p">
                <Link
                  href="https://www.linkedin.com/in/ebuka-achugo-818845199/"
                  target="_blank"
                >
                  <FaLinkedin />
                  @Ebuka Achugo
                </Link>
              </Paragraph>
            </Box>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Contact
