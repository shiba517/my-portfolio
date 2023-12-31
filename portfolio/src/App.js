import './App.css';
import { HeroSection } from './pages/HeroSection'
import { AboutSection } from './pages/AboutSection'
import { ProjectsSection } from "./pages/ProjectsSection";
import { Footer } from './pages/FooterSection';
import { Navigation } from './components/Navigation';
import { Tilt } from './components/Tilt';

function App() {
  return (
    <div className="App scroll-smooth bg-black">
      <div>
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <Tilt />
        <Footer />
      </div>
    </div>
  );
}

export default App;
