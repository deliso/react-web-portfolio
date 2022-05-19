import './App.css';
import { NavBar } from './components/navbar';
import { Home } from './components/home';
import { About } from './components/about';
import { Portfolio } from './components/portfolio';
import { Education } from './components/education';
import { Skills } from './components/skills';
import { WorkExperience } from './components/work-experience';
import { Contact } from './components/contact';
function App() {
  return (
    <div className="App">
      <div className='NavBar'>
        <NavBar />
      </div>
      <div className='Components'>
        <Home />
        <About />
        <Portfolio />
        <Skills/>
        <WorkExperience />
        <Education />
        <Contact />
      </div>
    </div>
  
  );
}

export default App;
