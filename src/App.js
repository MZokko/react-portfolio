import AboutMe from './Components/AboutMe';
import Content from './Components/Content';
import Resume from './Components/resume/index';
import Portefolio from './Components/portefolio/index'
import './App.css';
import { Container, Grid } from '@material-ui/core';


function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3} >
          <AboutMe/>
        </Grid>
        <Grid item xs >
          {/* <Header/> */}
          <Portefolio/>
          <Resume/>
        </Grid>
      </Grid>
    </Container>
    // <div className='App'>
    //   <AboutMe />
    //   <div>
    //       <Portefolio/>
    //       <Resume />
    //   </div>
      
    // </div>
  );
}

export default App;
