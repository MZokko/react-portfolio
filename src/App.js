import AboutMe from './Components/AboutMe';
import Resume from './Components/resume';
import Portefolio from './Components/portefolio';
import Header from './Components/Header/Header';

import { Container, Grid } from '@material-ui/core';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Container className='containerMain'>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={4} lg={3} >
          <AboutMe />
        </Grid>
        {/*item end*/}

        <Grid item xs>
          <Router>

            <Header />
            
            <Switch>
              <Route path='/portefolio'>
                <Portefolio />
              </Route>

              <Route path='/'>
                <Resume />
              </Route>
            </Switch>
          </Router>
        </Grid>
        {/*item end*/}
      </Grid>
      {/*grid container end*/}
    </Container>
  );
}

export default App;
