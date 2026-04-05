import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ResumeDownload } from './components/ResumeDownload';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingResumeButton } from './components/FloatingResumeButton';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <ResumeDownload />
          <Contact />
        </main>
        <Footer />
        <FloatingResumeButton />
      </div>
    </ThemeProvider>
  );
}