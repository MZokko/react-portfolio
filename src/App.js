import AboutMe from './Components/AboutMe';
import Content from './Components/Content';
import Resume from './Components/resume/index';
import Portefolio from './Components/portefolio/index'
import './App.css';


function App() {
  return (
    <div className='App'>
      <AboutMe />
      <div>
          <Portefolio/>
          <Resume />
      </div>
      
    </div>
  );
}

export default App;
