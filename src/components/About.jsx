import React from 'react';
import { ShieldCheck, Target, Heart, Award, CheckCircle } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <ShieldCheck size={28} />,
      title: 'Ethical & Certified Representation',
      desc: 'Strictly adhering to British Council Agent Quality Framework (AQF) and UKVI compliance standards.'
    },
    {
      icon: <Target size={28} />,
      title: 'Precision University Matching',
      desc: 'Evaluating individual student academic profiles, career aspirations, and budgets for maximum acceptance rates.'
    },
    {
      icon: <Heart size={28} />,
      title: 'End-to-End Student Support',
      desc: 'Guiding students through course selection, UCAS lodging, CAS visa approvals, and UK campus housing.'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Skyview Consultants</h2>
        <p className="section-subtitle">
          Established in 2008, Skyview Consultants UK is a premier educational advisory dedicated to connecting international talent with world-class British universities.
        </p>

        <div className="about-grid">
          {/* Left Column: Image */}
          <div className="about-img-col glass-card">
            <img src="/graduation-day.png" alt="Graduation Day in UK" className="about-img" />
            <div className="about-badge-chip">
              <Award size={18} className="text-gold" />
              <span>15+ Years UK Advisory Leadership</span>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="about-text-col">
            <h3 className="about-heading">Empowering Global Students Since 2008</h3>
            <p>
              Skyview Consultants was founded with a singular mission: to eliminate the complexity and stress of applying to study in the United Kingdom. Based in Covent Garden, London, our team of certified educational advisors provides transparent, objective, and high-impact university placement services.
            </p>
            <p>
              Over the past 15 years, we have built direct working relationships with over 100 UK universities and colleges, successfully placing over 15,000 international students into undergraduate, postgraduate, and professional research programs across England, Scotland, Wales, and Northern Ireland.
            </p>

            <div className="about-stats-row">
              <div className="stat-pill">
                <span className="stat-pill-num">15,000+</span>
                <span className="stat-pill-lbl">Students Placed</span>
              </div>
              <div className="stat-pill">
                <span className="stat-pill-num">100+</span>
                <span className="stat-pill-lbl">UK Institutions</span>
              </div>
              <div className="stat-pill">
                <span className="stat-pill-num">98%</span>
                <span className="stat-pill-lbl">Visa Clearance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Feature */}
        <div className="leadership-card glass-card">
          <div className="leader-info">
            <span className="leader-tag">DIRECTOR & FOUNDER</span>
            <h3 className="leader-name">Mr. Sharan Ahamed</h3>
            <span className="leader-title">Certified UK Education Advisor • British Council Ref: BC-UK-9821</span>
            <p className="leader-bio">
              "Our commitment is centered on student success and total compliance integrity. We guide each applicant with personalized care, ensuring every document, application, and visa submission meets the highest British Council standards."
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="values-section">
          <h3 className="sub-title">Our Core Principles</h3>
          <div className="values-grid">
            {values.map((v, idx) => (
              <div key={idx} className="value-card glass-card">
                <div className="value-icon">{v.icon}</div>
                <h4 className="value-title">{v.title}</h4>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: #FFFFFF;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
          margin-bottom: 4rem;
        }

        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 0.9fr 1.1fr;
            gap: 4rem;
          }
        }

        .about-img-col {
          padding: 0.6rem !important;
          position: relative;
        }

        .about-img {
          width: 100%;
          height: 360px;
          object-fit: cover;
          border-radius: 16px;
        }

        .about-badge-chip {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          right: 1.5rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 0.85rem 1.25rem;
          border-radius: 99px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-primary);
          box-shadow: var(--shadow-md);
        }

        .about-heading {
          font-size: 2rem;
          font-weight: 900;
          margin-bottom: 1.25rem;
          line-height: 1.25;
        }

        .about-text-col p {
          font-size: 1.125rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }

        .about-stats-row {
          display: flex;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .stat-pill {
          display: flex;
          flex-direction: column;
        }

        .stat-pill-num {
          font-family: var(--font-heading);
          font-size: 1.75rem;
          font-weight: 900;
          color: var(--primary);
        }

        .stat-pill-lbl {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .leadership-card {
          background: var(--bg-primary) !important;
          border-color: rgba(0, 92, 59, 0.2) !important;
          padding: 2.25rem !important;
          margin-bottom: 4rem;
        }

        .leader-tag {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--accent-gold-dark);
          letter-spacing: 0.08em;
        }

        .leader-name {
          font-size: 1.6rem;
          font-weight: 900;
          margin: 0.25rem 0;
        }

        .leader-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--primary);
          display: block;
          margin-bottom: 1rem;
        }

        .leader-bio {
          font-size: 1.15rem;
          font-style: italic;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .sub-title {
          font-size: 1.75rem;
          font-weight: 900;
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
        }

        @media (min-width: 992px) {
          .values-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
        }

        .value-card {
          display: flex;
          flex-direction: column;
        }

        .value-icon {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .value-title {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 0.65rem;
        }

        .value-desc {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
