import styled from 'styled-components'

export const Container = styled.div`
    h3 {
        font-style: Bold;
        font-size: ${({ theme }) => theme.fonts.four}px;
        line-height: 66px;
        line-height: 100%;
        align-items: left;
        vertical-align: top;
        letter-spacing: -4px;
        fill: solid ${({ theme }) => theme.colors.grey};
        @media (max-width: 570px) {
            font-size: ${({ theme }) => theme.fonts.two}px;
            line-height: 30px;
        }
    }
    p {
        font-style: Bold;
        font-size: ${({ theme }) => theme.fonts.one}px;
        align-items: left;
        vertical-align: top;
        fill: solid  ${({ theme }) => theme.colors.black};
        @media (max-width: 570px) {
            font-size: ${({ theme }) => theme.fonts.minOne}px;
        }
    }
`
