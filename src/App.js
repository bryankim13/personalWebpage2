import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

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
