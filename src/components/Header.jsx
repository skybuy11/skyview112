import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header({ currentTab, setCurrentTab }) {
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
    { id: 'study-planner', label: 'Cost & Intakes' },
    { id: 'agent-guide', label: 'Student Guide' },
    { id: 'english-test', label: 'English Test' },
    { id: 'contract', label: 'Contract' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setCurrentTab(id);
    setIsOpen(false);

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 84;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
      <div className="container header-container">
        <div className="logo-container" onClick={() => handleNavClick('home')}>
          <img src="/logo.png" alt="Skyview Consultants Logo" className="logo-img" />
        </div>

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

        <div className="controls-container">
          <button
            className="btn btn-accent header-cta-btn"
            onClick={() => handleNavClick('contact')}
          >
            <span>Apply Now</span>
            <ArrowRight size={16} />
          </button>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

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
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(15, 41, 30, 0.08);
          transition: all 0.25s ease;
          padding: 0.75rem 0;
        }

        .header.scrolled {
          padding: 0.55rem 0;
          box-shadow: 0 6px 24px rgba(15, 41, 30, 0.06);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .logo-container {
          display: flex;
          align-items: center;
          cursor: pointer;
          flex-shrink: 0;
          margin-right: 0.5rem;
        }

        .logo-img {
          height: 46px;
          width: auto;
          object-fit: contain;
          transition: transform 0.2s ease;
        }

        .logo-container:hover .logo-img {
          transform: scale(1.02);
        }

        .desktop-nav {
          display: none;
          gap: 1.15rem;
          align-items: center;
          justify-content: center;
          flex: 1;
        }

        @media (min-width: 1120px) {
          .desktop-nav {
            display: flex;
          }
        }

        @media (min-width: 1240px) {
          .desktop-nav {
            gap: 1.5rem;
          }
        }

        .nav-link {
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.92rem;
          padding: 0.45rem 0.2rem;
          cursor: pointer;
          position: relative;
          white-space: nowrap;
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
          height: 2.5px;
          background: var(--accent-gold);
          border-radius: 99px;
        }

        .controls-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .header-cta-btn {
          display: none;
          padding: 0.6rem 1.35rem;
          min-height: 42px;
          font-size: 0.9rem;
          white-space: nowrap;
        }

        @media (min-width: 1120px) {
          .header-cta-btn {
            display: inline-flex;
          }
        }

        .mobile-menu-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          color: var(--text-primary);
          background: var(--bg-subtle);
          cursor: pointer;
          transition: background 0.2s;
        }

        @media (min-width: 1120px) {
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
          border-bottom: 1.5px solid var(--border-color);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          padding: 1.25rem 0 1.75rem 0;
        }

        .mobile-nav-container {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .mobile-nav-link {
          display: block;
          width: 100%;
          text-align: left;
          padding: 0.9rem 1.25rem;
          font-size: 1.08rem;
          font-weight: 700;
          color: var(--text-primary);
          border-radius: 12px;
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
