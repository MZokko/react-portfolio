import AboutMe from './Components/AboutMe';
import Content from './Components/Content';
import Resume from './Components/resume/index';
import './App.css';

import Paper from '@material-ui/core/Paper';

function App() {
  return (
    <div className='App'>
      <AboutMe />
      <div>
        <Content />
        <Resume />
      </div>
    </div>
  );
}

export default App;
