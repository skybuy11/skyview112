import React, { useState } from 'react';
import { BookOpen, GraduationCap, FileCheck, Compass, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const servicesData = [
    {
      id: 'selection',
      icon: <BookOpen size={24} />,
      title: 'University & Course Selection',
      shortDesc: 'Personalized matching based on academic background, budget, and career goals.',
      details: [
        'Academic transcript & GPA evaluation',
        'Course curriculum & career outcome matching',
        'Scholarship & funding eligibility check',
        'Location & cost of living advice (London vs regional)'
      ]
    },
    {
      id: 'application',
      icon: <GraduationCap size={24} />,
      title: 'Application Preparation',
      shortDesc: 'End-to-end guidance on personal statements, reference letters, and submission.',
      details: [
        'Bespoke Statement of Purpose (SOP) review',
        'Academic & professional reference guidance',
        'Portfolio & CV structuring',
        'Direct application submission & portal tracking'
      ]
    },
    {
      id: 'visa',
      icon: <FileCheck size={24} />,
      title: 'Visa & Immigration Guidance',
      shortDesc: 'Certified UK Student Visa (CAS) support ensuring full Home Office compliance.',
      details: [
        'Confirmation of Acceptance for Studies (CAS) review',
        'Financial evidence & bank statement verification',
        'UKVI visa application form assistance',
        'Credibility interview preparation'
      ]
    },
    {
      id: 'predeparture',
      icon: <Compass size={24} />,
      title: 'Arrival & Pre-Departure Briefing',
      shortDesc: 'Comprehensive orientation covering UK travel, banking, housing, and life.',
      details: [
        'Pre-departure orientation sessions',
        'Student accommodation booking support',
        'UK bank account & NHS registration guidance',
        'Airport pickup & UK orientation advice'
      ]
    }
  ];

  return (
    <section id="services" className="services-section section">
      <div className="container">
        <h2 className="section-title">Our Specialist Services</h2>
        <p className="section-subtitle">
          We provide end-to-end, personalized support at every stage of your journey to studying in the United Kingdom.
        </p>

        <div className="services-grid">
          {servicesData.map((service) => {
            const isActive = activeService === service.id;
            return (
              <div 
                key={service.id} 
                className={`glass-card service-card ${isActive ? 'active' : ''}`}
                onClick={() => setActiveService(isActive ? null : service.id)}
              >
                <div className="service-card-header">
                  <div className="service-icon-box">{service.icon}</div>
                  <div className="service-header-text">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-short-desc">{service.shortDesc}</p>
                  </div>
                </div>

                <div className={`service-details-container ${isActive ? 'expanded' : ''}`}>
                  <div className="service-details-divider"></div>
                  <h4 className="details-heading">What we cover:</h4>
                  <ul className="details-list">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="details-item">
                        <CheckCircle2 size={16} className="detail-check" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-expand-footer">
                  <span className="expand-text">
                    {isActive ? 'Show less' : 'View full checklist'}
                  </span>
                  <ChevronRight 
                    size={18} 
                    className={`expand-arrow ${isActive ? 'rotated' : ''}`} 
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .services-section {
          background-color: var(--bg-surface);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        .service-card {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .service-card-header {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .service-icon-box {
          background: var(--primary-light);
          color: var(--primary);
          width: 50px;
          height: 50px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.25s ease;
        }

        .service-card:hover .service-icon-box {
          background: var(--primary);
          color: #FFFFFF;
        }

        .service-header-text {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .service-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .service-short-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .service-details-container {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-details-container.expanded {
          max-height: 400px;
        }

        .service-details-divider {
          height: 1px;
          background: var(--border-color);
          margin: 1.25rem 0;
        }

        .details-heading {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
        }

        .details-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .details-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .detail-check {
          color: var(--success);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .service-expand-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.25rem;
          margin-top: 1.5rem;
          color: var(--primary);
          font-weight: 600;
          font-size: 0.85rem;
        }

        .expand-arrow {
          transition: transform 0.25s ease;
        }

        .expand-arrow.rotated {
          transform: rotate(90deg);
        }
      `}</style>
    </section>
  );
}
