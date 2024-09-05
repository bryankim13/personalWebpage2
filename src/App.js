import './App.css';
import Home from './components/HomePage.js';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Timeline from './components/Timeline.js';
import Projects from './components/Projects.js';
import ContactMe from './components/ContactMe.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Timeline/>
      <Projects/>
      <ContactMe/>
    </div>
  );
}

export default App;
