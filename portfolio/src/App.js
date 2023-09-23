import './App.css';
import { HeroSection } from './pages/HeroSection'
import { AboutSection } from './pages/AboutSection'
import { ProjectsSection } from "./pages/ProjectsSection";
import { Footer } from './pages/FooterSection';
import { Navigation } from './components/Navigation';
import {Wave} from './components/Wave'
import { Tilt } from './components/Tilt';

function App() {
  return (
    <div className="App scroll-smooth">
      <div>
        <Navigation />
        <HeroSection />
        <AboutSection />
        <Wave />
        <ProjectsSection />
        <Tilt />
        <Footer />
      </div>
    </div>
  );
}

export default App;
