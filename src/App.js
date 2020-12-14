import AboutMe from './Components/AboutMe';
import Resume from './Components/resume';
import Portefolio from './Components/portefolio';
import Header from './Components/Header/Header';

import { Container, Grid } from '@material-ui/core';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Container>
      <Grid container>

        <Grid item xs={12} sm={12} md={4} lg={3}>
          <AboutMe />
        </Grid>{/*item end*/}

        <Grid item xs>
          <Header />

          <Router>
            <Switch>

              <Route path='/portefolio'>
                <Portefolio />
              </Route>

              <Route path='/resume'>
                <Resume />
              </Route>

            </Switch>
          </Router>
        </Grid>{/*item end*/}

      </Grid>{/*grid container end*/}
    </Container>
  );
}

export default App;
