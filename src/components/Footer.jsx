import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, Award, CheckCircle } from 'lucide-react';

export default function Footer({ setCurrentTab }) {
  const handleNavClick = (id) => {
    setCurrentTab(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="brand-header" onClick={() => handleNavClick('home')}>
              <img src="/logo.png" alt="Skyview Consultants" className="footer-logo-img" />
            </div>
            <p className="brand-desc">
              For over 15 years, we've been the trusted bridge connecting ambitious international students with prestigious UK universities.
            </p>
            {/* British Council Certified Badge */}
            <div className="bc-badge glass">
              <Award className="bc-badge-icon" size={24} />
              <div className="bc-badge-text">
                <span className="bc-title">British Council Approved</span>
                <span className="bc-desc">Trusted & Certified Agent</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => handleNavClick('home')}>Home</button></li>
              <li><button onClick={() => handleNavClick('services')}>Our Services</button></li>
              <li><button onClick={() => handleNavClick('universities')}>Partner Universities</button></li>
              <li><button onClick={() => handleNavClick('english-test')}>English Assessment</button></li>
              <li><button onClick={() => handleNavClick('news')}>UK Education News</button></li>
              <li><button onClick={() => handleNavClick('about')}>About Us</button></li>
            </ul>
          </div>

          {/* Core Services Links */}
          <div className="footer-links-col">
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-links">
              <li><button onClick={() => handleNavClick('services')}>Course Advice</button></li>
              <li><button onClick={() => handleNavClick('services')}>University Admissions</button></li>
              <li><button onClick={() => handleNavClick('services')}>Visa & Immigration</button></li>
              <li><button onClick={() => handleNavClick('services')}>Pre-Departure Briefings</button></li>
              <li><button onClick={() => handleNavClick('services')}>Accommodation Search</button></li>
              <li><button onClick={() => handleNavClick('services')}>Arrival Assistance</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-contact">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="contact-list">
              <li>
                <MapPin className="contact-icon text-accent" size={18} />
                <span>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</span>
              </li>
              <li>
                <Mail className="contact-icon text-accent" size={18} />
                <a href="mailto:info@skyviewconsultants.co.uk">info@skyviewconsultants.co.uk</a>
              </li>
              <li>
                <Phone className="contact-icon text-accent" size={18} />
                <a href="tel:+442071234567">+44 (0) 20 7123 4567</a>
              </li>
              <li>
                <div className="status-indicator">
                  <span className="dot pulse"></span>
                  <span className="status-text">We are open: Mon - Fri (09:00 - 17:00 GMT)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Skyview Consultants. All rights reserved. 
          </p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <span className="divider">|</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--bg-primary);
          border-top: 1px solid var(--border-color);
          padding: 4.5rem 0 2.5rem 0;
          color: var(--text-secondary);
          position: relative;
        }

        .footer-grid {
          gap: 2.5rem;
          margin-bottom: 3rem;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .brand-header {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .footer-logo-img {
          height: 55px; /* Proportional, visible footer logo */
          width: auto;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        @media (max-width: 767px) {
          .footer-logo-img {
            height: 46px;
          }
        }

        [data-theme="dark"] .footer-logo-img {
          filter: brightness(1.25); /* Subtle brightness boost for dark backgrounds */
        }

        .brand-desc {
          font-size: 0.85rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .bc-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          max-width: fit-content;
        }

        .bc-badge-icon {
          color: var(--accent);
        }

        .bc-badge-text {
          display: flex;
          flex-direction: column;
        }

        .bc-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .bc-desc {
          font-size: 0.65rem;
          color: var(--text-muted);
        }

        .footer-links-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .footer-title {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-primary);
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer-links button {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          font-size: 0.8rem;
          padding: 0;
          text-align: left;
          transition: all 0.2s ease;
        }

        .footer-links button:hover {
          color: var(--accent);
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .contact-list li {
          display: flex;
          gap: 0.75rem;
          font-size: 0.8rem;
          align-items: flex-start;
          line-height: 1.45;
        }

        .contact-icon {
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        .contact-list a {
          transition: color 0.2s;
        }

        .contact-list a:hover {
          color: var(--accent);
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.25rem;
        }

        .dot {
          width: 6px;
          height: 6px;
          background-color: var(--secondary);
          border-radius: 50%;
        }

        .dot.pulse {
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          animation: pulse 1.8s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 4px rgba(16, 185, 129, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
        }

        .status-text {
          font-size: 0.75rem;
          font-weight: 400;
          color: var(--text-muted);
        }

        .footer-bottom {
          border-top: 1px solid var(--border-color);
          margin-top: 3rem;
          padding-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: center;
          justify-content: space-between;
        }

        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row;
          }
        }

        .copyright {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .footer-legal {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .footer-legal a:hover {
          color: var(--accent);
        }

        .divider {
          color: var(--border-color);
        }
      `}</style>
    </footer>
  );
}
