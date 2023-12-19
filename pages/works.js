import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbHangout from '../public/images/thehangout.jpeg'
import thumbCB from '../public/images/cbport.jpeg'
import thumbPr from '../public/images/prport.jpeg'
import thumbSmade from '../public/images/smadeandsmight.jpeg'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              href="https://myhangout.co"
              title="MyHangout"
              thumbnail={thumbHangout}
            >
              A platform that helps you find what you need in your location. It
              is a lifestyle-based web application called myhangout; for
              trending events, clubs, cinemas, restaurants from various
              merchants and customers. This experience honed my ability to work
              under pressure and maintain high-quality standards.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              href="https://chequebase.io"
              title="Chequebase.io"
              thumbnail={thumbCB}
            >
              Chequebase.io, an innovative expense and spend management platform
              designed for businesses. This user-friendly web application
              empowers users to effortlessly track and categorize expenses, set
              and monitor budgets, and generate insightful reports to gain a
              comprehensive understanding of their financial landscape.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Section>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Other Projects
          </Heading>
        </Section>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              href="https://playrivalz.com/"
              title="Playrivalz"
              thumbnail={thumbPr}
            >
              Playrivalz is a gaming platform
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              href="http://smadeandsmight.com"
              title="SmadeandSmight"
              thumbnail={thumbSmade}
            >
              SmadeandSmight is a company that bring business ideas to reality
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
