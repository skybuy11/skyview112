import React from 'react';
import { Award, Compass, Heart, Users, GraduationCap, CheckCircle } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Heart size={24} />,
      title: 'Student-First Approach',
      desc: 'We put the needs, dreams, and aspirations of our students at the absolute heart of everything we do, providing honest advice.'
    },
    {
      icon: <Award size={24} />,
      title: 'Integrity & Transparency',
      desc: 'We operate with total honesty in all our university applications, visa evaluations, and financial requirements assessments.'
    },
    {
      icon: <Compass size={24} />,
      title: 'Continuous Excellence',
      desc: 'We continuously improve our consulting methods and stay up-to-date with changing UK higher education and visa regulations.'
    }
  ];

  const timelineData = [
    {
      year: '2008',
      title: 'Founding of Skyview Consultants',
      desc: 'Established with a mission to bridge the gap between international students and world-class British universities.'
    },
    {
      year: '2012',
      title: 'British Council Certification',
      desc: 'Received official certification as a recognized British Council Agent, guaranteeing compliance with high ethical standards.'
    },
    {
      year: '2018',
      title: 'Expansion of University Partners',
      desc: 'Expanded our official representative agreements to cover leading Russell Group and modern career-focused UK universities.'
    },
    {
      year: '2022',
      title: 'MENA & Sudan Support Services',
      desc: 'Successfully established dedicated channels to support admissions and visa applications for students from the Middle East and Sudan.'
    },
    {
      year: '2026',
      title: 'Going Digital',
      desc: 'Over 15,000+ consults completed. Rebuilt our digital platforms to assist students worldwide with advanced evaluation tools.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Intro */}
        <div className="about-intro grid-2">
          <div className="about-intro-text">
            <span className="accent-label">WHO WE ARE</span>
            <h2 className="about-title">Trusted bridge to UK higher education since 2008</h2>
            <p>
              Skyview Consultants was established in 2008 with a clear mission: to empower ambitious international students by providing expert, tailored guidance throughout their educational journey to the United Kingdom.
            </p>
            <p>
              Founded by professionals with extensive experience in international student recruitment and university administration, we have grown from a small London office to a trusted advisor helping students from over 30 countries secure entry into prestigious British institutions.
            </p>
          </div>

          <div className="about-intro-graphic">
            <div className="about-image-wrapper glass animate-fade-in">
              <img src="/graduation-day.png" alt="UK University Graduation Day" className="about-img" />
              <div className="about-image-badge">
                <span>EST. 2008</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="about-values">
          <h3 className="sub-section-title">Our Core Values</h3>
          <div className="grid-3 values-grid">
            {values.map((val, index) => (
              <div key={index} className="glass-card value-card">
                <div className="value-icon-box">{val.icon}</div>
                <h4>{val.title}</h4>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Leader */}
        <div className="about-team glass">
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
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div 
                  key={index} 
                  className={`timeline-item ${isLeft ? 'timeline-left' : 'timeline-right'}`}
                >
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <h4 className="timeline-item-title">{item.title}</h4>
                    <p className="timeline-item-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
        }

        .accent-label {
          color: var(--accent);
          font-weight: 600;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.5rem;
        }

        .about-title {
          font-size: 2rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          line-height: 1.2;
          letter-spacing: -0.025em;
        }

        .about-intro-text {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .about-intro-text p {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .about-intro-graphic {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-image-wrapper {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          box-shadow: none;
          height: 380px;
          width: 100%;
          max-width: 450px;
        }

        .about-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .about-image-wrapper:hover .about-img {
          transform: scale(1.02);
        }

        .about-image-badge {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: var(--accent);
          color: #ffffff;
          font-weight: 600;
          font-size: 0.75rem;
          padding: 0.4rem 0.95rem;
          border-radius: 99px;
        }

        /* Values styles */
        .about-values {
          margin-top: 5rem;
        }

        .sub-section-title {
          text-align: center;
          font-size: 1.75rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 3.5rem;
          letter-spacing: -0.02em;
        }

        .value-card {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          padding: 2.25rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          box-shadow: none;
        }

        .value-card:hover {
          transform: translateY(-2px);
          border-color: var(--accent);
          background: var(--bg-secondary);
          box-shadow: var(--card-shadow-hover);
        }

        .value-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .value-card h4 {
          font-size: 1.1rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        .value-card p {
          font-size: 0.9rem;
          line-height: 1.55;
          color: var(--text-secondary);
        }

        /* Team Leader Card */
        .about-team {
          margin-top: 5rem;
          padding: 3rem;
          border-radius: 18px;
          border: 1px solid var(--border-color);
          background: var(--bg-primary);
        }

        @media (max-width: 767px) {
          .about-team {
            padding: 1.5rem;
            margin-top: 3rem;
          }
        }

        .team-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }

        @media (min-width: 768px) {
          .team-grid {
            grid-template-columns: 1fr 3fr;
          }
        }

        .team-avatar-box {
          display: flex;
          justify-content: center;
        }

        .avatar-placeholder {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          font-size: 2.25rem;
          font-family: var(--font-heading);
          font-weight: 600;
        }

        .team-info-box {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .team-role {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent);
        }

        .team-name {
          font-size: 1.6rem;
          color: var(--text-primary);
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .team-bio {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .team-credentials {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem 1.5rem;
        }

        .team-credentials li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 550;
          color: var(--text-secondary);
        }

        /* Timeline styles - Editorial thread */
        .about-timeline {
          margin-top: 5rem;
        }

        .timeline {
          position: relative;
          max-width: 680px;
          margin: 0 auto;
        }

        .timeline::after {
          content: '';
          position: absolute;
          width: 1px;
          background-color: var(--border-color);
          top: 0.75rem;
          bottom: 1rem;
          left: 20px;
          margin-left: 0;
        }

        .timeline-item {
          padding: 0 0 2rem 45px !important;
          position: relative;
          width: 100% !important;
          left: 0 !important;
        }

        .timeline-item::after {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          left: 15px !important;
          right: auto !important;
          background-color: var(--bg-secondary);
          border: 2px solid var(--accent);
          top: 0.5rem;
          border-radius: 50%;
          z-index: 1;
        }

        .timeline-content {
          padding: 0;
          background: transparent;
          border: none;
          border-radius: 0;
          box-shadow: none;
        }

        .timeline-year {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--accent);
          display: block;
          margin-bottom: 0.25rem;
          line-height: 1.1;
        }

        .timeline-item-title {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
        }

        .timeline-item-desc {
          font-size: 0.9rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
