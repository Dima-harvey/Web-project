import React from 'react'
import Buttons from '@/components/Button'
import { ReactComponent as Logo } from '../../assets/envelope-regular.svg'

import { Container, StyleInputs } from './styles'

const Input = props => (
   <Container>
       <Logo />
       <StyleInputs type="text" placeholder={props.text}/>
       <Buttons text="Get Stated"/>
   </Container>

)

export default Input
