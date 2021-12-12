import React, { useState, useEffect } from 'react'
import { Container, TwoTitle, ThreeTitle, BlockInfoOne, BlockInfoTwo, BlockInfoThree, ImgLineDown, Img, ContainerBody, ContainerLeft, ContainerTitle, InfoBlock, ContainerImage, ImgLine, ImgElipse } from './styles'
import Logo from '@/assets/Photo.png'
import LineTop3 from '@/assets/LineTop3.png'
import Navbar from '@/components/Navbar'
import Title from '@/components/Title'
import Input from '@/components/Input'
import InfoBlockText from '@/components/InfoBlockText'
import LineDown from '@/assets/LineDown.png'
import Elipse from '@/assets/Elipse.png'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@/theme/GlobalStyle'
import theme from '@/theme/config'

function useWindowSize () {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight])
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', handleResize)
  }, [])
  return size
}
const Landing = () => {
  const [width, height] = useWindowSize()
  if (width < 1330) {
    return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
     <Container>
      <Navbar />
      <ContainerBody>
        <ContainerLeft>
        <ContainerTitle>
           <Title text="Booking of doctor’s appointment" />
           <TwoTitle>Don’t Miss Our Exclusive Patient Special</TwoTitle>
           <ThreeTitle>We want to make sure that everyone has access to natural and effective care. With our special, you’ll receive a consultation and a digital posture assesment.</ThreeTitle>
        </ContainerTitle>
        <Input text= "Enter your email" />
        <InfoBlock><BlockInfoOne><InfoBlockText number = "240" numberDown ="Qualified Doctors Medical Specialists" /></BlockInfoOne><BlockInfoTwo><InfoBlockText number = "1.456" numberDown = "Medical Tests Done For Our Patients" /></BlockInfoTwo><BlockInfoThree><InfoBlockText number = "1M+" numberDown = "Years of Experience The Medical Field" /></BlockInfoThree></InfoBlock>
        </ContainerLeft>
        <ContainerImage>
           <Img src={ Logo } />
        </ContainerImage>
      </ContainerBody>
     </Container>
    </ThemeProvider>
    )
  }
  return (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
   <Container>
     <Navbar />
     <ImgLine src = { LineTop3 } />
     <ImgLineDown src = { LineDown } />
     <ContainerBody>
       <ContainerLeft>
       <ContainerTitle>
          <Title text="Booking of doctor’s appointment" />
          <TwoTitle>Don’t Miss Our Exclusive Patient Special</TwoTitle>
          <ThreeTitle>We want to make sure that everyone has access to natural and effective care. With our special, you’ll receive a consultation and a digital posture assesment.</ThreeTitle>
       </ContainerTitle>
       <Input text= "Enter your email" />
       <InfoBlock><BlockInfoOne><InfoBlockText number = "240" numberDown ="Qualified Doctors Medical Specialists" /></BlockInfoOne><BlockInfoTwo><InfoBlockText number = "1.456" numberDown = "Medical Tests Done For Our Patients" /></BlockInfoTwo><BlockInfoThree><InfoBlockText number = "1M+" numberDown = "Years of Experience The Medical Field" /></BlockInfoThree></InfoBlock>
       </ContainerLeft>
       <ContainerImage>
         <ImgElipse src={ Elipse } />
         <Img src={ Logo } />
       </ContainerImage>
     </ContainerBody>
   </Container>
  </ThemeProvider>
  )
}

export default Landing
