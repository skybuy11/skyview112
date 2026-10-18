import React from 'react';
import {
  Sparkles,
  ArrowRight,
  ClipboardCheck,
  School,
  Users,
  Star,
  FileText,
  CheckCircle2,
  ShieldCheck,
  BookOpen
} from 'lucide-react';

export default function Hero({ setCurrentTab }) {
  const handleActionClick = (targetId) => {
    setCurrentTab(targetId);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 84;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const metrics = [
    { icon: <School size={26} />, value: '100%', label: 'Admissions Support' },
    { icon: <Users size={26} />, value: '15+ Years', label: 'UK Education Expert' },
    { icon: <ClipboardCheck size={26} />, value: '98%', label: 'Visa Success Rate' },
    { icon: <Star size={26} />, value: '90%+', label: 'Student Satisfaction' }
  ];

  const partnerLogos = [
    'University of Greenwich',
    'Middlesex University London',
    'BPP University',
    'Coventry University',
    'University of Sunderland',
    'De Montfort University',
    'University of Chester',
    'University of Hertfordshire',
    'University of East London',
    'University of Portsmouth'
  ];

  return (
    <section id="home" className="hero-section">
      <div className="hero-glow glow-1"></div>
      <div className="hero-glow glow-2"></div>

      <div className="container hero-container">
        {/* Left Column: Clean Executive Headline, Value Proposition & CTAs */}
        <div className="hero-text animate-fade-in animate-delay-1">
          <div className="agency-badge">
            <span className="pulse-dot"></span>
            <Sparkles size={14} className="gold-spark" />
            <span>Official British Council Certified Agent • 2026/27 Intake</span>
          </div>

          <h1 className="hero-title">
            Shape Your Future at <br />
            <span className="gradient-gold">Top UK Universities</span>
          </h1>

          <p className="hero-description">
            Since 2008, Skyview Consultants has guided over 15,000 international students into leading British universities. We provide transparent, ethical support across course selection, UCAS applications, CAS visa compliance, and UK student housing.
          </p>

          {/* Clean Action CTAs */}
          <div className="hero-actions">
            <button className="btn btn-accent btn-lg" onClick={() => handleActionClick('contact')}>
              <span>Start Free Application</span>
              <ArrowRight size={19} />
            </button>
            <button className="btn btn-primary btn-lg" onClick={() => handleActionClick('agent-guide')}>
              <BookOpen size={19} />
              <span>Student & Parent Guide</span>
            </button>
            <button className="btn btn-secondary btn-lg" onClick={() => handleActionClick('contract')}>
              <FileText size={19} />
              <span>Student Agreement</span>
            </button>
          </div>

          {/* Official Accreditation & Compliance Strip */}
          <div className="accreditation-strip">
            <div className="accred-item">
              <CheckCircle2 size={16} className="text-success" />
              <span>UK Agent Quality Framework (AQF)</span>
            </div>
            <div className="accred-item">
              <CheckCircle2 size={16} className="text-success" />
              <span>British Council Certified Counsellor</span>
            </div>
            <div className="accred-item">
              <CheckCircle2 size={16} className="text-success" />
              <span>Zero Hidden Fees Pledge</span>
            </div>
          </div>
        </div>

        {/* Right Column: Executive Showcase Card */}
        <div className="hero-showcase animate-fade-in animate-delay-2">
          <div className="showcase-card glass-card">
            <div className="showcase-header">
              <div className="shield-badge-box">
                <ShieldCheck className="shield-icon" size={24} />
              </div>
              <div className="showcase-header-text">
                <span className="showcase-tag">DIRECT ADMISSIONS PARTNER</span>
                <h4 className="showcase-title">Official UK University Representation</h4>
              </div>
            </div>

            <div className="showcase-image-wrapper">
              <img
                src="/library-students.png"
                alt="International Students studying in UK University Library"
                className="showcase-img"
              />
              <div className="floating-badge badge-top-right">
                <CheckCircle2 size={16} className="text-success" />
                <span>98% CAS Visa Rate</span>
              </div>
              <div className="floating-badge badge-bottom-left">
                <Star size={16} className="text-gold" />
                <span>100% Application Review</span>
              </div>
            </div>

            <div className="showcase-footer">
              <div className="footer-stat">
                <span className="stat-num">15,000+</span>
                <span className="stat-lbl">Students Enrolled</span>
              </div>
              <div className="footer-divider"></div>
              <div className="footer-stat">
                <span className="stat-num">100+</span>
                <span className="stat-lbl">UK Institutions</span>
              </div>
              <div className="footer-divider"></div>
              <div className="footer-stat">
                <span className="stat-num">Free</span>
                <span className="stat-lbl">Admissions Advisory</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
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
          padding-top: 115px;
          padding-bottom: 4rem;
          background: linear-gradient(180deg, #FFFFFF 0%, var(--bg-primary) 100%);
          position: relative;
          overflow: hidden;
        }

        @media (min-width: 992px) {
          .hero-section {
            padding-top: 145px;
            padding-bottom: 6rem;
          }
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          opacity: 0.4;
        }

        .glow-1 {
          width: 380px;
          height: 380px;
          background: rgba(0, 92, 59, 0.08);
          top: -50px;
          left: -100px;
        }

        .glow-2 {
          width: 420px;
          height: 420px;
          background: rgba(212, 175, 55, 0.12);
          top: 150px;
          right: -120px;
        }

        .hero-container {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 3rem;
          align-items: center;
          width: 100%;
          max-width: 100%;
        }

        @media (min-width: 992px) {
          .hero-container {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 4rem;
          }
        }

        .hero-text {
          min-width: 0;
          max-width: 100%;
        }

        .agency-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 1.15rem;
          border-radius: 99px;
          background: var(--primary-light);
          border: 1.5px solid rgba(0, 92, 59, 0.14);
          color: var(--primary);
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.01em;
          margin-bottom: 1.5rem;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--success);
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.25);
        }

        .gold-spark {
          color: var(--accent-gold);
        }

        .hero-title {
          font-size: 2.75rem;
          font-weight: 800;
          line-height: 1.16;
          letter-spacing: -0.018em;
          margin-bottom: 1.35rem;
          color: var(--text-primary);
        }

        @media (min-width: 992px) {
          .hero-title {
            font-size: 3.75rem;
          }
        }

        .gradient-gold {
          background: var(--gold-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 2.25rem;
          max-width: 610px;
        }

        .hero-actions {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          width: 100%;
          margin-bottom: 2rem;
        }

        @media (min-width: 992px) {
          .hero-actions {
            flex-direction: row;
            flex-wrap: wrap;
          }
        }

        .hero-actions .btn {
          width: 100%;
          min-height: 52px;
          font-size: 1rem;
          padding: 0.85rem 1.5rem;
          white-space: nowrap;
        }

        @media (min-width: 992px) {
          .hero-actions .btn {
            width: auto;
          }
        }

        .accreditation-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
          padding-top: 1.35rem;
          border-top: 1px solid var(--border-color);
        }

        .accred-item {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .hero-showcase {
          display: flex;
          justify-content: center;
        }

        .showcase-card {
          width: 100%;
          max-width: 500px;
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

        .shield-badge-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(212, 175, 55, 0.14);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .shield-icon {
          color: var(--accent-gold-dark);
        }

        .showcase-tag {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--accent-gold-dark);
          letter-spacing: 0.06em;
          display: block;
          margin-bottom: 0.15rem;
        }

        .showcase-title {
          font-size: 1.08rem;
          font-weight: 700;
          letter-spacing: -0.01em;
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
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          padding: 0.45rem 0.95rem;
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
        .text-primary { color: var(--primary); }

        .showcase-footer {
          display: flex;
          align-items: center;
          justify-content: space-around;
          background: var(--bg-primary);
          padding: 0.9rem;
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
          font-weight: 800;
          font-size: 1.2rem;
          color: var(--primary);
        }

        .stat-lbl {
          font-size: 0.74rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .footer-divider {
          width: 1px;
          height: 28px;
          background: var(--border-color);
        }

        .hero-metrics {
          margin-top: 3.5rem;
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
            padding: 2.25rem 2.75rem;
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
          font-size: 1.65rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.15;
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
          color: var(--accent-gold-dark);
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
