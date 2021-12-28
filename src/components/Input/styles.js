import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 68px;
    background:  ${({ theme }) => theme.colors.white};
    opacity: 0.6;
    border-radius: 45px;
    svg {
        width: 20px;
        height: 16px;
    }
`
export const InputsStyle = styled.input`
    font-size: ${({ theme }) => theme.fonts.one}px;
    width: 70%;
    padding: ${({ theme }) => theme.padding.input}px;
    border: none;
    border-radius: 3px;
    @media (max-width: 570px) {
        width: 50%;
    }
    @media (max-width: 370px) {
        width: 40%;
    }
`
