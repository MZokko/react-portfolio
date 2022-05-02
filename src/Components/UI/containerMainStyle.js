import styled from 'styled-components';

const containerMainStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  /* background-color: aqua; */
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  /* padding-top: 60px; */
  /* padding-bottom: 60px;  */

  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
  }
`;

export default containerMainStyle;
