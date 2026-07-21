import React, { useState } from 'react';
import { Compass, FileCheck, Shield, Home, ChevronDown, ChevronUp, Check, ArrowRight } from 'lucide-react';

export default function Services({ setCurrentTab }) {
  const [expandedId, setExpandedId] = useState('service-1');

  const steps = [
    {
      id: 'service-1',
      stepNum: '01',
      title: 'Course & Institution Matchmaking',
      category: 'ADMISSIONS ADVISORY',
      icon: <Compass size={28} />,
      shortDesc: 'We evaluate your academic profile, budget, and career goals to match you with top-ranked UK universities offering your ideal degree program.',
      checkpoints: [
        'Personalized profile evaluation & GPA assessment',
        'Direct screening across 100+ UK Partner Universities',
        'Scholarship & partial fee waiver eligibility check',
        'Fast-track offer letter application routing'
      ]
    },
    {
      id: 'service-2',
      stepNum: '02',
      title: 'Admissions & Statement of Purpose (SOP)',
      category: 'DOCUMENT PREPARATION',
      icon: <FileCheck size={28} />,
      shortDesc: 'Our expert editors review your Statement of Purpose (SOP), Letters of Recommendation (LOR), and CV to ensure full UCAS & British Council compliance.',
      checkpoints: [
        'SOP structural polishing & plagiarism audit',
        'Academic LOR verification guidance',
        'UCAS & direct university portal submission',
        'Conditional & Unconditional Offer tracking'
      ]
    },
    {
      id: 'service-3',
      stepNum: '03',
      title: 'UK Student Visa (CAS) & Finance Clearance',
      category: 'IMMIGRATION SUPPORT',
      icon: <Shield size={28} />,
      shortDesc: 'Complete guidance on obtaining your Confirmation of Acceptance for Studies (CAS), financial proof calculations, and UKVI Student Visa lodging.',
      checkpoints: [
        'UKVI financial bank statement & maintenance proof audit',
        'CAS statement issuance coordination',
        'TB medical check & IHS health surcharge assistance',
        'Mock credibility interview practice'
      ]
    },
    {
      id: 'service-4',
      stepNum: '04',
      title: 'Arrival & UK Campus Housing Assistance',
      category: 'PRE-DEPARTURE CARE',
      icon: <Home size={28} />,
      shortDesc: 'From securing verified student accommodation to airport pickup and UK SIM card setup, we ensure your arrival in the UK is smooth and stress-free.',
      checkpoints: [
        'Pre-vetted university dorm & private studio bookings',
        'London & regional airport transfer booking',
        'UK bank account opening guidance',
        'British Council pre-departure orientation briefing'
      ]
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleApplyClick = () => {
    setCurrentTab('contact');
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title">Your 4-Step Journey to the UK</h2>
        <p className="section-subtitle">
          We guide international students through every milestone of British higher education — from initial university selection to landing safely in the UK.
        </p>

        {/* 4-Step Connected Journey Stack */}
        <div className="journey-stack">
          {steps.map((step) => {
            const isExpanded = expandedId === step.id;
            return (
              <div
                key={step.id}
                className={`journey-card glass-card ${isExpanded ? 'active' : ''}`}
                onClick={() => toggleExpand(step.id)}
              >
                <div className="journey-card-header">
                  <div className="step-num-pill">{step.stepNum}</div>
                  <div className="step-icon-box">{step.icon}</div>
                  <div className="step-header-text">
                    <span className="step-category">{step.category}</span>
                    <h3 className="step-title">{step.title}</h3>
                  </div>
                  <button className="expand-trigger" aria-label="Toggle details">
                    {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </button>
                </div>

                <p className="step-short-desc">{step.shortDesc}</p>

                {/* Expandable Checklist Drawer */}
                {isExpanded && (
                  <div className="journey-drawer animate-fade-in">
                    <div className="drawer-divider"></div>
                    <h4 className="drawer-heading">What We Deliver for You:</h4>
                    <ul className="checkpoints-list">
                      {step.checkpoints.map((point, idx) => (
                        <li key={idx} className="checkpoint-item">
                          <div className="check-badge">
                            <Check size={16} />
                          </div>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="drawer-cta-row">
                      <button
                        className="btn btn-primary drawer-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleApplyClick();
                        }}
                      >
                        Book This Service
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .services-section {
          background: var(--bg-primary);
        }

        .journey-stack {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 920px;
          margin: 0 auto;
        }

        .journey-card {
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .journey-card.active {
          border-color: var(--primary) !important;
          box-shadow: var(--shadow-lg) !important;
          background: #FFFFFF !important;
        }

        .journey-card-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 0.85rem;
        }

        .step-num-pill {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.15rem;
          color: var(--accent-gold);
          background: var(--primary-light);
          padding: 0.35rem 0.85rem;
          border-radius: 99px;
          border: 1px solid rgba(0, 92, 59, 0.15);
          flex-shrink: 0;
        }

        .step-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .step-header-text {
          flex: 1;
        }

        .step-category {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--accent-gold-dark);
          letter-spacing: 0.08em;
          display: block;
        }

        .step-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.25;
        }

        @media (min-width: 992px) {
          .step-title {
            font-size: 1.55rem;
          }
        }

        .expand-trigger {
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-subtle);
          flex-shrink: 0;
        }

        .step-short-desc {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .journey-drawer {
          margin-top: 1.5rem;
          padding-top: 1.25rem;
        }

        .drawer-divider {
          height: 1px;
          background: var(--border-color);
          margin-bottom: 1.25rem;
        }

        .drawer-heading {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .checkpoints-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .checkpoint-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .check-badge {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.12);
          color: var(--success);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .drawer-cta-row {
          display: flex;
          justify-content: flex-end;
        }

        .drawer-btn {
          padding: 0.75rem 1.5rem;
          min-height: 48px;
          font-size: 0.95rem;
        }
      `}</style>
    </section>
  );
}
