import './App.css';
import { HeroSection } from './pages/HeroSection'
import { AboutSection } from './pages/AboutSection'
import { ProjectsSection } from "./pages/ProjectsSection";
import { Footer } from './pages/FooterSection';

function App() {
  return (
    <div className="App">
      <div>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
