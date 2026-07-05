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
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Read from localStorage or fallback to system preference
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply theme to document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Handle active navigation tab highlighting on scroll
  useEffect(() => {
    const sections = ['home', 'services', 'universities', 'english-test', 'contract', 'news', 'about', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset for nav header

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

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="app-shell">
      {/* Navbar Header */}
      <Header 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
      />

      {/* Hero Home Banner */}
      <Hero setCurrentTab={setCurrentTab} />

      {/* Services Grid Checklists */}
      <Services />

      {/* University Search and Filter Database */}
      <Universities />

      {/* Interactive English Competence Test */}
      <EnglishTest setCurrentTab={setCurrentTab} />

      {/* Student-Agent Representation Agreement */}
      <StudentContract />

      {/* UK Higher Education News */}
      <News />

      {/* About Company Mission and Values Timeline */}
      <About />

      {/* Contact Form Details */}
      <Contact />

      {/* Common Footer */}
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
