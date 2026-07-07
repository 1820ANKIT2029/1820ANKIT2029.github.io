import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import About         from './components/About';
import Skills        from './components/Skills';
import CodingProfiles from './components/CodingProfiles';
import Projects      from './components/Projects';
import Contact       from './components/Contact';
import Footer        from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="bg-ap-bg min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <CodingProfiles />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
