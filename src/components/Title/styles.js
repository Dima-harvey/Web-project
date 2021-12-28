import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 30px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.blu};
    font-size: ${({ theme }) => theme.fonts.one}px;
    @media (max-width: 570px) {
        font-size: ${({ theme }) => theme.fonts.minOne}px;
    }
`
