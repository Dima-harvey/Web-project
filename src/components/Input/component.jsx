import React from 'react'

import Buttons from '@/components/Button'
import { Container, InputsStyle } from './styles'
import { ReactComponent as Logo } from '../../assets/SVG/envelope-regular.svg'

const Input = props => (
    <Container>
        <Logo />
        <InputsStyle type="text" placeholder={props.text} />
        <Buttons text="Get Stated" />
    </Container>
)

export default Input
