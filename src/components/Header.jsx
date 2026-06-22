import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, GraduationCap } from 'lucide-react';

export default function Header({ currentTab, setCurrentTab, isDarkMode, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { id: 'news', label: 'News' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setCurrentTab(id);
    setIsOpen(false);
    
    // Smooth scroll to the corresponding section if we are on the home page view
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of floating header
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
        {/* Logo */}
        <div className="logo-container" onClick={() => handleNavClick('home')}>
          <img src="/logo.png" alt="Skyview Consultants" className="logo-img" />
        </div>

        {/* Desktop Nav */}
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

        {/* Theme and Mobile Menu Controls */}
        <div className="controls-container">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="theme-icon text-yellow-400" size={20} />
            ) : (
              <Moon className="theme-icon text-indigo-900" size={20} />
            )}
          </button>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
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
                className={`mobile-nav-link py-6 px-4 border-b border-gray-100 w-full ${currentTab === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: transparent;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid transparent;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 1rem 0; /* Slightly reduced padding to match larger logo */
        }

        .header.scrolled,
        .header.menu-open {
          background: var(--glass-bg);
          border-bottom: 1px solid var(--border-color);
          box-shadow: var(--glass-shadow);
          padding: 0.5rem 0;
        }

        @media (max-width: 767px) {
          /* When menu is open on mobile, header bar must be fully solid — no transparency */
          .header.menu-open {
            background: var(--bg-secondary) !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            border-bottom: 1px solid var(--border-color) !important;
            box-shadow: none !important;
          }
          /* When NOT scrolled and NOT open, keep header transparent on mobile */
          .header:not(.scrolled):not(.menu-open) {
            background: transparent;
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
          }
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
          height: 64px; /* Larger, highly visible logo on desktop */
          width: auto;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        @media (max-width: 767px) {
          .logo-img {
            height: 76px; /* Substantially larger on mobile for maximum legibility */
          }
          .header {
            padding: 0.75rem 0;
          }
          .header.scrolled {
            padding: 0.45rem 0;
          }
        }

        [data-theme="dark"] .logo-img {
          filter: brightness(1.35) contrast(1.1); /* Crisper visibility on dark backgrounds */
        }

        .logo-container:hover .logo-img {
          transform: scale(1.02);
        }

        .desktop-nav {
          display: none;
          gap: 2rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex;
          }
        }

        .nav-link {
          background: none;
          border: none;
          color: var(--text-primary);
          font-weight: 400;
          font-size: 0.85rem; /* Precise editorial navigation */
          letter-spacing: -0.01em;
          opacity: 0.65;
          padding: 0.5rem 0;
          cursor: pointer;
          transition: opacity 0.25s ease;
        }

        .nav-link:hover {
          opacity: 1;
        }

        .nav-link.active {
          opacity: 1;
          font-weight: 550;
        }

        .controls-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .theme-toggle {
          background: transparent;
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-primary);
          opacity: 0.7;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .theme-toggle:hover {
          opacity: 1;
          background: var(--border-color);
          transform: scale(1.05);
        }

        .mobile-menu-toggle {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          opacity: 0.7;
          transition: opacity 0.2s;
        }

        .mobile-menu-toggle:hover {
          opacity: 1;
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
          border-top: 2px solid var(--accent);
          border-bottom: 1px solid var(--border-color);
          padding: 0.5rem 0 1rem 0;
          /* Fully opaque — never transparent so it never bleeds into hero */
          background: var(--bg-secondary);
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.18);
          z-index: 200;
        }

        [data-theme="dark"] .mobile-nav-drawer {
          background: var(--bg-secondary);
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.55);
        }

        .mobile-nav-container {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .mobile-nav-link {
          background: none;
          border: none;
          text-align: left;
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--text-primary);
          opacity: 0.85;
          cursor: pointer;
          transition: all 0.25s ease;
          display: block;
        }

        .mobile-nav-link:last-child {
          border-bottom: none !important;
        }

        .mobile-nav-link:hover {
          opacity: 1;
          color: var(--accent);
          padding-left: 0.25rem;
        }

        .mobile-nav-link.active {
          opacity: 1;
          color: var(--accent);
          font-weight: 600;
        }
      `}</style>
    </header>
  );
}
