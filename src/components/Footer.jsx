import React from 'react';
import { Mail, Phone, MapPin, Award } from 'lucide-react';

export default function Footer({ setCurrentTab }) {
  const handleNavClick = (id) => {
    setCurrentTab(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 76;
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
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="brand-header" onClick={() => handleNavClick('home')}>
              <img src="/logo.png" alt="Skyview Consultants Logo" className="footer-logo-img" />
            </div>
            <p className="brand-desc">
              For over 15 years, Skyview Consultants has been the trusted bridge connecting international students with prestigious British universities.
            </p>
            
            <div className="bc-badge">
              <Award className="bc-badge-icon" size={22} />
              <div className="bc-badge-text">
                <span className="bc-title">British Council Approved</span>
                <span className="bc-desc">Certified & Verified Agent</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => handleNavClick('home')}>Home</button></li>
              <li><button onClick={() => handleNavClick('services')}>Services</button></li>
              <li><button onClick={() => handleNavClick('universities')}>Partner Universities</button></li>
              <li><button onClick={() => handleNavClick('english-test')}>English Assessment</button></li>
              <li><button onClick={() => handleNavClick('contract')}>Student Contract</button></li>
              <li><button onClick={() => handleNavClick('news')}>UK Education News</button></li>
              <li><button onClick={() => handleNavClick('about')}>About Us</button></li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="footer-links-col">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><button onClick={() => handleNavClick('services')}>Course Advice</button></li>
              <li><button onClick={() => handleNavClick('services')}>University Admissions</button></li>
              <li><button onClick={() => handleNavClick('services')}>Visa & Immigration</button></li>
              <li><button onClick={() => handleNavClick('services')}>Pre-Departure Briefings</button></li>
              <li><button onClick={() => handleNavClick('services')}>Accommodation Search</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-contact">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="contact-list">
              <li>
                <MapPin className="contact-icon" size={16} />
                <span>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, UK</span>
              </li>
              <li>
                <Mail className="contact-icon" size={16} />
                <a href="mailto:sharan@skyview.org.uk">sharan@skyview.org.uk</a>
              </li>
              <li>
                <Phone className="contact-icon" size={16} />
                <a href="tel:+447725355355">+44 7725 355355</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Skyview Consultants. All rights reserved. Registered in England & Wales.
          </p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <span className="divider">•</span>
            <a href="#terms">Terms of Representation</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: #FFFFFF;
          border-top: 1px solid var(--border-color);
          padding: 4rem 0 2rem 0;
          color: var(--text-secondary);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.25rem;
          margin-bottom: 3rem;
        }



        @media (min-width: 992px) {
          .footer-grid {
            grid-template-columns: 1.6fr 1fr 1fr 1.4fr;
            gap: 2.5rem;
          }
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-logo-img {
          height: 48px;
          width: auto;
          object-fit: contain;
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
          padding: 0.65rem 0.85rem;
          border-radius: 12px;
          background: var(--bg-primary);
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
          font-weight: 700;
          color: var(--text-primary);
        }

        .bc-desc {
          font-size: 0.65rem;
          color: var(--text-muted);
        }

        .footer-title {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-links button {
          color: var(--text-secondary);
          cursor: pointer;
          font-size: 0.85rem;
          text-align: left;
          transition: color 0.2s;
        }

        .footer-links button:hover {
          color: var(--primary);
        }

        .contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-list li {
          display: flex;
          gap: 0.65rem;
          font-size: 0.85rem;
          align-items: flex-start;
          line-height: 1.45;
        }

        .contact-icon {
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .footer-bottom {
          border-top: 1px solid var(--border-color);
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

        .copyright, .footer-legal {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .footer-legal {
          display: flex;
          gap: 0.5rem;
        }
      `}</style>
    </footer>
  );
}
