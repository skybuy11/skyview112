import React from 'react';
import { Award, Compass, Heart, CheckCircle } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Heart size={22} />,
      title: 'Student-First Approach',
      desc: 'We put the needs, dreams, and aspirations of our students at the absolute heart of everything we do, providing honest, unbiased advice.'
    },
    {
      icon: <Award size={22} />,
      title: 'Integrity & Transparency',
      desc: 'We operate with total honesty in all our university applications, visa evaluations, and financial requirements assessments.'
    },
    {
      icon: <Compass size={22} />,
      title: 'Continuous Excellence',
      desc: 'We continuously improve our consulting methods and stay up-to-date with changing UK higher education and Home Office visa regulations.'
    }
  ];

  const timelineData = [
    {
      year: '2008',
      title: 'Founding of Skyview Consultants',
      desc: 'Established in London with a mission to bridge international students with world-class British universities.'
    },
    {
      year: '2012',
      title: 'British Council Agent Certification',
      desc: 'Received official certification as a recognized British Council Agent, guaranteeing compliance with UK ethical standards.'
    },
    {
      year: '2018',
      title: 'Expansion of University Partnerships',
      desc: 'Expanded representative agreements covering leading Russell Group and modern career-focused UK universities.'
    },
    {
      year: '2026',
      title: 'Digital Platform Launch',
      desc: 'Over 15,000+ consults completed. Rebuilt our digital platforms to assist students worldwide with online agreement tools.'
    }
  ];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        {/* Intro Grid */}
        <div className="about-intro-grid">
          <div className="about-text-col">
            <span className="accent-label">WHO WE ARE</span>
            <h2 className="about-title">Trusted bridge to UK higher education since 2008</h2>
            <p>
              Skyview Consultants was established in 2008 with a clear mission: to empower ambitious international students by providing expert, tailored guidance throughout their educational journey to the United Kingdom.
            </p>
            <p>
              Founded by professionals with extensive experience in international student recruitment and university administration, we have grown into a trusted advisor helping students from over 30 countries secure entry into prestigious British institutions.
            </p>
          </div>

          <div className="about-graphic-col">
            <div className="about-img-card glass-card">
              <img src="/graduation-day.png" alt="UK University Graduation Day" className="about-img" />
              <div className="about-badge">
                <span>EST. 2008</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="about-values">
          <h3 className="sub-section-title">Our Core Values</h3>
          <div className="values-grid">
            {values.map((val, index) => (
              <div key={index} className="glass-card value-card">
                <div className="value-icon-box">{val.icon}</div>
                <h4>{val.title}</h4>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Bio */}
        <div className="about-team glass-card">
          <div className="team-grid">
            <div className="team-avatar-box">
              <div className="avatar-placeholder">
                <span>SA</span>
              </div>
            </div>
            <div className="team-info-box">
              <span className="team-role">Director & Certified Agent</span>
              <h3 className="team-name">Mr. Sharan Ahamed</h3>
              <p className="team-bio">
                A former University Admissions Director with over 20 years of experience in higher education administration. As a certified British Council agent, Mr. Ahamed has dedicated his career to facilitating international student access to UK universities.
              </p>
              <ul className="team-credentials">
                <li><CheckCircle size={16} className="text-accent" /> Former Admissions Director</li>
                <li><CheckCircle size={16} className="text-accent" /> British Council Certified Agent</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="about-timeline">
          <h3 className="sub-section-title">Our Journey</h3>
          <div className="timeline">
            {timelineData.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h4 className="timeline-item-title">{item.title}</h4>
                  <p className="timeline-item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: var(--bg-surface);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .about-intro-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
        }

        @media (min-width: 992px) {
          .about-intro-grid {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 3.5rem;
          }
        }

        .accent-label {
          color: var(--accent);
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 0.5rem;
        }

        .about-title {
          font-size: 1.85rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
        }

        @media (min-width: 640px) {
          .about-title {
            font-size: 2.25rem;
          }
        }

        .about-text-col p {
          font-size: 0.95rem;
          line-height: 1.65;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .about-img-card {
          padding: 0.5rem;
          position: relative;
          overflow: hidden;
        }

        .about-img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          border-radius: 14px;
        }

        @media (min-width: 640px) {
          .about-img {
            height: 320px;
          }
        }

        .about-badge {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: var(--accent);
          color: #FFFFFF;
          font-weight: 700;
          font-size: 0.75rem;
          padding: 0.35rem 0.85rem;
          border-radius: 99px;
        }

        .about-values {
          margin-top: 4rem;
        }

        .sub-section-title {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 2.25rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 768px) {
          .values-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        .value-card {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .value-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .value-card h4 {
          font-size: 1.1rem;
          font-weight: 700;
        }

        .value-card p {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .about-team {
          margin-top: 4rem;
        }

        .team-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          align-items: center;
        }

        @media (min-width: 768px) {
          .team-grid {
            grid-template-columns: 100px 1fr;
            gap: 2rem;
          }
        }

        .avatar-placeholder {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: var(--primary-light);
          border: 2px solid var(--primary);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.75rem;
          margin: 0 auto;
        }

        .team-role {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.06em;
        }

        .team-name {
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0.15rem 0 0.5rem 0;
        }

        .team-bio {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .team-credentials {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .team-credentials li {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .about-timeline {
          margin-top: 4rem;
        }

        .timeline {
          position: relative;
          max-width: 640px;
          margin: 0 auto;
          padding-left: 20px;
          border-left: 2px solid var(--border-color);
        }

        .timeline-item {
          position: relative;
          padding-bottom: 2rem;
          padding-left: 1.5rem;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: -27px;
          top: 4px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--accent);
          border: 3px solid var(--bg-surface);
        }

        .timeline-year {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.15rem;
          color: var(--accent);
        }

        .timeline-item-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0.2rem 0;
        }

        .timeline-item-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
