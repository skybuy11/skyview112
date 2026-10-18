import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Universities from './components/Universities';
import UKStudyPlanner from './components/UKStudyPlanner';
import AgentGuide from './components/AgentGuide';
import Testimonials from './components/Testimonials';
import EnglishTest from './components/EnglishTest';
import StudentContract from './components/StudentContract';
import News from './components/News';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingConcierge from './components/FloatingConcierge';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [standaloneGuide, setStandaloneGuide] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('page') === 'agent-guide';
  });

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      setStandaloneGuide(params.get('page') === 'agent-guide');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenStandaloneGuide = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('page', 'agent-guide');
    window.history.pushState({}, '', url);
    setStandaloneGuide(true);
    setCurrentTab('agent-guide');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToMainSite = (targetTab = 'home') => {
    const url = new URL(window.location.href);
    url.searchParams.delete('page');
    window.history.pushState({}, '', url);
    setStandaloneGuide(false);
    setCurrentTab(targetTab);
  };

  const handleTabSelect = (tabId) => {
    if (standaloneGuide) {
      handleBackToMainSite(tabId);
    } else {
      setCurrentTab(tabId);
    }
  };

  return (
    <div className="app-root">
      <Header currentTab={currentTab} setCurrentTab={handleTabSelect} />
      <main>
        {standaloneGuide ? (
          <AgentGuide
            isStandalonePage={true}
            onBackToSite={() => handleBackToMainSite('home')}
          />
        ) : (
          <>
            <Hero setCurrentTab={handleTabSelect} />
            <Services setCurrentTab={handleTabSelect} />
            <Universities setCurrentTab={handleTabSelect} />
            <UKStudyPlanner setCurrentTab={handleTabSelect} />
            <AgentGuide
              isStandalonePage={false}
              onOpenStandalone={handleOpenStandaloneGuide}
            />
            <Testimonials />
            <EnglishTest setCurrentTab={handleTabSelect} />
            <StudentContract />
            <News />
            <About />
            <Contact />
          </>
        )}
      </main>
      <Footer setCurrentTab={handleTabSelect} />
      <FloatingConcierge />
    </div>
  );
}
