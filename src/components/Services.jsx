import React, { useState } from 'react';
import { BookOpen, FileText, Landmark, Compass, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const servicesData = [
    {
      id: 'course-selection',
      icon: <BookOpen size={32} />,
      title: 'University & Course Selection',
      shortDesc: 'Discover the ideal academic path tailored to your profile, interests, and professional aspirations.',
      details: [
        'Academic profile evaluation and personalized consultancy',
        'Detailed recommendations on UK universities matching your GPA and goals',
        'Expert guidance on course curriculum, modules, and employability outlook',
        'Advising on university tier options (Russell Group, specialist institutions)'
      ]
    },
    {
      id: 'application-support',
      icon: <FileText size={32} />,
      title: 'Application Preparation & Support',
      shortDesc: 'Submit compelling, polished applications that stand out to UK admissions officers.',
      details: [
        'Personal statement brainstorming, structuring, and multi-round review',
        'Guidance on academic and professional reference letters (formatting and requirements)',
        'Standardized test requirements advice and application portal tracking',
        'Mock interview sessions for competitive universities requiring admission interviews'
      ]
    },
    {
      id: 'visa-support',
      icon: <Landmark size={32} />,
      title: 'Visa & Immigration Support',
      shortDesc: 'Navigate the complex student visa process with complete confidence and guidance.',
      details: [
        'Detailed document checklist tailored to your nationality and visa regulations',
        'Expert guidance on meeting Home Office financial requirements and funding proof',
        'CAS (Confirmation of Acceptance for Studies) verification and review',
        'Step-by-step assistance with online visa forms and booking biometric appointments'
      ]
    },
    {
      id: 'pre-departure',
      icon: <Compass size={32} />,
      title: 'Arrival & Pre-Departure Support',
      shortDesc: 'Prepare for a smooth transition to life and learning in the United Kingdom.',
      details: [
        'Comprehensive pre-departure briefings (packing lists, border control tips)',
        'Assistance in searching for and securing university or private student accommodation',
        'Guidance on setting up UK bank accounts, mobile SIMs, and GP health registrations',
        'Coordination of airport pickup services and campus arrival logistics support'
      ]
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Our Comprehensive Services</h2>
        <p className="section-subtitle">
          From your initial inquiry to your first week on campus, our certified team provides full support every step of the way.
        </p>

        <div className="grid-2 services-grid">
          {servicesData.map((service, index) => {
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
          background-color: var(--bg-secondary);
          position: relative;
          border-top: 1px solid var(--border-color);
        }

        .services-grid {
          margin-top: 1.5rem;
        }

        .service-card {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2.5rem;
          min-height: 240px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          box-shadow: none;
        }

        @media (max-width: 480px) {
          /* Force single-column stacking for service cards on small phones */
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .service-card {
            padding: 1rem !important;
            min-height: unset;
          }
        }

        .service-card:hover {
          transform: translateY(-2px);
          border-color: var(--accent);
          background: var(--bg-secondary);
          box-shadow: var(--card-shadow-hover);
        }

        .service-card-header {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }

        @media (max-width: 640px) {
          .service-card-header {
            flex-direction: column;
            gap: 1rem;
          }
        }

        .service-icon-box {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--accent);
          width: 54px;
          height: 54px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-card:hover .service-icon-box {
          background: var(--accent);
          color: #ffffff;
          border-color: var(--accent);
        }

        .service-header-text {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .service-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }

        .service-short-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .service-details-container {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-details-container.expanded {
          max-height: 500px;
        }

        .service-details-divider {
          height: 1px;
          background: var(--border-color);
          margin: 1.5rem 0;
        }

        .details-heading {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          margin-bottom: 0.85rem;
        }

        .details-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .details-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .detail-check {
          color: var(--accent);
          margin-top: 0.15rem;
          flex-shrink: 0;
        }

        .service-expand-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.25rem;
          margin-top: 2rem;
          color: var(--text-primary);
          opacity: 0.8;
          font-weight: 500;
          font-size: 0.85rem;
          transition: color 0.2s, opacity 0.2s;
        }

        .service-card:hover .service-expand-footer {
          color: var(--accent);
          opacity: 1;
        }

        .expand-arrow {
          transition: transform 0.3s ease;
        }

        .expand-arrow.rotated {
          transform: rotate(90deg);
        }

        .expand-text {
          font-family: var(--font-body);
        }

        @media (max-width: 640px) {
          .service-card {
            padding: 1.75rem 1.25rem;
          }
          .service-card-header {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
