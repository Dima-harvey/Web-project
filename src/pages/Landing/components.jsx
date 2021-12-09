import React from 'react'
import { Container, TwoTitle, ThreeTitle, BlockInfoOne, BlockInfoTwo, BlockInfoThree, TiltWrapper, Img, ContainerTwo, ContainerBody, ContainerLeft, ContainerTitle, InfoBlock, ContainerImage } from './styles'
import Logo from '@/assets/Photo.png'
import Navbar from '@/components/Navbar'
import Title from '@/components/Title'
import Input from '@/components/Input'
import bg from '@/assets/bg.png'
import Header from '@/components/Header'
import InfoBlockText from '@/components/InfoBlockText'

const Landing = () => (
  <>
    <Container>
     {/* <Img src={bg} alt="@gouthamgtronics" /> */}
      <Navbar />
      <ContainerBody>
        <ContainerLeft>
        <ContainerTitle>
           <Title text="Booking of doctor’s appointment" />
           <TwoTitle>Don’t Miss Our Exclusive Patient Special</TwoTitle>
           <ThreeTitle>We want to make sure that everyone has access to natural and effective care. With our special, you’ll receive a consultation and a digital posture assesment.</ThreeTitle>
        </ContainerTitle>
        <Input placeholder = "Enter your email" />
        <InfoBlock><BlockInfoOne><InfoBlockText number = "240" numberDown ="Qualified Doctors Medical Specialists" /></BlockInfoOne><BlockInfoTwo><InfoBlockText number = "1.456" numberDown = "Medical Tests Done For Our Patients" /></BlockInfoTwo><BlockInfoThree><InfoBlockText number = "1M+" numberDown = "Years of Experience The Medical Field" /></BlockInfoThree></InfoBlock>
        </ContainerLeft>
        <ContainerImage>
          <Img src={ Logo } />
        </ContainerImage>
      </ContainerBody>
    </Container>
  </>

)

export default Landing
