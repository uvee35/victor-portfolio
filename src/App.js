import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { Projects } from './components/Projects';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
     <Projects/>
      
    </div>
  );
}

export default App;
