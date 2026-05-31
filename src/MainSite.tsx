import { Navbar, Hero, About, Experience, Projects, Achievements, Tech, Footer } from './components';
import CommandPalette from './components/CommandPalette';

const MainSite = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Achievements />
      <Tech />
      <Footer />
      <CommandPalette />
    </div>
  );
};

export default MainSite;
