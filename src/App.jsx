import React, { useState } from 'react';
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

  return (
    <div className="app-root">
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main>
        <Hero setCurrentTab={setCurrentTab} />
        <Services setCurrentTab={setCurrentTab} />
        <Universities setCurrentTab={setCurrentTab} />
        <EnglishTest setCurrentTab={setCurrentTab} />
        <StudentContract />
        <News />
        <About />
        <Contact />
      </main>
      <Footer setCurrentTab={setCurrentTab} />
    </div>
  );
}
