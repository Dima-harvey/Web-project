import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import Logo from '@/assets/PNG/Photo.png'
import LineTop3 from '@/assets/PNG/LineTop3.png'
import Navbar from '@/components/Navbar'
import Title from '@/components/Title'
import Input from '@/components/Input'
import InfoBlockText from '@/components/InfoBlockText'
import LineDown from '@/assets/PNG/LineDown.png'
import Elipse from '@/assets/PNG/Elipse.png'
import GlobalStyle from '@/theme/GlobalStyle'
import theme from '@/theme/config'
import useWindowSize from '@/utils/useWindowSize'
import {
  Container,
  TwoTitle,
  ThreeTitle,
  BlockInfoWidth,
  ImgLineDown,
  Img,
  ContainerBody,
  ContainerLeft,
  ContainerTitle,
  InfoBlock,
  ContainerImage,
  ImgLine,
  ImgElipse,
} from './styles'

const Landing = () => {
  const [width] = useWindowSize()
  return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Container>
                <Navbar />
                {width < 1330
                  ? (
                    <></>
                    )
                  : (
                    <React.Fragment>
                        <ImgElipse src={Elipse} />
                        <ImgLine src={LineTop3} />
                        <ImgLineDown src={LineDown} />
                    </React.Fragment>
                    )}
                <ContainerBody>
                    <ContainerLeft>
                        <ContainerTitle>
                            <Title text="Booking of doctor’s appointment" />
                            <TwoTitle>
                                Don’t Miss Our Exclusive Patient Special
                            </TwoTitle>
                            <ThreeTitle>
                                We want to make sure that everyone has access to
                                natural and effective care. With our special,
                                you’ll receive a consultation and a digital
                                posture assesment.
                            </ThreeTitle>
                        </ContainerTitle>
                        <Input text="Enter your email" />
                        <InfoBlock>
                            <BlockInfoWidth>
                                <InfoBlockText
                                    number="240"
                                    numberDown="Qualified Doctors Medical Specialists"
                                />
                            </BlockInfoWidth>
                            <BlockInfoWidth>
                                <InfoBlockText
                                    number="1.456"
                                    numberDown="Medical Tests Done For Our Patients"
                                />
                            </BlockInfoWidth>
                            <BlockInfoWidth>
                                <InfoBlockText
                                    number="1M+"
                                    numberDown="Years of Experience The Medical Field"
                                />
                            </BlockInfoWidth>
                        </InfoBlock>
                    </ContainerLeft>
                    <ContainerImage>
                        <Img src={Logo} />
                    </ContainerImage>
                </ContainerBody>
            </Container>
        </ThemeProvider>
  )
}

export default Landing
