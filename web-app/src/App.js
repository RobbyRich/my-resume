import './App.css';
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
function App() {
  return (
    <div>
      <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/experience">
          <Experience />
          </Route>
          <Route path="/projects">
          <Projects />
          </Route>
          <Route path="/contact">
          <Contact />
          </Route>
          <Route path="/aboutme">
          <AboutMe />
          </Route>
        </Switch>
    </Router>
        
    </div>
  );
}

export default App;
