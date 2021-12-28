import React, { useState } from 'react'

import { ReactComponent as Logo } from '@/assets/SVG/wind.svg'
import { ReactComponent as Union } from '@/assets/SVG/Union.svg'
import {
  Container,
  ContainerNavbar,
  Hamburger,
  Button,
  Menu,
  LinkWrapper,
  MenuLink,
  ContainerArticle,
  ContainerOut,
} from './styles'

const menuItems = ['Home', 'Service', 'Clinic', 'Doctors', 'Contact']

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
        <ContainerNavbar>
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
                        {menuItems.map(item => {
                          return <MenuLink key={item} href="">{item}</MenuLink>
                        })}
                        <ContainerOut>
                            <MenuLink href="">Log in</MenuLink>
                            <Button>Register</Button>
                        </ContainerOut>
                    </LinkWrapper>
                    <Union />
                </Menu>
            </Container>
        </ContainerNavbar>
  )
}

export default Navbar
