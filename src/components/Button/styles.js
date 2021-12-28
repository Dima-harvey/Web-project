import styled from 'styled-components'

export const ButtonContainer = styled.button`
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
