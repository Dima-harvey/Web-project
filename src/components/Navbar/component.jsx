import React, { useState } from 'react'
import { Container, Nav, Hamburger, Button, Menu, LinkWrapper, MenuLink, LogoRegist } from './styles'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Nav>
      <Container>
        <h1>Modsen Healse</h1>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
         <Menu isOpen={isOpen}>
        <LinkWrapper>
          <MenuLink href="">Home</MenuLink>
          <MenuLink href="">Service</MenuLink>
          <MenuLink href="">Clinic</MenuLink>
          <MenuLink href="">Doctors</MenuLink>
          <MenuLink href="">Contact</MenuLink>
          <MenuLink href="">Log in</MenuLink>
          <Button>Register</Button>
        </LinkWrapper>
         </Menu>
      </Container>
    </Nav>
  )
}

export default Navbar
