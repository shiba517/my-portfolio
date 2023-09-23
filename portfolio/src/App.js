import './App.css';
import { HeroSection } from './pages/HeroSection'
import { AboutSection } from './pages/AboutSection'
import { ProjectsSection } from "./pages/ProjectsSection";
import { Footer } from './pages/FooterSection';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="App scroll-smooth">
      <div>
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
