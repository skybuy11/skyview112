import React, { useState } from 'react';
import {
  BookOpen,
  Download,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
  ArrowLeft,
  Compass,
  Award,
  Scale,
  HelpCircle,
  Eye
} from 'lucide-react';

export default function AgentGuide({ isStandalonePage = false, onOpenStandalone, onBackToSite }) {
  const [activeTab, setActiveTab] = useState('interactive');
  const [checkedItems, setCheckedItems] = useState({ 0: true, 1: true, 2: true });

  const toggleCheck = (idx) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const sixSteps = [
    {
      step: 'Step 1',
      title: 'Confirm Study Destination & Visa Rules',
      desc: 'Confirm that the UK is the right study destination for you, and understand your course options and visa requirements.'
    },
    {
      step: 'Step 2',
      title: 'Match Academic & Financial Profile',
      desc: 'Identify education providers that meet your academic, personal, and financial circumstances.'
    },
    {
      step: 'Step 3',
      title: 'Submit Institution Applications',
      desc: 'Prepare and apply to your chosen UK universities, colleges, or schools accurately.'
    },
    {
      step: 'Step 4',
      title: 'Evaluate Offers & Deadlines',
      desc: 'Evaluate your conditional or unconditional offers and provide guidance on admissions deadlines.'
    },
    {
      step: 'Step 5',
      title: 'Gather & Submit Visa Documents',
      desc: 'Gather and submit the required documents you need for your UK Student Visa application.'
    },
    {
      step: 'Step 6',
      title: 'Prepare for UK Arrival',
      desc: 'Prepare to come and study in the UK, including pre-departure briefings and accommodation advice.'
    }
  ];

  const checklistItems = [
    {
      question: 'Is the education agent listed on the UK database of certified counsellors?',
      detail: 'Certified agents are awarded the "I am a UK Certified Counsellor" digital badge by the British Council.',
      linkText: 'Verify on British Council Database',
      linkUrl: 'https://www.britishcouncil.org/education/agents-counsellors/database'
    },
    {
      question: 'Is the education agency listed as an official representative or partner on the university website?',
      detail: 'If you know where you want to apply, check that the agency is recognized by your target institution.'
    },
    {
      question: 'What are other students saying about the education agency?',
      detail: 'Even the best agent cannot make everybody happy, but authentic student reviews help you decide if they are right for you.'
    }
  ];

  const expectations = [
    {
      title: 'Unbiased, Well-Trained Guidance',
      text: 'A well-trained agent explains the UK education system, different UK regions, and the institutions they represent clearly and objectively.'
    },
    {
      title: 'National Code of Ethical Practice',
      text: 'Committed to the National Code of Ethical Practice for UK Education Agents. Ask your agent to show you a copy of the code.'
    },
    {
      title: 'Transparent Fees & Zero Hidden Charges',
      text: 'Agent operating costs are typically covered by the university via commission. If an agent charges for extra services, this must be explained clearly from the start.'
    },
    {
      title: 'Never Hold or Pay Money on Your Behalf',
      text: 'Agents should NOT hold money or make tuition/visa payments on your behalf. Always pay your institution or UKVI directly.'
    },
    {
      title: 'Honest Entry Requirements',
      text: 'Agents cannot provide favourable entry requirements or special shortcuts that differ from applying directly. Report any agent claiming otherwise.'
    },
    {
      title: 'Clear Complaints & Ombudsman Escalation',
      text: 'Agents must have a clear complaints process. Unresolved issues can be escalated to the university or the Office of the Independent Adjudicator (OIA).'
    }
  ];

  const officialResources = [
    {
      org: 'UK Council for International Student Affairs (UKCISA)',
      desc: 'Provides independent guidance for international students on studying and living in the UK, plus the latest visa and immigration rules.',
      url: 'https://www.ukcisa.org.uk/'
    },
    {
      org: 'Study UK (British Council)',
      desc: 'Official British Council portal sharing the latest updates, scholarships, and practical advice on studying in the UK.',
      url: 'https://study-uk.britishcouncil.org/'
    },
    {
      org: 'UK Agent Quality Framework (AQF)',
      desc: 'The UK’s official set of tools and standards for ethical practice in international student recruitment.',
      url: 'https://www.britishcouncil.org/education/agents-counsellors/uk-quality-agent-framework'
    }
  ];

  return (
    <section id="agent-guide" className={`section guide-section ${isStandalonePage ? 'standalone-guide' : ''}`}>
      <div className="container">
        {isStandalonePage && (
          <div className="standalone-topbar">
            <button className="btn btn-secondary back-btn" onClick={onBackToSite}>
              <ArrowLeft size={18} />
              Back to Main Website
            </button>
            <a
              href="/student-agent-guide.pdf"
              download="Study-UK-Student-and-Parent-Guide-Education-Agent.pdf"
              className="btn btn-accent"
            >
              <Download size={18} />
              Download Official PDF (4 Pages)
            </a>
          </div>
        )}

        {/* Header Banner */}
        <div className="guide-hero-banner glass-card">
          <div className="guide-badge-row">
            <span className="aqf-pill">
              <ShieldCheck size={16} />
              Supported by Study UK • British Council • UKCISA • UK Agent Quality Framework
            </span>
          </div>

          <h2 className="guide-main-title">
            A Student & Parent Guide to Choosing an Education Agent
          </h2>

          <p className="guide-intro-text">
            Choosing an international study destination is one of the most important decisions you and your family will make. While friends and family can help, applying to a UK university can feel daunting. As a <strong>British Council Certified Consultancy</strong>, Skyview Consultants fully endorses the official <strong>UK Agent Quality Framework (AQF)</strong> guide so you understand your rights, what services to expect, and how to verify an ethical education agent.
          </p>

          {/* Action Bar: Read on Page vs Separate PDF Page */}
          <div className="guide-action-bar">
            <div className="view-mode-tabs">
              <button
                className={`mode-tab ${activeTab === 'interactive' ? 'active' : ''}`}
                onClick={() => setActiveTab('interactive')}
              >
                <BookOpen size={18} />
                Read Interactive Guide on Page
              </button>
              <button
                className={`mode-tab ${activeTab === 'pdf-viewer' ? 'active' : ''}`}
                onClick={() => setActiveTab('pdf-viewer')}
              >
                <Eye size={18} />
                Read Official 4-Page PDF Inline
              </button>
            </div>

            <div className="pdf-external-actions">
              {!isStandalonePage && onOpenStandalone && (
                <button
                  className="btn btn-secondary guide-action-btn"
                  onClick={onOpenStandalone}
                >
                  <FileText size={18} />
                  Open on Separate Page
                </button>
              )}
              <a
                href="/student-agent-guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary guide-action-btn"
              >
                <ExternalLink size={18} />
                Open PDF in New Tab
              </a>
              <a
                href="/student-agent-guide.pdf"
                download="Study-UK-Student-and-Parent-Guide-Education-Agent.pdf"
                className="btn btn-accent guide-action-btn"
              >
                <Download size={18} />
                Download PDF
              </a>
            </div>
          </div>
        </div>

        {/* Mode 1: Interactive On-Page Reader */}
        {activeTab === 'interactive' ? (
          <div className="guide-interactive-body animate-fade-in">
            {/* Part 1: 6 Steps a Good Education Agent Helps With */}
            <div className="guide-block">
              <h3 className="guide-block-title">
                <Compass size={24} className="text-primary" />
                A Good Education Agent Will Help You In 6 Steps
              </h3>
              <div className="steps-grid-6">
                {sixSteps.map((item, idx) => (
                  <div key={idx} className="step-item-card glass-card">
                    <span className="step-tag">{item.step}</span>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Part 2: Official Checklist to Identify Quality Agents */}
            <div className="guide-block">
              <h3 className="guide-block-title">
                <Award size={24} className="text-primary" />
                Checklist to Identify a Good Quality Education Agent
              </h3>
              <p className="guide-block-subtitle">
                Every certified agent should have completed the <strong>British Council UK Certified Counsellor Training</strong> and committed to the <strong>National Code of Ethical Practice</strong>. Use this interactive checklist before choosing your representative:
              </p>

              <div className="checklist-container glass-card">
                {checklistItems.map((item, idx) => (
                  <div
                    key={idx}
                    className={`checklist-row ${checkedItems[idx] ? 'checked' : ''}`}
                    onClick={() => toggleCheck(idx)}
                  >
                    <div className="check-box-circle">
                      <CheckCircle2 size={22} />
                    </div>
                    <div className="checklist-text">
                      <h4>{item.question}</h4>
                      <p>{item.detail}</p>
                      {item.linkUrl && (
                        <a
                          href={item.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="official-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {item.linkText} <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Part 3: What You Should Expect & Student Protection */}
            <div className="guide-block">
              <h3 className="guide-block-title">
                <Scale size={24} className="text-primary" />
                What You Should Expect From Your Education Agent
              </h3>
              <div className="expectations-grid">
                {expectations.map((exp, idx) => (
                  <div key={idx} className="expectation-card glass-card">
                    <h4>{exp.title}</h4>
                    <p>{exp.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Warning Box from Page 4 */}
            <div className="decision-callout glass-card">
              <div className="callout-icon">
                <AlertTriangle size={28} />
              </div>
              <div className="callout-content">
                <h4>Remember: Where and What You Study Is Your Decision</h4>
                <p>
                  Education agents are there to help you make an informed decision — <strong>not to decide for you</strong>. Whilst some agents charge fees for additional services, this must be explained clearly from the start. <strong>Agents should never hold money or make payments on your behalf.</strong> If you are unsure about anyone asking you for money, check directly with the UK university or college you are applying to.
                </p>
              </div>
            </div>

            {/* Part 4: Important Sources of Official Information */}
            <div className="guide-block">
              <h3 className="guide-block-title">
                <HelpCircle size={24} className="text-primary" />
                Important Official UK Sources of Information
              </h3>
              <div className="resources-grid">
                {officialResources.map((res, idx) => (
                  <a
                    key={idx}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-card glass-card"
                  >
                    <div className="res-top">
                      <h4>{res.org}</h4>
                      <ExternalLink size={18} className="res-icon" />
                    </div>
                    <p>{res.desc}</p>
                    <span className="res-url">{res.url}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Mode 2: Inline Embedded PDF Reader */
          <div className="pdf-viewer-container glass-card animate-fade-in">
            <div className="pdf-viewer-header">
              <div>
                <h3>Official Study UK Guide (4-Page Document)</h3>
                <p>Supported by UK Agent Quality Framework, UKCISA, GREAT Britain & British Council</p>
              </div>
              <div className="pdf-header-btns">
                <a
                  href="/student-agent-guide.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <ExternalLink size={16} />
                  Full Screen PDF
                </a>
                <a
                  href="/student-agent-guide.pdf"
                  download="Study-UK-Student-and-Parent-Guide-Education-Agent.pdf"
                  className="btn btn-accent"
                >
                  <Download size={16} />
                  Download PDF
                </a>
              </div>
            </div>

            <div className="pdf-iframe-wrapper">
              <iframe
                src="/student-agent-guide.pdf#view=FitH"
                title="A student and parent guide to choosing an education agent"
                className="pdf-iframe"
              />
            </div>
          </div>
        )}
      </div>

      <style>{`
        .guide-section {
          background: linear-gradient(180deg, #F0F6F3 0%, #FFFFFF 100%);
        }

        .standalone-guide {
          padding-top: 8.5rem !important;
          min-height: 100vh;
        }

        .standalone-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .guide-hero-banner {
          background: linear-gradient(135deg, #0F291E 0%, #00442B 100%) !important;
          color: #FFFFFF;
          padding: 2.5rem 2rem !important;
          margin-bottom: 3rem;
          border: 1.5px solid rgba(212, 175, 55, 0.35) !important;
        }

        .aqf-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(212, 175, 55, 0.18);
          color: #F3D068;
          font-size: 0.82rem;
          font-weight: 700;
          padding: 0.45rem 1rem;
          border-radius: 99px;
          border: 1px solid rgba(212, 175, 55, 0.35);
          margin-bottom: 1.25rem;
        }

        .guide-main-title {
          color: #FFFFFF;
          font-size: 2.1rem;
          font-weight: 900;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        @media (min-width: 992px) {
          .guide-main-title {
            font-size: 2.75rem;
          }
        }

        .guide-intro-text {
          color: #E2E8F0;
          font-size: 1.12rem;
          line-height: 1.7;
          max-width: 900px;
          margin-bottom: 2rem;
        }

        .guide-intro-text strong {
          color: #F3D068;
        }

        .guide-action-bar {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.14);
        }

        @media (min-width: 992px) {
          .guide-action-bar {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        .view-mode-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
        }

        .mode-tab {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.35rem;
          border-radius: 99px;
          font-weight: 700;
          font-size: 0.95rem;
          color: #E2E8F0;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.18);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .mode-tab.active, .mode-tab:hover {
          background: #FFFFFF;
          color: #0F291E;
          border-color: #FFFFFF;
        }

        .pdf-external-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .guide-action-btn {
          min-height: 46px;
          padding: 0.65rem 1.25rem;
          font-size: 0.92rem;
        }

        .guide-block {
          margin-bottom: 3.5rem;
        }

        .guide-block-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.6rem;
          font-weight: 800;
          margin-bottom: 1.25rem;
          color: var(--text-primary);
        }

        .guide-block-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          max-width: 820px;
        }

        .steps-grid-6 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 992px) {
          .steps-grid-6 {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        .step-item-card {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          padding: 1.5rem !important;
        }

        .step-tag {
          align-self: flex-start;
          background: var(--primary);
          color: #FFFFFF;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .step-item-card h4 {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .step-item-card p {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .checklist-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .checklist-row {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.25rem;
          border-radius: 16px;
          background: var(--bg-primary);
          border: 1.5px solid var(--border-color);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .checklist-row.checked {
          border-color: var(--primary);
          background: rgba(0, 92, 59, 0.04);
        }

        .check-box-circle {
          color: var(--primary);
          margin-top: 0.15rem;
          flex-shrink: 0;
        }

        .checklist-text h4 {
          font-size: 1.15rem;
          font-weight: 800;
          margin-bottom: 0.35rem;
        }

        .checklist-text p {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .official-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--primary);
          text-decoration: underline;
        }

        .expectations-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 992px) {
          .expectations-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        .expectation-card {
          padding: 1.5rem !important;
          border-left: 4px solid var(--accent-gold) !important;
        }

        .expectation-card h4 {
          font-size: 1.15rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .expectation-card p {
          font-size: 1rem;
          line-height: 1.65;
          color: var(--text-secondary);
        }

        .decision-callout {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          background: #FFFBEB !important;
          border: 1.5px solid #F59E0B !important;
          margin-bottom: 3.5rem;
        }

        .callout-icon {
          color: #D97706;
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .callout-content h4 {
          font-size: 1.25rem;
          font-weight: 800;
          color: #92400E;
          margin-bottom: 0.4rem;
        }

        .callout-content p {
          font-size: 1.05rem;
          color: #78350F;
          line-height: 1.65;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 992px) {
          .resources-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        .resource-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.5rem !important;
        }

        .res-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .res-top h4 {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--primary);
        }

        .res-icon {
          color: var(--accent-gold-dark);
          flex-shrink: 0;
        }

        .resource-card p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .res-url {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-muted);
          word-break: break-all;
        }

        .pdf-viewer-container {
          padding: 1.5rem !important;
        }

        .pdf-viewer-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: space-between;
          margin-bottom: 1.25rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-color);
        }

        @media (min-width: 768px) {
          .pdf-viewer-header {
            flex-direction: row;
            align-items: center;
          }
        }

        .pdf-header-btns {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .pdf-iframe-wrapper {
          width: 100%;
          height: 750px;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          background: #F1F5F9;
        }

        .pdf-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
      `}</style>
    </section>
  );
}
