import styled from 'styled-components'
export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: space-between;
width: 515px;
height: 68px;
border : 1px solid red;
margin-top: 20px;
background: #FFFFFF;
opacity: 0.6;
box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0531481), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0425185), 0px 20px 13px rgba(0, 0, 0, 0.035), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.0274815), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.0168519);
border-radius: 45px;
svg{
    width: 20px;
    height: 16px;
}
`
export const StyleInputs = styled.input`
font-size: 18px;
width: 60%;
padding: 10px;
margin: 10px;
border: none;
border-radius: 3px;
placeholder { color: rgba(0, 0, 0, 1);
}
`
