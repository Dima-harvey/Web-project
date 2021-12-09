import styled from 'styled-components'
import bg from '@/assets/bg.png'

export const Container = styled.div`
display: flex;
flex-direction: column;
background: #bbdefb;
align-items: center;
justify-content: center;
min-width: 600px;
width: 100%;

`

export const TwoTitle = styled.div`
position: absolute;
width: 543px;
height: 198px;
margin-top: 30px;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 65px;
line-height: 101.8%;
/* or 66px */

letter-spacing: -0.01em;
color: #215EE9;
`
export const ThreeTitle = styled.div`
position: absolute;
width: 520px;
height: 90px;
margin-top: 250px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* or 150% */

color: #215EE9;

opacity: 0.7;
`
export const Img = styled.img`
height: 700px;
width: 555px;
justify-content: center;
align-items: center;


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
z-index: 5;

`
export const Container1 = styled.div`
display: flex;
justify-content: space-between; 
align-items: stretch;    

background-color: #bbdefb;
height: 100%;
padding: 15px;
gap: 5px;
`
export const ContainerImg = styled.div`
background: #ffecb3;
border-radius: 5px;
padding: 8px;
flex:0 1 auto
`
export const Left = styled.div`
  width: 40%;
  @media (max-width: 670px) {
    width: 100%;
    /* padding: 1rem; */
  }
`
export const InnerWrapper = styled.div`
  max-width: 1000px;
  height: 600px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  `
export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  /* margin: 2rem; */
  background-color: rgba(255, 255, 255, 0.9);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.5);
  }
`
export const TiltWrapper = styled.div`
  width: 5%;
  height: 5%;
  min-width: 400px;
  @media (max-width: 670px) {
    display: none;
  }
`
export const ContainerBody = styled.div`
 display: flex;
 flex-wrap: wrap-reverse;
 justify-content: space-between;
 align-items: center;
 margin-top: 150px;
  min-width: 40%;
 width: 80%;
 height: 100%;

 `

export const ContainerImage = styled.div`
dispay: flex;
`
export const ContainerLeft = styled.div`
display: flex;
height : 800px;
width : 500px;
flex-direction: column;
align-items: flex-start;
justify-content: center;

`
export const ContainerTitle = styled.div`
display: flex;
height : 400px;
width : 600px;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
`
export const InfoBlock = styled.div`
display: flex;
flex-direction: row;
margin-top: 20px;
justify-content: space-between;
`
export const BlockInfoOne = styled.div`
width : 200px;
`
export const BlockInfoTwo = styled.div`
width : 200px;
`
export const BlockInfoThree = styled.div`
width : 200px;
`
export const InfoBlockText = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: 1px solid yellow;
`
export const ContainerArticle = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
