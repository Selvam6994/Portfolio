import logo from './logo.svg';
import './App.css';
import Sidenav from './Sidenav';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Sidenav></Sidenav>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}

export default App;
