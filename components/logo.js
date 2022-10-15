import Link from 'next/link';
import Image from 'next/image'
import {Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled';

const LogoBox = styled.span `
    font-weight: bold;
    font-size: 1.2rem;
    display: inline-flex;
    align-items: center;
    height: 2.8rem;
    line-height: 1.2rem;
    padding: 0.8rem;
  
    img{
        transform: rotate(20deg);
    }

    &:hover img {
        transform: rotate(0deg);
    }
`;

const Logo = () => {
    const footPrintImg = `/images/contents/footprint${useColorModeValue('', '-dark')}.svg`
    return(
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={footPrintImg} width={20} height={20} alt="logo"/>
                    <Text 
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontWeight="bold"
                        ml={3}
                        >
                        Ace
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo