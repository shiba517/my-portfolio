import './App.css';
import { HeroSection } from './pages/HeroSection'
import { AboutSection } from './pages/AboutSection'

function App() {
  return (
    <div className="App">
      <div>
        <HeroSection />
        <AboutSection />
      </div>
    </div>
  );
}

export default App;
