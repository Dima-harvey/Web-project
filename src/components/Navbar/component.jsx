import React, { useState } from 'react'
import { Container, Nav, Hamburger, Button, Menu, LinkWrapper, MenuLink, LogoRegist, ContainerArticle, ContainerOut } from './styles'
import { ReactComponent as Logo } from '@/assets/wind.svg'
import { ReactComponent as Union } from '@/assets/Union.svg'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Nav>
      <Container>
        <ContainerArticle>
        <Logo />
        <h1>Modsen Healse</h1>
        </ContainerArticle>
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
          <ContainerOut>
          <MenuLink href="">Log in</MenuLink>
          <Button>Register</Button>
          </ContainerOut>
        </LinkWrapper>
        <Union />
         </Menu>
      </Container>
    </Nav>
  )
}

export default Navbar
