import styled from 'styled-components'

export const Button = styled.button`
    font-size: ${({ theme }) => theme.fonts.one}px;
    background: ${({ theme }) => theme.colors.blu};
    border: none;
    padding: ${({ theme }) => theme.padding.button.left}px
        ${({ theme }) => theme.padding.button.top}px;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 20px;
    margin-left: 0.5rem;
    cursor: pointer;
    @media (max-width: 670px) {
        padding: 0.3;
    }
`
export const MenuLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.greylight};
    font-size: ${({ theme }) => theme.fonts.one}px;
    padding: ${({ theme }) => theme.padding.menu.left}px
        ${({ theme }) => theme.padding.menu.top}px;
    transition: all 0.2s ease-in;
    border-radius: 0.5rem;
    font-weight: 500;
    
    &:hover {
        color: ${({ theme }) => theme.colors.blu};
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
        color: ${({ theme }) => theme.colors.greylight};
        font-size: ${({ theme }) => theme.fonts.one}px;
        padding: ${({ theme }) => theme.padding.menu.left}px
            ${({ theme }) => theme.padding.menu.top}px;
        transition: all 0.2s ease-in;
        border-radius: 0.5rem;
        font-weight: 500;

        &:hover {
            color: rgba(33, 94, 233, 1);
        }
    }
    h1 {
        font-style: normal;
        font-weight: bold;
        font-size: ${({ theme }) => theme.fonts.one}px;
        display: flex;
    }
`
export const ContainerNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10000;
`
export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 1000px) {
        @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
            -webkit-backdrop-filter: blur(5px);
            backdrop-filter: blur(5px);
        }
        border-radius: 1rem;
        margin-top: 1rem;
        overflow: hidden;
        flex-direction: column;
        max-height: ${({ isOpen }) => (isOpen ? '350px' : '0')};
        transition: max-height 0.3s ease-in;
        width: 100%;

        a {
            color: ${({ theme }) => theme.colors.blu};
        }
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
        background: ${({ theme }) => theme.colors.black};
        margin-bottom: 4px;
        border-radius: 5px;
    }
    @media (max-width: 1000px) {
        display: flex;
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
