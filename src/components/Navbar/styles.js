import styled from 'styled-components'
export const Button = styled.button`
  font-size: 0.8rem;
  background: blue;
  border: none;
  padding: 0.8rem 1.1rem;
  color: #fff;
  border-radius: 1rem;
  transition: all 0.3s ease-in-out;
  margin-left: 0.5rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 17px 16px -11px #ecb6d7;
    transform: translateY(-5px);
  }

  @media (max-width: 670px) {
    /* width: 100%; */
    padding: 0.3;
  }
`
export const MenuLink = styled.a`
  text-decoration: none;
  color: rgba(33, 94, 233, 1);
  font-size: 0.9rem;
  padding: 0.7rem 1.5rem;
  transition: all 0.2s ease-in;
  border-radius: 0.5rem;
  font-weight: 500;

  &:hover {
    color: rgba(33, 94, 233, 1);;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: auto;
  width: 100%;
  padding: 2rem;

  svg {
    height: 1.4rem;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #858586;
    font-size: 0.9rem;
    padding: 0.7rem 1.5rem;
    transition: all 0.2s ease-in;
    border-radius: 0.5rem;
    font-weight: 500;

    &:hover {
      color: rgba(33, 94, 233, 1);
    }
  }
  h1 {
    font-size: 3.5rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
  }
`
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 7;
`
export const LogoRegist = styled.div`
  display: flex;
  margin: 45;
`
export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 1000px) {
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      -webkit-backdrop-filter: blur(35px);
      backdrop-filter: blur(15px);
    }
    border-radius: 1rem;
    margin-top: 1rem;
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '350px' : '0')};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`
export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1.5rem 0;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`
export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: black;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 1000px) {
    display: flex;
  }
`
export const LinkWrapper1 = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 1.5rem 0;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`
export const ContainerArticle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ContainerOut = styled.div`
  display: flex;
  justify-content: flex-end;
`
