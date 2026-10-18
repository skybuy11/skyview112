import React, { useState } from 'react';
import { Calculator, Calendar, PoundSterling, Award, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export default function UKStudyPlanner({ setCurrentTab }) {
  const [region, setRegion] = useState('london');
  const [level, setLevel] = useState('postgrad');

  const ukviMonthly = region === 'london' ? 1334 : 1023;
  const ukviNineMonths = ukviMonthly * 9;

  const tuitionRanges = {
    undergrad: { min: 14500, max: 17500, label: 'Undergraduate (BSc / BA)' },
    postgrad: { min: 15500, max: 19000, label: 'Postgraduate (MSc / MBA / MA)' },
    foundation: { min: 12500, max: 15000, label: 'Foundation / International Year One' }
  };

  const selectedTuition = tuitionRanges[level];

  const intakes = [
    {
      season: 'September Intake (Main Autumn Intake)',
      badge: 'MOST POPULAR • ALL COURSES',
      appWindow: 'January – July',
      casDeadline: 'July – August',
      visaFiling: 'July – August',
      highlights: 'Widest choice of Undergraduate & Postgraduate degrees across all UK partner universities.'
    },
    {
      season: 'January Intake (Winter Intake)',
      badge: 'FAST-TRACK POSTGRAD & BUSINESS',
      appWindow: 'August – November',
      casDeadline: 'November – December',
      visaFiling: 'November – December',
      highlights: 'Ideal for MSc Business, Computing, Engineering, Healthcare, and Top-Up degrees.'
    },
    {
      season: 'May Intake (Spring Intake)',
      badge: 'FLEXIBLE CAREER DEGREES',
      appWindow: 'January – March',
      casDeadline: 'March – April',
      visaFiling: 'April',
      highlights: 'Offered by select modern UK universities (Coventry, BPP, Greenwich, Sunderland) for accelerated entry.'
    }
  ];

  const handleConsultClick = () => {
    setCurrentTab('contact');
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="study-planner" className="section planner-section">
      <div className="container">
        <h2 className="section-title">UK Study Cost & Intake Planner</h2>
        <p className="section-subtitle">
          Calculate your official UKVI financial maintenance requirements, tuition estimates, scholarships, and upcoming university intake deadlines.
        </p>

        <div className="planner-grid">
          {/* Left: Interactive UKVI & Tuition Estimator */}
          <div className="calculator-card glass-card">
            <div className="calc-header">
              <Calculator size={24} className="text-primary" />
              <h3>Interactive UK Cost & UKVI Financial Estimator</h3>
            </div>

            <div className="calc-control-group">
              <label>1. Select Study Region (UKVI Living Cost Rule)</label>
              <div className="toggle-pill-row">
                <button
                  type="button"
                  className={`toggle-pill ${region === 'london' ? 'active' : ''}`}
                  onClick={() => setRegion('london')}
                >
                  London (£1,334 / month)
                </button>
                <button
                  type="button"
                  className={`toggle-pill ${region === 'outside' ? 'active' : ''}`}
                  onClick={() => setRegion('outside')}
                >
                  Outside London (£1,023 / month)
                </button>
              </div>
            </div>

            <div className="calc-control-group">
              <label>2. Select Degree Level</label>
              <div className="toggle-pill-row">
                <button
                  type="button"
                  className={`toggle-pill ${level === 'undergrad' ? 'active' : ''}`}
                  onClick={() => setLevel('undergrad')}
                >
                  Undergraduate
                </button>
                <button
                  type="button"
                  className={`toggle-pill ${level === 'postgrad' ? 'active' : ''}`}
                  onClick={() => setLevel('postgrad')}
                >
                  Postgraduate
                </button>
                <button
                  type="button"
                  className={`toggle-pill ${level === 'foundation' ? 'active' : ''}`}
                  onClick={() => setLevel('foundation')}
                >
                  Foundation
                </button>
              </div>
            </div>

            <div className="calc-results-box">
              <div className="result-row">
                <div>
                  <span className="res-label">UKVI 9-Month Living Cost Proof</span>
                  <span className="res-note">Required on bank statement for Student Visa</span>
                </div>
                <span className="res-amount">£{ukviNineMonths.toLocaleString()}</span>
              </div>

              <div className="result-row">
                <div>
                  <span className="res-label">Typical Annual Tuition Fee</span>
                  <span className="res-note">{selectedTuition.label}</span>
                </div>
                <span className="res-amount">
                  £{selectedTuition.min.toLocaleString()} – £{selectedTuition.max.toLocaleString()}
                </span>
              </div>

              <div className="result-row highlight-row">
                <div>
                  <span className="res-label">Merit & Regional Scholarships</span>
                  <span className="res-note">Automatic & bursary fee waivers via Skyview</span>
                </div>
                <span className="res-discount">Up to £5,000 Off</span>
              </div>
            </div>

            <div className="calc-perks">
              <span><CheckCircle2 size={15} className="text-success" /> 20 hrs/week Student Work Rights</span>
              <span><CheckCircle2 size={15} className="text-success" /> 2-Year Post-Study Graduate Visa</span>
            </div>
          </div>

          {/* Right: Upcoming UK Intakes & Deadlines */}
          <div className="intakes-column">
            <div className="intakes-header">
              <Calendar size={24} className="text-primary" />
              <h3>UK University Intakes & Application Timeline</h3>
            </div>

            <div className="intakes-stack">
              {intakes.map((item, idx) => (
                <div key={idx} className="intake-card glass-card">
                  <div className="intake-top">
                    <span className="intake-badge">{item.badge}</span>
                    <h4>{item.season}</h4>
                  </div>
                  <p className="intake-desc">{item.highlights}</p>
                  <div className="intake-dates-row">
                    <div className="date-chip">
                      <span className="d-lbl">Apply Window</span>
                      <span className="d-val">{item.appWindow}</span>
                    </div>
                    <div className="date-chip">
                      <span className="d-lbl">CAS & Deposit</span>
                      <span className="d-val">{item.casDeadline}</span>
                    </div>
                    <div className="date-chip">
                      <span className="d-lbl">Visa Lodging</span>
                      <span className="d-val">{item.visaFiling}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn btn-accent btn-lg planner-cta" onClick={handleConsultClick}>
              Request Personalized Fee & Scholarship Quote
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .planner-section {
          background: #FFFFFF;
        }

        .planner-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.25rem;
          align-items: start;
        }

        @media (min-width: 992px) {
          .planner-grid {
            grid-template-columns: 1fr 1.08fr;
            gap: 2.5rem;
          }
        }

        .calc-header, .intakes-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .calc-header h3, .intakes-header h3 {
          font-size: 1.35rem;
          font-weight: 800;
        }

        .calc-control-group {
          margin-bottom: 1.5rem;
        }

        .calc-control-group label {
          display: block;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 0.65rem;
        }

        .toggle-pill-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .toggle-pill {
          flex: 1;
          min-width: 120px;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          background: var(--bg-primary);
          border: 1.5px solid var(--border-color);
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .toggle-pill.active, .toggle-pill:hover {
          background: var(--primary);
          color: #FFFFFF;
          border-color: var(--primary);
        }

        .calc-results-box {
          background: var(--bg-primary);
          border-radius: 16px;
          padding: 1.25rem;
          border: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .result-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding-bottom: 0.85rem;
          border-bottom: 1px dashed var(--border-color);
        }

        .result-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .res-label {
          display: block;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .res-note {
          display: block;
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .res-amount {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.15rem;
          color: var(--primary);
          white-space: nowrap;
        }

        .res-discount {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.05rem;
          color: #B45309;
          background: #FEF3C7;
          padding: 0.3rem 0.75rem;
          border-radius: 99px;
          white-space: nowrap;
        }

        .calc-perks {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .calc-perks span {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }

        .intakes-stack {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .intake-card {
          padding: 1.35rem 1.5rem !important;
        }

        .intake-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--accent-gold-dark);
          letter-spacing: 0.06em;
          margin-bottom: 0.2rem;
        }

        .intake-top h4 {
          font-size: 1.15rem;
          font-weight: 800;
          margin-bottom: 0.4rem;
        }

        .intake-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 0.85rem;
          line-height: 1.5;
        }

        .intake-dates-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.6rem;
          background: var(--bg-primary);
          padding: 0.75rem;
          border-radius: 12px;
        }

        .date-chip {
          display: flex;
          flex-direction: column;
        }

        .d-lbl {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .d-val {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .planner-cta {
          width: 100%;
        }
      `}</style>
    </section>
  );
}
