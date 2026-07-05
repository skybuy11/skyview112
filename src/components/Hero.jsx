import React from 'react';
import { Sparkles, ArrowRight, ClipboardCheck, School, Users, Star } from 'lucide-react';

export default function Hero({ setCurrentTab }) {
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

  const metrics = [
    { icon: <School size={24} className="metric-icon-element" />, value: '100%', label: 'Admissions Support' },
    { icon: <Users size={24} className="metric-icon-element" />, value: '15+ Years', label: 'Trusted Advisor' },
    { icon: <ClipboardCheck size={24} className="metric-icon-element" />, value: '98%', label: 'Visa Success Rate' },
    { icon: <Star size={24} className="metric-icon-element" />, value: '90%+', label: 'Student Satisfaction' }
  ];

  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay-tint"></div>
      {/* Mobile-only opaque overlay for text legibility over background image */}
      <div className="hero-mobile-overlay"></div>
      
      {/* Decorative Glow Elements */}
      <div className="glow-bubble bubble-1"></div>
      <div className="glow-bubble bubble-2"></div>
      
      <div className="container hero-container grid-2">
        {/* Left: Text Content */}
        <div className="hero-text animate-fade-in animate-delay-1">
          <div className="trust-badge">
            <Sparkles size={11} className="badge-spark" />
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
              <ArrowRight size={18} />
            </button>
            <button className="btn btn-secondary btn-lg" onClick={() => handleActionClick('english-test')}>
              Test Your English
              <ClipboardCheck size={18} />
            </button>
          </div>
        </div>

        {/* Right: SVG UK Education Graphic + Testimonial overlays */}
        <div className="hero-graphics animate-fade-in animate-delay-2">
          <div className="card-3d-wrapper animate-float">
            {/* Inline SVG representing UK Education */}
            <div className="svg-education-illustration">
              <svg viewBox="0 0 500 400" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background glow circle */}
                <circle cx="250" cy="200" r="160" fill="var(--accent-light)" opacity="0.4" />
                <path d="M50 320 C 150 270, 350 370, 450 320" stroke="var(--accent)" strokeWidth="2" strokeDasharray="8 4" opacity="0.4" />
                
                {/* London landmark silhouettes */}
                <g stroke="var(--text-muted)" strokeWidth="2" opacity="0.25">
                  {/* Big Ben */}
                  <rect x="360" y="140" width="26" height="170" rx="2" fill="var(--bg-tertiary)" />
                  <path d="M360 140 L373 100 L386 140 Z" fill="var(--bg-tertiary)" />
                  <circle cx="373" cy="160" r="5" fill="var(--bg-primary)" />
                  
                  {/* London Eye */}
                  <circle cx="130" cy="230" r="50" />
                  <line x1="130" y1="230" x2="130" y2="180" />
                  <line x1="130" y1="230" x2="180" y2="230" />
                  <line x1="130" y1="230" x2="95" y2="195" />
                  <line x1="130" y1="230" x2="165" y2="265" />
                </g>

                {/* Open Book */}
                <g transform="translate(130, 240)">
                  <path d="M20 50 C 60 40, 110 50, 120 60 C 130 50, 180 40, 220 50 L220 10 L120 20 L20 10 Z" fill="var(--bg-secondary)" stroke="var(--text-primary)" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M120 20 L120 60" stroke="var(--text-primary)" strokeWidth="3" />
                  <path d="M40 25 H 95" stroke="var(--text-muted)" strokeWidth="2" />
                  <path d="M40 35 H 85" stroke="var(--text-muted)" strokeWidth="2" />
                  <path d="M40 45 H 95" stroke="var(--text-muted)" strokeWidth="2" />
                  <path d="M145 25 H 200" stroke="var(--text-muted)" strokeWidth="2" />
                  <path d="M145 35 H 190" stroke="var(--text-muted)" strokeWidth="2" />
                  <path d="M145 45 H 200" stroke="var(--text-muted)" strokeWidth="2" />
                </g>

                {/* Graduation Cap */}
                <g transform="translate(190, 80)">
                  <ellipse cx="60" cy="100" rx="45" ry="8" fill="var(--text-muted)" opacity="0.1" />
                  <path d="M32 68 C32 68, 32 85, 60 85 C88 85, 88 68, 88 68" fill="var(--text-primary)" stroke="var(--text-primary)" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M60 40 L115 58 L60 76 L5 58 Z" fill="var(--primary)" stroke="var(--text-primary)" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M60 58 L25 68 L25 84" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="22" y="84" width="6" height="10" rx="1" fill="var(--gold)" />
                </g>

                {/* Scroll Diploma */}
                <g transform="translate(290, 200)">
                  <rect x="0" y="0" width="22" height="80" rx="2" fill="var(--bg-secondary)" stroke="var(--text-primary)" strokeWidth="3" transform="rotate(-15)" />
                  <rect x="5" y="25" width="26" height="12" rx="1" fill="var(--gold)" transform="rotate(-15)" />
                </g>

                {/* Stars */}
                <g transform="translate(90, 110)">
                  <polygon points="8,0 10,5 16,6 12,10 13,16 8,13 3,16 4,10 0,6 6,5" fill="var(--gold)" />
                </g>
                <g transform="translate(370, 170)">
                  <polygon points="6,0 8,4 13,5 9,8 10,13 6,11 2,13 3,8 0,5 5,4" fill="var(--gold)" />
                </g>
              </svg>
            </div>
            
            {/* Student testimonials from new partner universities */}
            <div className="student-badge card-lse glass-card">
              <div className="student-avatar text-white bg-indigo-600">MDX</div>
              <div className="student-info">
                <span className="student-name">Al-Hassan M.</span>
                <span className="student-course">MSc Cybersecurity</span>
                <span className="student-uni">Middlesex University</span>
              </div>
            </div>

            <div className="student-badge card-edinburgh glass-card">
              <div className="student-avatar text-white bg-teal-600">GRE</div>
              <div className="student-info">
                <span className="student-name">Sarah S.</span>
                <span className="student-course">MBA International</span>
                <span className="student-uni">University of Greenwich</span>
              </div>
            </div>

            <div className="student-badge card-kcl glass-card">
              <div className="student-avatar text-white bg-red-600">BPP</div>
              <div className="student-info">
                <span className="student-name">Ahmed F.</span>
                <span className="student-course">LLM Legal Practice</span>
                <span className="student-uni">BPP University</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="container hero-metrics animate-fade-in animate-delay-3">
        <div className="metrics-grid glass">
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
          padding-bottom: 50px;
          position: relative;
          background-image: 
            linear-gradient(to right, var(--bg-primary) 35%, rgba(245, 247, 250, 0.9) 70%, rgba(245, 247, 250, 0.4) 100%),
            url('/uk-university-bg.png');
          background-size: cover;
          background-position: center right;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .hero-section {
            padding-top: 140px;
            padding-bottom: 80px;
          }
        }

        [data-theme="dark"] .hero-section {
          background-image: 
            linear-gradient(to right, var(--bg-primary) 40%, rgba(0, 0, 0, 0.95) 75%, rgba(0, 0, 0, 0.6) 100%),
            url('/uk-university-bg.png');
        }

        /* On mobile, replace the side gradient with a full-coverage dark overlay
           so the background image never bleeds through the text area */
        @media (max-width: 767px) {
          .hero-section {
            background-image:
              linear-gradient(rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.62)),
              url('/uk-university-bg.png');
            background-position: center center;
          }
          [data-theme="dark"] .hero-section {
            background-image:
              linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
              url('/uk-university-bg.png');
          }
        }

        /* Keep the radial accent glow on desktop only */
        .hero-overlay-tint {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 80% 20%, var(--accent-light), transparent 50%);
          z-index: 1;
          pointer-events: none;
        }

        @media (max-width: 767px) {
          .hero-overlay-tint {
            display: none; /* hide accent glow on mobile — not needed with solid dark bg */
          }
        }

        /* The mobile overlay div is now a safety net for any theming edge cases */
        .hero-mobile-overlay {
          display: none;
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .glow-bubble {
          display: none;
        }

        /* Hero text container must sit above everything */
        .hero-container {
          position: relative;
          z-index: 3;
          align-items: center;
        }

        /* On mobile, all hero text is forced white so it reads over the dark background */
        @media (max-width: 767px) {
          .hero-text .hero-title {
            color: #ffffff !important;
          }
          .hero-text .gradient-text {
            background: linear-gradient(135deg, #ffffff 10%, #d4a84b 100%) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-clip: text !important;
          }
          .hero-text .hero-description {
            color: rgba(255, 255, 255, 0.90) !important;
          }
          .hero-text .trust-badge {
            background: rgba(255, 255, 255, 0.15) !important;
            border-color: rgba(255, 255, 255, 0.35) !important;
            color: #ffffff !important;
          }
        }

        .trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.3rem 0.75rem;
          border-radius: 99px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-weight: 500;
          font-size: 0.65rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 1.75rem;
        }

        .badge-spark {
          color: var(--accent);
          animation: spin 6s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .hero-title {
          font-size: 2.15rem; /* Highly readable on small mobile screens */
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        @media (min-width: 480px) {
          .hero-title {
            font-size: 2.75rem;
          }
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 3.5rem;
          }
        }

        @media (min-width: 1024px) {
          .hero-title {
            font-size: 4.25rem;
          }
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--text-primary) 30%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.05rem;
          line-height: 1.65;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 540px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        @media (max-width: 480px) {
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions .btn {
            width: 100%;
          }
        }

        .hero-graphics {
          position: relative;
          height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        @media (max-width: 767px) {
          .hero-graphics {
            margin-top: 3rem;
            height: 300px;
          }
        }

        @media (max-width: 480px) {
          .hero-graphics {
            height: auto !important;
            margin-top: 1.5rem;
          }
        }

        .card-3d-wrapper {
          position: relative;
          width: 100%;
          max-width: 400px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .svg-education-illustration {
          width: 100%;
          height: 100%;
          max-height: 360px;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.01));
          opacity: 0.85;
        }

        .student-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          max-width: 230px;
          width: 85%;
          z-index: 10;
          background: var(--glass-bg);
          border: 1px solid var(--border-color);
          border-radius: 14px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        }

        .student-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.65rem;
          flex-shrink: 0;
          background: var(--border-color) !important;
          color: var(--text-primary) !important;
        }

        .student-info {
          display: flex;
          flex-direction: column;
        }

        .student-name {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.8rem;
        }

        .student-course {
          font-size: 0.7rem;
          color: var(--accent);
          font-weight: 500;
        }

        .student-uni {
          font-size: 0.65rem;
          color: var(--text-muted);
        }

        .card-lse {
          top: 10%;
          left: -20px;
          transform: rotate(-2deg);
        }

        @media (max-width: 640px) {
          .card-lse {
            left: 0;
          }
        }

        .card-edinburgh {
          top: 45%;
          right: -20px;
          transform: rotate(2deg);
        }

        @media (max-width: 640px) {
          .card-edinburgh {
            right: 0;
          }
        }

        .card-kcl {
          bottom: 5%;
          left: 0px;
          transform: rotate(-1deg);
        }

        @media (max-width: 480px) {
          .card-3d-wrapper {
            flex-direction: column;
            height: auto;
            gap: 0.75rem;
            padding: 1rem 0;
            max-width: 100%;
          }
          .svg-education-illustration {
            display: none !important;
          }
          .student-badge {
            position: relative !important;
            transform: none !important;
            left: auto !important;
            right: auto !important;
            top: auto !important;
            bottom: auto !important;
            margin: 0 auto;
            width: 100% !important;
            max-width: 100% !important;
          }
        }

        .hero-metrics {
          margin-top: 5rem;
          position: relative;
          z-index: 2;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          padding: 2.25rem;
          border-radius: 18px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
        }

        @media (min-width: 1024px) {
          .metrics-grid {
            grid-template-columns: repeat(4, 1fr);
            padding: 2.25rem 3.5rem;
          }
        }

        .metric-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.5rem 0;
        }

        .metric-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--accent-light);
          border: 1px solid rgba(181, 138, 63, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          flex-shrink: 0;
        }

        .metric-icon svg {
          width: 24px;
          height: 24px;
        }

        .metric-text-box {
          display: flex;
          flex-direction: column;
        }

        .metric-value {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .metric-label {
          font-size: 0.82rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        @media (max-width: 767px) {
          .metrics-grid {
            padding: 1.75rem;
            gap: 1.25rem;
          }
          .metric-card {
            padding: 0.75rem 0;
            border-bottom: 1px solid var(--border-color);
          }
          .metric-card:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
          .metric-card:first-child {
            padding-top: 0;
          }
        }

        @media (max-width: 480px) {
          .metrics-grid {
            grid-template-columns: 1fr;
            gap: 0;
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
