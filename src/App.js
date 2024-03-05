import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      
    </div>
  );
}

export default App;
