import {Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbHangout from '../public/images/thehangout.jpeg'
import thumbHmo from '../public/images/hmo.jpeg'
import thumbBank from '../public/images/BE-port.jpeg'
import thumbSmade from '../public/images/smadeandsmight.jpeg'
import Layout from '../components/layouts/article'

const Works =() => {
    return(
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem href="https://myhangout.co" title ="TheHangout" thumbnail={thumbHangout}>
                                A platform that helps you find what you need in your location.
                                Our team of waka&ndash;abouts who have literally been everywhere 
                                will help you solve the problem of what is fun or what to eat around you.
                                If it&apos;s fun and groovy, The Hangout got it!
                                Don&apos;t miss that event. Check out bars, clubs and lounges. Order your food &amp; More
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem href="https://myhangout.co" title ="HMO" thumbnail={thumbHmo}>
                                A platform that provides affordable and accessible
                                health insurance products across Africa for you, your
                                family, your dependants and your employees
                        </WorkGridItem>
                    </Section>  
                </SimpleGrid>
                <Section>
                    <Divider my={6}/>
                    <Heading as="h3" fontSize={20} mb={4}>
                        Collaborations
                    </Heading>
                </Section>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section delay={0.3}>
                        <WorkGridItem href="https://myhangout.co" title ="BankEasy" thumbnail={thumbBank}>
                                BankEasy is a financial platform
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem href="https://myhangout.co" title ="SmadeandSmight" thumbnail={thumbSmade}>
                                SmadeandSmight is a company that bring business ideas to reality
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works