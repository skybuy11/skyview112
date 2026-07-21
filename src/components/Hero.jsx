import React from 'react';
import { Sparkles, ArrowRight, ClipboardCheck, School, Users, Star, FileText } from 'lucide-react';

export default function Hero({ setCurrentTab }) {
  const handleActionClick = (targetId) => {
    setCurrentTab(targetId);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 76;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const metrics = [
    { icon: <School size={22} />, value: '100%', label: 'Admissions Support' },
    { icon: <Users size={22} />, value: '15+ Years', label: 'Trusted UK Advisor' },
    { icon: <ClipboardCheck size={22} />, value: '98%', label: 'Visa Success Rate' },
    { icon: <Star size={22} />, value: '90%+', label: 'Student Satisfaction' }
  ];

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-text animate-fade-in animate-delay-1">
          <div className="trust-badge">
            <Sparkles size={13} className="badge-spark" />
            <span>🇬🇧 British Council Approved Agent • Trusted & Verified</span>
          </div>

          <h1 className="hero-title">
            Your Gateway to <br />
            <span className="gradient-text">UK Academic Excellence</span>
          </h1>

          <p className="hero-description">
            Since 2008, we've been dedicated to helping international students access world-class education in the United Kingdom. We guide you through course selection, university applications, visa processing, and pre-departure preparation.
          </p>

          <div className="hero-actions">
            <button className="btn btn-accent btn-lg" onClick={() => handleActionClick('contact')}>
              Start Your Journey
              <ArrowRight size={18} />
            </button>
            <button className="btn btn-secondary btn-lg" onClick={() => handleActionClick('contract')}>
              Student Agreement
              <FileText size={18} />
            </button>
            <button className="btn btn-secondary btn-lg" onClick={() => handleActionClick('english-test')}>
              Test Your English
              <ClipboardCheck size={18} />
            </button>
          </div>
        </div>

        {/* Right Column: Visual Artwork */}
        <div className="hero-graphics animate-fade-in animate-delay-2">
          <div className="hero-artwork-card glass-card">
            <img 
              src="/library-students.png" 
              alt="International Students in UK University" 
              className="hero-art-img"
            />
            <div className="hero-badge-overlay">
              <span className="overlay-tag">OFFICIAL AGENT</span>
              <p className="overlay-desc">Direct Admissions Partner with Top UK Universities</p>
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

      <style>{`
        .hero-section {
          padding-top: 100px;
          padding-bottom: 3.5rem;
          background: linear-gradient(180deg, #FFFFFF 0%, var(--bg-primary) 100%);
          position: relative;
        }

        @media (min-width: 768px) {
          .hero-section {
            padding-top: 130px;
            padding-bottom: 5.5rem;
          }
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }

        @media (min-width: 992px) {
          .hero-container {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 3.5rem;
          }
        }

        .trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.95rem;
          border-radius: 99px;
          background: var(--primary-light);
          border: 1px solid rgba(0, 48, 120, 0.14);
          color: var(--primary);
          font-weight: 600;
          font-size: 0.8rem;
          letter-spacing: 0.02em;
          margin-bottom: 1.5rem;
        }

        .badge-spark {
          color: var(--accent);
        }

        .hero-title {
          font-size: 2.25rem; /* 36px on mobile for maximum readability */
          font-weight: 800;
          line-height: 1.25;
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        @media (min-width: 992px) {
          .hero-title {
            font-size: 3.5rem;
          }
        }

        .gradient-text {
          color: var(--primary);
        }

        .hero-description {
          font-size: 1.15rem;
          line-height: 1.65;
          color: var(--text-secondary);
          margin-bottom: 2.25rem;
          max-width: 560px;
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

        .hero-graphics {
          display: flex;
          justify-content: center;
        }

        .hero-artwork-card {
          padding: 0.5rem;
          overflow: hidden;
          position: relative;
          width: 100%;
          max-width: 480px;
          border-radius: 20px;
        }

        .hero-art-img {
          width: 100%;
          height: 280px;
          object-fit: cover;
          border-radius: 16px;
        }

        @media (min-width: 640px) {
          .hero-art-img {
            height: 340px;
          }
        }

        .hero-badge-overlay {
          position: absolute;
          bottom: 1.25rem;
          left: 1.25rem;
          right: 1.25rem;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(12px);
          padding: 0.85rem 1.25rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
        }

        .overlay-tag {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.08em;
        }

        .overlay-desc {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .hero-metrics {
          margin-top: 3.5rem;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          padding: 1.5rem;
        }

        @media (min-width: 480px) {
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 992px) {
          .metrics-grid {
            grid-template-columns: repeat(4, 1fr);
            padding: 2rem 2.5rem;
          }
        }

        .metric-card {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .metric-icon {
          width: 46px;
          height: 46px;
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
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.1;
        }

        .metric-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}
