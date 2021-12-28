import React from 'react'

import { Container } from './styles'

const InfoBlockText = ({ number, numberDown }) => {
  return (
        <Container>
            <h3>{number} </h3>
            <p>{numberDown}</p>
        </Container>
  )
}

export default InfoBlockText
