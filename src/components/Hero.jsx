import React, { useState } from 'react';
import { Sparkles, ArrowRight, ClipboardCheck, School, Users, Star, FileText, Search, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Hero({ setCurrentTab }) {
  const [heroSearch, setHeroSearch] = useState('');

  const handleActionClick = (targetId) => {
    setCurrentTab(targetId);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleActionClick('universities');
  };

  const metrics = [
    { icon: <School size={26} />, value: '100%', label: 'Admissions Support' },
    { icon: <Users size={26} />, value: '15+ Years', label: 'UK Education Expert' },
    { icon: <ClipboardCheck size={26} />, value: '98%', label: 'Visa Success Rate' },
    { icon: <Star size={26} />, value: '90%+', label: 'Student Satisfaction' }
  ];

  const partnerLogos = [
    'London School of Economics (LSE)',
    'University College London (UCL)',
    'Durham University',
    'University of Edinburgh',
    'University of Glasgow',
    'University of Manchester',
    'University of Greenwich',
    'Middlesex University',
    'BPP University'
  ];

  return (
    <section id="home" className="hero-section">
      {/* Background Decorative Glow */}
      <div className="hero-glow glow-1"></div>
      <div className="hero-glow glow-2"></div>

      <div className="container hero-container">
        {/* Left: Headline & Agency Value Statement */}
        <div className="hero-text animate-fade-in animate-delay-1">
          <div className="agency-badge">
            <span className="pulse-dot"></span>
            <Sparkles size={14} className="gold-spark" />
            <span>British Council Certified • 2026/2027 Admissions Open</span>
          </div>

          <h1 className="hero-title">
            Your Gateway to <br />
            <span className="gradient-gold">UK Academic Excellence</span>
          </h1>

          <p className="hero-description">
            Since 2008, Skyview Consultants has empowered over 15,000+ international students to gain admission into elite British universities. We handle your course matching, university applications, CAS visa compliance, and arrival orientation.
          </p>

          {/* Quick Search Widget */}
          <form className="hero-search-bar glass-card" onSubmit={handleSearchSubmit}>
            <Search className="hero-search-icon" size={22} />
            <input
              type="text"
              placeholder="Search UK university, course, or subject..."
              value={heroSearch}
              onChange={(e) => setHeroSearch(e.target.value)}
              className="hero-search-input"
            />
            <button type="submit" className="btn btn-primary hero-search-btn">
              Explore Universities
            </button>
          </form>

          {/* CTAs */}
          <div className="hero-actions">
            <button className="btn btn-accent btn-lg" onClick={() => handleActionClick('contact')}>
              Start Your Journey
              <ArrowRight size={20} />
            </button>
            <button className="btn btn-secondary btn-lg" onClick={() => handleActionClick('contract')}>
              Student Agreement
              <FileText size={20} />
            </button>
            <button className="btn btn-secondary btn-lg" onClick={() => handleActionClick('english-test')}>
              Test Your English
              <ClipboardCheck size={20} />
            </button>
          </div>
        </div>

        {/* Right: Agency Showcase Showcase */}
        <div className="hero-showcase animate-fade-in animate-delay-2">
          <div className="showcase-card glass-card">
            <div className="showcase-header">
              <ShieldCheck className="shield-icon" size={24} />
              <div className="showcase-header-text">
                <span className="showcase-tag">OFFICIAL REPRESENTATIVE</span>
                <h4 className="showcase-title">Direct UK University Admissions</h4>
              </div>
            </div>

            <div className="showcase-image-wrapper">
              <img 
                src="/library-students.png" 
                alt="International Students in UK University Library" 
                className="showcase-img"
              />
              <div className="floating-badge badge-top-right">
                <CheckCircle2 size={16} className="text-success" />
                <span>98% CAS Visa Success</span>
              </div>
              <div className="floating-badge badge-bottom-left">
                <Star size={16} className="text-gold" />
                <span>100% Admissions Care</span>
              </div>
            </div>

            <div className="showcase-footer">
              <div className="footer-stat">
                <span className="stat-num">15,000+</span>
                <span className="stat-lbl">Students Placed</span>
              </div>
              <div className="footer-divider"></div>
              <div className="footer-stat">
                <span className="stat-num">100+</span>
                <span className="stat-lbl">UK Institutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Counter Strip */}
      <div className="container hero-metrics animate-fade-in animate-delay-3">
        <div className="metrics-grid glass-card">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <div className="metric-icon">{metric.icon}</div>
              <div className="metric-text-box">
                <span className="metric-value">{metric.value}</span>
                <span className="metric-label">{metric.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ticker Logo Marquee */}
      <div className="partner-marquee-wrapper">
        <div className="marquee-label-box">
          <span className="marquee-label">TRUSTED ADMISSIONS PARTNER FOR LEADING UK UNIVERSITIES</span>
        </div>
        <div className="partner-marquee-container">
          <div className="marquee-track">
            {partnerLogos.concat(partnerLogos).concat(partnerLogos).map((uni, idx) => (
              <span key={idx} className="marquee-item">• {uni}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 130px;
          padding-bottom: 4rem;
          background: linear-gradient(180deg, #FFFFFF 0%, var(--bg-primary) 100%);
          position: relative;
          overflow: hidden;
        }

        @media (min-width: 992px) {
          .hero-section {
            padding-top: 165px;
            padding-bottom: 6rem;
          }
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          opacity: 0.45;
        }

        .glow-1 {
          width: 380px;
          height: 380px;
          background: rgba(0, 48, 120, 0.08);
          top: -50px;
          left: -100px;
        }

        .glow-2 {
          width: 420px;
          height: 420px;
          background: rgba(181, 138, 63, 0.12);
          top: 150px;
          right: -120px;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        @media (min-width: 992px) {
          .hero-container {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 4rem;
          }
        }

        .agency-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.55rem 1.25rem;
          border-radius: 99px;
          background: var(--primary-light);
          border: 1.5px solid rgba(0, 48, 120, 0.14);
          color: var(--primary);
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.02em;
          margin-bottom: 1.75rem;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.25);
        }

        .gold-spark {
          color: var(--accent-gold);
        }

        .hero-title {
          font-size: 2.5rem; /* 40px mobile */
          font-weight: 900;
          line-height: 1.18;
          letter-spacing: -0.04em;
          margin-bottom: 1.75rem;
          color: var(--text-primary);
        }

        @media (min-width: 992px) {
          .hero-title {
            font-size: 3.85rem; /* 62px desktop */
          }
        }

        .gradient-gold {
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.15rem; /* 18.5px mobile */
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 2.25rem;
          max-width: 600px;
        }

        /* Hero Search Widget */
        .hero-search-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 0.5rem 0.5rem 1.25rem !important;
          border-radius: 99px !important;
          margin-bottom: 2.25rem;
          box-shadow: var(--shadow-md) !important;
        }

        @media (max-width: 640px) {
          .hero-search-bar {
            flex-direction: column;
            border-radius: 20px !important;
            padding: 1rem !important;
            align-items: stretch;
          }
        }

        .hero-search-icon {
          color: var(--text-muted);
          flex-shrink: 0;
        }

        .hero-search-input {
          flex: 1;
          font-size: 16px;
          color: var(--text-primary);
        }

        .hero-search-btn {
          min-height: 48px;
          padding: 0.75rem 1.5rem;
          font-size: 0.95rem;
        }

        .hero-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }

        @media (min-width: 992px) {
          .hero-actions {
            flex-direction: row;
            flex-wrap: wrap;
          }
        }

        .hero-actions .btn {
          width: 100%;
          min-height: 56px;
          font-size: 1.1rem;
          padding: 1rem 1.75rem;
        }

        @media (min-width: 992px) {
          .hero-actions .btn {
            width: auto;
          }
        }

        /* Showcase Card */
        .hero-showcase {
          display: flex;
          justify-content: center;
        }

        .showcase-card {
          width: 100%;
          max-width: 480px;
          padding: 1.5rem !important;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .showcase-header {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .shield-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
        }

        .showcase-tag {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--accent-gold);
          letter-spacing: 0.08em;
        }

        .showcase-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .showcase-image-wrapper {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
        }

        .showcase-img {
          width: 100%;
          height: 280px;
          object-fit: cover;
          display: block;
        }

        .floating-badge {
          position: absolute;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(12px);
          padding: 0.5rem 0.95rem;
          border-radius: 99px;
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--text-primary);
          box-shadow: var(--shadow-sm);
        }

        .badge-top-right {
          top: 1rem;
          right: 1rem;
        }

        .badge-bottom-left {
          bottom: 1rem;
          left: 1rem;
        }

        .text-success { color: var(--success); }
        .text-gold { color: var(--accent-gold); }

        .showcase-footer {
          display: flex;
          align-items: center;
          justify-content: space-around;
          background: var(--bg-primary);
          padding: 0.85rem;
          border-radius: 14px;
          border: 1px solid var(--border-color);
        }

        .footer-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-num {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.25rem;
          color: var(--primary);
        }

        .stat-lbl {
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .footer-divider {
          width: 1px;
          height: 28px;
          background: var(--border-color);
        }

        .hero-metrics {
          margin-top: 4rem;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          padding: 2rem;
        }

        @media (min-width: 992px) {
          .metrics-grid {
            grid-template-columns: repeat(4, 1fr);
            padding: 2.5rem 3rem;
          }
        }

        .metric-card {
          display: flex;
          align-items: center;
          gap: 1.15rem;
        }

        .metric-icon {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .metric-text-box {
          display: flex;
          flex-direction: column;
        }

        .metric-value {
          font-family: var(--font-heading);
          font-size: 1.7rem;
          font-weight: 900;
          color: var(--text-primary);
          line-height: 1.1;
        }

        .metric-label {
          font-size: 0.95rem;
          color: var(--text-secondary);
          font-weight: 600;
        }

        /* Marquee Ticker */
        .partner-marquee-wrapper {
          margin-top: 3.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          width: 100%;
        }

        .marquee-label-box {
          text-align: center;
          padding: 0 1rem;
        }

        .marquee-label {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--accent);
          text-transform: uppercase;
        }

        .partner-marquee-container {
          background: var(--primary);
          color: #FFFFFF;
          padding: 0.9rem 0;
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
          display: flex;
        }

        .marquee-track {
          display: flex;
          gap: 2.5rem;
          white-space: nowrap;
          animation: marquee 30s linear infinite;
        }

        .marquee-item {
          font-size: 0.9rem;
          font-weight: 600;
          opacity: 0.92;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
