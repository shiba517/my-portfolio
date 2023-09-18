import './App.css';
import { HeroSection } from './pages/HeroSection'
import { AboutSection } from './pages/AboutSection'
import { ProjectsSection } from "./pages/ProjectsSection";

function App() {
  return (
    <div className="App">
      <div>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </div>
  );
}

export default App;
