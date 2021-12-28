import styled from 'styled-components'

import Box from '@/assets/PNG/Box.png'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.background};
    align-items: center;
    justify-content: center;
    width: 100%;
    z-index: 100;
`
export const TwoTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    color: ${({ theme }) => theme.colors.blu};
    width: 100%;
    height: 198px;
    margin-top: 10px;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fonts.four + 5}px;
    line-height: 101.8%;
    letter-spacing: -0.01em;
    @media (max-width: 670px) {
        width: 100%;
        height: 150px;
        font-size: ${({ theme }) => theme.fonts.three - 5}px;
    }
`
export const ThreeTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
    width: 100%;
    height: 90px;
    font-weight: normal;
    font-size: ${({ theme }) => theme.fonts.one + 5}px;
    line-height: 30px;
    color: #215ee9;
    @media (max-width: 670px) {
        width: 100%;
        height: 130px;
        font-size: ${({ theme }) => theme.fonts.one}px;
    }
`
export const Img = styled.img`
    height: 700px;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1000;
    object-fit: cover;
    @media (max-width: 670px) {
        height: 600px;
    }
    @media (max-width: 570px) {
        height: 400px;
    }
`
export const ImgLine = styled.img`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: absolute;
    top: 10px;
    left: 600px;
    right: 0;
    z-index: 1000;
`
export const ImgLineDown = styled.img`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: absolute;
    top: 700px;
    left: 0;
    right: 0;
    z-index: 1000;
`
export const ImgBox = styled.img`
    display: flex;
    position: absolute;
    top: 400px;
    left: 700px;
    z-index: 1;
`
export const ImgElipse = styled.img`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: absolute;
    top: 250px;
    left: 800px;
    z-index: 1;
`
export const Left = styled.div`
    width: 40%;
    @media (max-width: 640px) {
        width: 100%;
    }
`
export const ContainerBody = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    align-items: center;
    margin-top: 150px;
    /* min-width: 30%; */
    width: 90%;
    height: 100%;
    align-items: center;
    justify-content: center;
`
export const ContainerImage = styled.div`
    display: flex;
    background-image: url(${Box});
    background-repeat: no-repeat;
    background-position: right bottom;
    @media (max-width: 670px) {
        background-position: -30px 160px;
    }
    @media (max-width: 570px) {
        background-position: -130px 100px;
    }
`
export const ContainerLeft = styled.div`
    display: flex;
    height: 90%;
    width: 50%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    @media (max-width: 1300px) {
        width: 70%;
    }
    @media (max-width: 760px) {
        width: 100%;
    }
`
export const ContainerTitle = styled.div`
    display: flex;
    height: 400px;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
`
export const InfoBlock = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    justify-content: space-between;
`
export const BlockInfoWidth = styled.div`
    width: 25%;
`
export const InfoBlockText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ContainerArticle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
