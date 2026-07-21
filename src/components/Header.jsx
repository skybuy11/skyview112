import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ currentTab, setCurrentTab }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dismiss mobile menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event) => {
      const headerElement = document.querySelector('.header');
      if (headerElement && !headerElement.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'universities', label: 'Universities' },
    { id: 'english-test', label: 'English Test' },
    { id: 'contract', label: 'Contract' },
    { id: 'news', label: 'News' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setCurrentTab(id);
    setIsOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 76;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo */}
        <div className="logo-container" onClick={() => handleNavClick('home')}>
          <img src="/logo.png" alt="Skyview Consultants Logo" className="logo-img" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${currentTab === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="controls-container">
          <button 
            className="btn btn-accent header-cta-btn"
            onClick={() => handleNavClick('contact')}
          >
            Apply Now
          </button>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="mobile-nav-drawer animate-fade-in">
          <div className="container mobile-nav-container">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`mobile-nav-link ${currentTab === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
            <button 
              className="btn btn-accent mobile-drawer-cta"
              onClick={() => handleNavClick('contact')}
            >
              Start Free Consultation
            </button>
          </div>
        </div>
      )}

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-color);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 0.75rem 0;
        }

        .header.scrolled {
          padding: 0.5rem 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .header.menu-open {
          background: #FFFFFF !important;
          backdrop-filter: none;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-container {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .logo-img {
          height: 52px;
          width: auto;
          object-fit: contain;
          transition: transform 0.25s ease;
        }

        @media (max-width: 767px) {
          .logo-img {
            height: 58px;
          }
          .header {
            padding: 0.65rem 0;
          }
        }

        .desktop-nav {
          display: none;
          gap: 1.5rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex;
          }
        }

        .nav-link {
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.9rem;
          padding: 0.4rem 0.25rem;
          cursor: pointer;
          position: relative;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .nav-link.active {
          color: var(--primary);
          font-weight: 700;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--accent);
          border-radius: 99px;
        }

        .controls-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .header-cta-btn {
          display: none;
          padding: 0.5rem 1.25rem;
          min-height: 40px;
          font-size: 0.875rem;
        }

        @media (min-width: 992px) {
          .header-cta-btn {
            display: inline-flex;
          }
        }

        .mobile-menu-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          color: var(--text-primary);
          background: var(--bg-subtle);
          cursor: pointer;
          transition: background 0.2s;
        }

        @media (min-width: 1024px) {
          .mobile-menu-toggle {
            display: none;
          }
        }

        .mobile-nav-drawer {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #FFFFFF;
          border-bottom: 1px solid var(--border-color);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
          padding: 1rem 0 1.5rem 0;
        }

        .mobile-nav-container {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .mobile-nav-link {
          display: block;
          width: 100%;
          text-align: left;
          padding: 0.85rem 1rem;
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          border-radius: 10px;
          transition: all 0.2s;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          background: var(--primary-light);
          color: var(--primary);
        }

        .mobile-drawer-cta {
          margin-top: 1rem;
          width: 100%;
        }
      `}</style>
    </header>
  );
}
