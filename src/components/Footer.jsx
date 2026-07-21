import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ setCurrentTab }) {
  const handleNav = (id) => {
    setCurrentTab(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 85;
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
          {/* Column 1: Brand Info */}
          <div className="footer-brand-col">
            <img src="/logo.png" alt="Skyview Logo" className="footer-logo-img" />
            <p className="brand-desc">
              Skyview Consultants UK Ltd is a British Council certified educational advisory helping international students secure admissions and visas for top UK universities since 2008.
            </p>
            <div className="verified-seal">
              <ShieldCheck size={18} className="text-gold" />
              <span>British Council Certified Agent • Ref: BC-UK-9821</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><button onClick={() => handleNav('home')}>Home</button></li>
              <li><button onClick={() => handleNav('services')}>Services</button></li>
              <li><button onClick={() => handleNav('universities')}>UK Universities</button></li>
              <li><button onClick={() => handleNav('english-test')}>English Test</button></li>
              <li><button onClick={() => handleNav('contract')}>Student Contract</button></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-links">
              <li><button onClick={() => handleNav('services')}>University Selection</button></li>
              <li><button onClick={() => handleNav('services')}>SOP & UCAS Lodging</button></li>
              <li><button onClick={() => handleNav('services')}>UK CAS Visa Clearance</button></li>
              <li><button onClick={() => handleNav('services')}>Campus Accommodation</button></li>
              <li><button onClick={() => handleNav('contact')}>Free Counseling</button></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">London Office</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={16} className="contact-icon" />
                <span>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, UK</span>
              </li>
              <li>
                <Mail size={16} className="contact-icon" />
                <a href="mailto:sharan@skyview.org.uk">sharan@skyview.org.uk</a>
              </li>
              <li>
                <Phone size={16} className="contact-icon" />
                <a href="tel:+447725355355">+44 7725 355355</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Skyview Consultants UK Ltd. All rights reserved.</p>
          <div className="legal-links">
            <span>AQF Compliant</span>
            <span>•</span>
            <span>UK GDPR Protection</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: #0F291E;
          color: #E2E8F0;
          padding: 5rem 0 2.5rem 0;
          border-top: 3px solid var(--accent-gold);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          margin-bottom: 3.5rem;
        }

        @media (min-width: 992px) {
          .footer-grid {
            grid-template-columns: 1.6fr 1fr 1fr 1.4fr;
            gap: 2.5rem;
          }
        }

        .footer-logo-img {
          height: 60px;
          margin-bottom: 1.25rem;
          background: #FFFFFF;
          padding: 0.35rem 0.75rem;
          border-radius: 12px;
        }

        .brand-desc {
          font-size: 1.05rem;
          line-height: 1.6;
          color: #94A3B8;
          margin-bottom: 1.25rem;
        }

        .verified-seal {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-gold);
          background: rgba(255, 255, 255, 0.06);
          padding: 0.45rem 0.85rem;
          border-radius: 99px;
        }

        .footer-col-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 1.25rem;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer-links button {
          color: #CBD5E1;
          font-size: 1.05rem;
          text-align: left;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .footer-links button:hover {
          color: var(--accent-gold);
        }

        .contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 1.05rem;
          color: #CBD5E1;
          line-height: 1.5;
        }

        .contact-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .contact-list a {
          color: #FFFFFF;
        }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.9rem;
          color: #94A3B8;
        }

        @media (min-width: 640px) {
          .footer-bottom {
            flex-direction: row;
          }
        }

        .legal-links {
          display: flex;
          gap: 0.5rem;
          color: var(--accent-gold);
          font-weight: 700;
        }
      `}</style>
    </footer>
  );
}
