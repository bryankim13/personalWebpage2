import './App.css';
import Home from './components/HomePage.js';
import Navbar from './components/NavbarComponent.js';
import About from './components/AboutPage.js';
import Timeline from './components/TimelinePage.js';
import Projects from './components/ProjectsPage.js';
import ContactMe from './components/ContactMePage.js';

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
