import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Universities from './components/Universities';
import EnglishTest from './components/EnglishTest';
import StudentContract from './components/StudentContract';
import News from './components/News';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');

  // Handle active navigation tab highlighting on scroll
  useEffect(() => {
    const sections = ['home', 'services', 'universities', 'english-test', 'contract', 'news', 'about', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setCurrentTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-shell">
      {/* Navbar Header */}
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* Hero Banner */}
      <Hero setCurrentTab={setCurrentTab} />

      {/* Services Grid */}
      <Services />

      {/* University Search Database */}
      <Universities />

      {/* English Competence Test */}
      <EnglishTest setCurrentTab={setCurrentTab} />

      {/* Student-Agent Agreement */}
      <StudentContract />

      {/* UK Higher Education News */}
      <News />

      {/* About Company */}
      <About />

      {/* Contact Details */}
      <Contact />

      {/* Footer */}
      <Footer setCurrentTab={setCurrentTab} />

      <style>{`
        .app-shell {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: var(--bg-primary);
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
}
