import AboutMe from './Components/AboutMe';
import Resume from './Components/resume';
import AdviceApi from './Components/AdviceApi';
import Portefolio from './Components/portefolio';
import Header from './Components/Header/Header';
import ThemeToggle from './Components/ThemeToggle'
import LandingPage from './Components/LandingPage/LandingPage';
import {Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Flip from 'react-reveal/Flip';
//o
import './App.css';
import ContainerMain from './Components/UI/containerMainStyle'
import Theme from './Theme'
import {ThemeStore} from './contexts/ThemeStore'

function App() {
  return (
    <ThemeStore>
    <Theme>
    <ContainerMain>
    {/* <Container className='containerMain'> */}
      <Grid container={true} spacing={3}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
        <ThemeToggle/>
          <Flip>
            <AboutMe />
          </Flip>
        </Grid>
        {/*item end*/}

        <Grid item  xs={12} sm={12} md={8} lg={9} className='mainGrid' >
          <Router>
            <Header />

            <Switch>
              <Route path='/' exact component={LandingPage}/>

              <Route path='/portefolio' component={Portefolio}/>

              <Route path='/resume' component={Resume}/>

              <Route path='/AdviceApi' component={AdviceApi}/>
            </Switch>
            
          </Router>
        </Grid>
        </Grid>
    </ContainerMain>
    </Theme>
    </ThemeStore>
  );
}

export default App;
