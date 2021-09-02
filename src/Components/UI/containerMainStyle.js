import styled from "styled-components";

const containerMainStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  /* background-color: aqua; */
  width: 100%;
  height:100%;
  background-color: ${(props) => props.theme.background};
  padding-top: 60px;
  padding-bottom: 60px; 

  @media only screen and (max-width: 800px){
    
    display: flex;
    flex-direction: column;
    padding-top: 30px;

  }
`;

export default containerMainStyle;