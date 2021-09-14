import styled from "styled-components";

export const AdviceContainer = styled.div`
width: 100%;
margin:0rem;
padding:1rem;
display:flex;
flex-direction:column;
justify-content: center;
align-items:center
`
export const CardAdvice = styled.div`
display:flex;
flex-direction:column;
background: rgba( 210, 28, 248, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;`

export const CardAdviceTitleSection = styled.div`
display:flex;
flex-direction:row;
flex-flow: nowrap;
justify-content:space-between;
`

export const CardAdviceContent = styled.div`
background: rgba( 210, 28, 248, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
padding: 1rem;
color:${(props) => props.theme.text};
margin-top:2rem;
`

export const AdviceButton = styled.button`
color:${(props) => props.theme.text};
border-radius: 0.5rem;
padding: 0.25rem;`