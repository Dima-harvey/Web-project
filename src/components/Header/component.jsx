import React from 'react'
import image from '@/assets/Photo.png'
import bg from '@/assets/bg.png'
import HeroText from '@/components/HeroText'
import { Container, TwoTitle, ThreeTitle, Wrapper, InnerWrapper, Left, TiltWrapper, Img, ContainerTwo } from './styles'

const Header = () => {
  return (
    <Container bg={bg}>
      <Wrapper>
        <InnerWrapper>
          <Left>
            <HeroText />
          </Left>
          <TiltWrapper options={{ max: 25 }}>
            <Img src={image} />
          </TiltWrapper>
        </InnerWrapper>
      </Wrapper>
    </Container>
  )
}

export default Header
