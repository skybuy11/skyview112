import React, { useState, useEffect } from 'react';
import { FileText, Printer, Check, Info } from 'lucide-react';

export default function StudentContract() {
  const [formData, setFormData] = useState({
    fullName: '',
    nationality: '',
    dob: '',
    email: '',
    phone: '',
    passportNumber: '',
    courseLevel: 'postgraduate',
    subjectArea: '',
    preferredUni: '',
    startDate: 'September 2026',
    services: {
      uniSelection: true,
      appPreparation: true,
      visaImmigration: true,
      arrivalSupport: false,
      accommodationSearch: false,
      englishTestPrep: false
    },
    studentSignature: '',
    agentSignature: 'Mr. Sharan Ahamed',
    signingDate: new Date().toISOString().split('T')[0],
    agreed: false
  });

  const [contractRef, setContractRef] = useState('');

  // Generate a random stable reference number on load or reset
  useEffect(() => {
    const year = new Date().getFullYear();
    const rand = Math.floor(100000 + Math.random() * 900000);
    setContractRef(`SC-${year}-${rand}`);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'agreed') {
        setFormData(prev => ({ ...prev, agreed: checked }));
      } else {
        setFormData(prev => ({
          ...prev,
          services: {
            ...prev.services,
            [name]: checked
          }
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="contract" className="contract-section section">
      <div className="container">
        <h2 className="section-title">Student–Agent Agreement</h2>
        <p className="section-subtitle">
          Complete the 4-part application form to instantly generate your official representation agreement. You can save or print it as a PDF.
        </p>

        <div className="contract-layout-grid">
          {/* Left panel: Form */}
          <div className="contract-form-panel glass-card">
            <div className="form-steps-container">
              {/* Part 1: Student Details */}
              <div className="form-step-section">
                <h3 className="step-title">Part 1: Student Details</h3>
                <div className="form-group-underline">
                  <label htmlFor="fullName">Full Name (as in Passport)</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-grid-2">
                  <div className="form-group-underline">
                    <label htmlFor="nationality">Nationality</label>
                    <input
                      type="text"
                      id="nationality"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleInputChange}
                      placeholder="e.g. Sudanese"
                    />
                  </div>
                  <div className="form-group-underline">
                    <label htmlFor="dob">Date of Birth</label>
                    <input
                      type="date"
                      id="dob"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-grid-2">
                  <div className="form-group-underline">
                    <label htmlFor="contract_email">Email Address</label>
                    <input
                      type="email"
                      id="contract_email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="form-group-underline">
                    <label htmlFor="contract_phone">Phone Number</label>
                    <input
                      type="tel"
                      id="contract_phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+249 9..."
                    />
                  </div>
                </div>
                <div className="form-group-underline">
                  <label htmlFor="passportNumber">Passport Number</label>
                  <input
                    type="text"
                    id="passportNumber"
                    name="passportNumber"
                    value={formData.passportNumber}
                    onChange={handleInputChange}
                    placeholder="Passport reference"
                  />
                </div>
              </div>

              {/* Part 2: Intended Study */}
              <div className="form-step-section">
                <h3 className="step-title">Part 2: Intended Study</h3>
                <div className="form-grid-2">
                  <div className="form-group-underline">
                    <label htmlFor="courseLevel">Desired Course Level</label>
                    <select
                      id="courseLevel"
                      name="courseLevel"
                      value={formData.courseLevel}
                      onChange={handleInputChange}
                    >
                      <option value="Undergraduate">Undergraduate (Bachelors)</option>
                      <option value="Postgraduate">Postgraduate (Masters/PhD)</option>
                      <option value="Foundation">Foundation Pathway</option>
                      <option value="English Language">Pre-sessional English</option>
                    </select>
                  </div>
                  <div className="form-group-underline">
                    <label htmlFor="startDate">Intended Intake</label>
                    <select
                      id="startDate"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                    >
                      <option value="September 2026">September 2026</option>
                      <option value="January 2027">January 2027</option>
                      <option value="September 2027">September 2027</option>
                    </select>
                  </div>
                </div>
                <div className="form-group-underline">
                  <label htmlFor="subjectArea">Subject Area of Interest</label>
                  <input
                    type="text"
                    id="subjectArea"
                    name="subjectArea"
                    value={formData.subjectArea}
                    onChange={handleInputChange}
                    placeholder="e.g. Computer Science, Business Administration"
                  />
                </div>
                <div className="form-group-underline">
                  <label htmlFor="preferredUni">Preferred UK University</label>
                  <input
                    type="text"
                    id="preferredUni"
                    name="preferredUni"
                    value={formData.preferredUni}
                    onChange={handleInputChange}
                    placeholder="e.g. University of Greenwich, Middlesex University"
                  />
                </div>
              </div>

              {/* Part 3: Service Scope */}
              <div className="form-step-section">
                <h3 className="step-title">Part 3: Scope of Services Needed</h3>
                <p className="step-subtitle-desc">Select all services you wish Skyview Consultants to assist you with:</p>
                <div className="checkbox-list">
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      name="uniSelection"
                      checked={formData.services.uniSelection}
                      onChange={handleInputChange}
                    />
                    <span className="checkbox-label">UK University & Course Advice Selection</span>
                  </label>
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      name="appPreparation"
                      checked={formData.services.appPreparation}
                      onChange={handleInputChange}
                    />
                    <span className="checkbox-label">Admissions Application Preparation & Submission</span>
                  </label>
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      name="visaImmigration"
                      checked={formData.services.visaImmigration}
                      onChange={handleInputChange}
                    />
                    <span className="checkbox-label">UK Student Visa (CAS) & Immigration Guidance</span>
                  </label>
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      name="accommodationSearch"
                      checked={formData.services.accommodationSearch}
                      onChange={handleInputChange}
                    />
                    <span className="checkbox-label">Student Accommodation Search & Booking Help</span>
                  </label>
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      name="arrivalSupport"
                      checked={formData.services.arrivalSupport}
                      onChange={handleInputChange}
                    />
                    <span className="checkbox-label">Pre-Departure Briefings & UK Arrival Support</span>
                  </label>
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      name="englishTestPrep"
                      checked={formData.services.englishTestPrep}
                      onChange={handleInputChange}
                    />
                    <span className="checkbox-label">UKVI English Test Evaluation / Prep Guidance</span>
                  </label>
                </div>
              </div>

              {/* Part 4: Signatures */}
              <div className="form-step-section">
                <h3 className="step-title">Part 4: Declaration & Signature</h3>
                <div className="form-group-underline">
                  <label htmlFor="studentSignature">Type your name (Student Electronic Signature)</label>
                  <input
                    type="text"
                    id="studentSignature"
                    name="studentSignature"
                    value={formData.studentSignature}
                    onChange={handleInputChange}
                    placeholder="Type your legal name to sign"
                    required
                  />
                </div>
                <div className="form-group-underline">
                  <label htmlFor="signingDate">Signing Date</label>
                  <input
                    type="date"
                    id="signingDate"
                    name="signingDate"
                    value={formData.signingDate}
                    onChange={handleInputChange}
                  />
                </div>
                <label className="checkbox-item declaration-checkbox">
                  <input
                    type="checkbox"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="checkbox-label">
                    I confirm that the details provided are correct and I agree to appoint Skyview Consultants as my representative.
                  </span>
                </label>
              </div>
            </div>

            <div className="form-actions-row">
              <button 
                type="button" 
                className="btn btn-accent print-button" 
                onClick={handlePrint}
                disabled={!formData.fullName || !formData.studentSignature || !formData.agreed}
              >
                <Printer size={18} />
                Print / Save Agreement PDF
              </button>
            </div>
          </div>

          {/* Right panel: Live Contract Document */}
          <div className="contract-preview-panel">
            <div className="contract-document-wrapper" id="printable-contract">
              {/* Document Header / Letterhead */}
              <div className="contract-letterhead">
                <div className="letterhead-top">
                  <img src="/logo.png" alt="Skyview Consultants Logo" className="letterhead-logo" />
                  <div className="letterhead-details">
                    <span className="company-name">SKYVIEW CONSULTANTS</span>
                    <span className="company-address">71-75 Shelton Street, Covent Garden</span>
                    <span className="company-address">London, WC2H 9JQ, United Kingdom</span>
                    <span className="company-email">sharan@skyview.org.uk | +44 7725 355355</span>
                  </div>
                </div>
                <div className="letterhead-divider"></div>
                <div className="document-meta-row">
                  <div className="doc-meta-item">
                    <span className="meta-lbl">Agreement Ref:</span>
                    <span className="meta-val highlight">{contractRef}</span>
                  </div>
                  <div className="doc-meta-item">
                    <span className="meta-lbl">Date generated:</span>
                    <span className="meta-val">{formData.signingDate}</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h1 className="document-title">STANDARD STUDENT–AGENT REPRESENTATION AGREEMENT</h1>

              {/* Preamble */}
              <div className="clause-paragraph preamble-text">
                This Agreement is entered into on this <strong>{formData.signingDate}</strong> by and between the Student named below and <strong>Skyview Consultants</strong> (hereinafter referred to as the "Agent").
              </div>

              {/* Parties Box */}
              <div className="document-parties-box">
                <div className="party-details">
                  <strong>THE STUDENT:</strong>
                  <div className="party-grid">
                    <span>Name:</span> <span>{formData.fullName || '________________________'}</span>
                    <span>Nationality:</span> <span>{formData.nationality || '________________________'}</span>
                    <span>D.O.B:</span> <span>{formData.dob || '________________________'}</span>
                    <span>Email:</span> <span>{formData.email || '________________________'}</span>
                    <span>Phone:</span> <span>{formData.phone || '________________________'}</span>
                    <span>Passport No:</span> <span>{formData.passportNumber || '________________________'}</span>
                  </div>
                </div>
                <div className="party-details">
                  <strong>THE AGENT:</strong>
                  <div className="party-grid">
                    <span>Name:</span> <span>Skyview Consultants</span>
                    <span>Representative:</span> <span>{formData.agentSignature}</span>
                    <span>Registered Office:</span> <span>Covent Garden, London, UK</span>
                    <span>Certification:</span> <span>British Council Approved Agent</span>
                    <span>Phone:</span> <span>+44 7725 355355</span>
                  </div>
                </div>
              </div>

              {/* Clauses */}
              <div className="clauses-container">
                <div className="clause-item">
                  <h4 className="clause-heading">1. APPOINTMENT & PREFERENTIAL FOCUS</h4>
                  <div className="clause-body">
                    The Student hereby appoints the Agent as their non-exclusive representative to provide educational consulting services to facilitate their application to higher education programs in the United Kingdom.
                    {formData.subjectArea || formData.preferredUni ? (
                      <span> Specifically, this appointment relates to the Student's intended pursuit of a <strong>{formData.courseLevel}</strong> course in <strong>{formData.subjectArea || 'unspecified subject area'}</strong> starting in <strong>{formData.startDate}</strong>, with a preference for <strong>{formData.preferredUni || 'partner institutions'}</strong>.</span>
                    ) : null}
                  </div>
                </div>

                <div className="clause-item">
                  <h4 className="clause-heading">2. SCOPE OF REPRESENTATIVE SERVICES</h4>
                  <div className="clause-body">
                    The Agent agrees to provide the services selected by the Student in Part 3 of this application. This includes:
                    <ul className="clause-bullet-list">
                      {formData.services.uniSelection && (
                        <li><strong>UK University & Course Selection:</strong> Provide counseling and matching based on student qualifications.</li>
                      )}
                      {formData.services.appPreparation && (
                        <li><strong>Application Preparation:</strong> Reviewing documentation, statement of purpose guidance, and submission to selected UK institutions.</li>
                      )}
                      {formData.services.visaImmigration && (
                        <li><strong>Visa Guidance:</strong> Supporting the preparation of student visa credentials, CAS compliance checkpoints, and interview prep.</li>
                      )}
                      {formData.services.accommodationSearch && (
                        <li><strong>Accommodation Search:</strong> Assisting in researching and securing suitable student housing near the university campus.</li>
                      )}
                      {formData.services.arrivalSupport && (
                        <li><strong>Arrival Support:</strong> Organizing pre-departure briefings and providing onboarding advisory services in the United Kingdom.</li>
                      )}
                      {formData.services.englishTestPrep && (
                        <li><strong>English Test Prep:</strong> Advising on appropriate UKVI IELTS or equivalent English certification criteria.</li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="clause-item">
                  <h4 className="clause-heading">3. AGENT FEES & PAYMENT TERMS</h4>
                  <div className="clause-body">
                    The Agent provides counseling and university admission services free of charge to the Student when applying to partnered universities, as the Agent receives representative commissions from participating British universities. If the Student requests specialized applications to non-partnered universities or bespoke visa appeals, the fee structure must be agreed upon in writing separately before services are rendered.
                  </div>
                </div>

                <div className="clause-item">
                  <h4 className="clause-heading">4. AGENT OBLIGATIONS & QUALITY STANDARDS</h4>
                  <div className="clause-body">
                    The Agent agrees to:
                    <ol className="clause-ordered-sublist">
                      <li>Act in professional compliance with the <strong>British Council Agent Quality Framework (AQF)</strong>, maintaining high standards of transparency, integrity, and student care.</li>
                      <li>Handle all personal details in strict compliance with the <strong>UK General Data Protection Regulation (UK GDPR)</strong> and the UK Data Protection Act 2018.</li>
                      <li>Provide honest assessment of academic eligibility and visa success possibilities based on official guidelines.</li>
                    </ol>
                  </div>
                </div>

                <div className="clause-item">
                  <h4 className="clause-heading">5. STUDENT OBLIGATIONS</h4>
                  <div className="clause-body">
                    The Student agrees to provide fully authentic, accurate, and original documents (transcripts, reference letters, financial bank certificates, and identity cards). Providing fraudulent credentials or omitting critical visa refusal histories voids this agreement immediately. The Student remains solely responsible for paying university application fees, UK immigration health surcharges, and tuition fees.
                  </div>
                </div>

                <div className="clause-item">
                  <h4 className="clause-heading">6. CONFIDENTIALITY & DATA PROTECTION</h4>
                  <div className="clause-body">
                    All personal data shared will be protected and processed strictly for admissions purposes. Information will only be disclosed to selected universities and UK immigration authorities as required.
                  </div>
                </div>

                <div className="clause-item">
                  <h4 className="clause-heading">7. AGREEMENT TERMINATION</h4>
                  <div className="clause-body">
                    This Agreement may be terminated by either party upon 14 days' written notice. It is immediately terminated if the Student behaves dishonestly, submits fraudulent documentation, or fails to obtain necessary admissions credentials.
                  </div>
                </div>

                <div className="clause-item">
                  <h4 className="clause-heading">8. LIMITATION OF LIABILITY</h4>
                  <div className="clause-body">
                    While the Agent commits to high professional standards, the final decision on admissions rests solely with the universities, and the decision on student visas rests with UK Visas and Immigration (UKVI). The Agent accepts no liability for visa rejections or university refusal decisions.
                  </div>
                </div>
              </div>

              {/* Signature Block */}
              <div className="contract-signature-block">
                <div className="signature-col">
                  <span className="sig-title">STUDENT SIGNATURE:</span>
                  <div className="signature-line signature-font">
                    {formData.studentSignature || '________________________'}
                  </div>
                  <span className="sig-details">Name: {formData.fullName || '________________________'}</span>
                  <span className="sig-details">Date: {formData.signingDate}</span>
                </div>
                <div className="signature-col">
                  <span className="sig-title">AUTHORIZED REPRESENTATIVE:</span>
                  <div className="signature-line agent-sig signature-font">
                    {formData.agentSignature}
                  </div>
                  <span className="sig-details">Name: Mr. Sharan Ahamed</span>
                  <span className="sig-details">Position: Director, Skyview Consultants</span>
                </div>
              </div>

              {/* Disclaimer / Footer */}
              <div className="document-footer-notes">
                This document serves as a digital record of representation under UK law. Skyview Consultants is a registered organization in England.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contract-section {
          background-color: var(--bg-primary);
          border-top: 1px solid var(--border-color);
        }

        .contract-layout-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-top: 1.5rem;
          align-items: start;
        }

        @media (min-width: 1024px) {
          .contract-layout-grid {
            grid-template-columns: 1fr 1.1fr;
            gap: 2.5rem;
          }
        }

        .contract-form-panel {
          background: var(--bg-secondary);
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .form-steps-container {
          display: flex;
          flex-direction: column;
          gap: 2.25rem;
        }

        .form-step-section {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .step-title {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--accent);
          border-bottom: 1.5px solid var(--border-color);
          padding-bottom: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .step-subtitle-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-top: -0.5rem;
        }

        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0 1.25rem;
        }

        @media (min-width: 480px) {
          .form-grid-2 {
            grid-template-columns: 1fr 1fr;
          }
        }

        .checkbox-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .checkbox-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          cursor: pointer;
          font-size: 0.9rem;
          color: var(--text-secondary);
          user-select: none;
        }

        .checkbox-item input[type="checkbox"] {
          width: 18px;
          height: 18px;
          border-radius: 4px;
          border: 1px solid var(--border-color);
          accent-color: var(--accent);
          cursor: pointer;
          margin-top: 0.1rem;
          flex-shrink: 0;
        }

        .declaration-checkbox {
          padding: 0.75rem;
          background: var(--bg-primary);
          border-radius: 8px;
          border: 1px solid var(--border-color);
          margin-top: 0.5rem;
        }

        .form-actions-row {
          margin-top: 1rem;
          border-top: 1px solid var(--border-color);
          padding-top: 1.5rem;
        }

        .print-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        /* Live Contract preview styles */
        .contract-preview-panel {
          position: sticky;
          top: 100px;
          max-height: 85vh;
          overflow-y: auto;
          border-radius: 18px;
          border: 1px solid var(--border-color);
          background: var(--bg-secondary);
          box-shadow: var(--card-shadow);
        }

        .contract-document-wrapper {
          padding: 2.5rem;
          color: #1d1d1f; /* Premium dark ink color */
          background: #ffffff; /* Page white for realistic agreement feel */
          font-size: 0.82rem;
          line-height: 1.5;
        }

        [data-theme="dark"] .contract-preview-panel {
          /* Keep realism in dark mode but with a dark scroll track on container */
          border-color: #222222;
        }

        .contract-letterhead {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .letterhead-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .letterhead-logo {
          height: 54px;
          width: auto;
          object-fit: contain;
        }

        .letterhead-details {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
        }

        @media (max-width: 480px) {
          .letterhead-top {
            flex-direction: column;
            align-items: flex-start;
          }
          .letterhead-details {
            align-items: flex-start;
            text-align: left;
          }
        }

        .company-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.95rem;
          color: #003078;
        }

        .company-address {
          font-size: 0.7rem;
          color: #515154;
        }

        .company-email {
          font-size: 0.7rem;
          color: var(--accent);
          font-weight: 500;
        }

        .letterhead-divider {
          height: 1.5px;
          background: #b58a3f; /* Gold line separator */
        }

        .document-meta-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: #515154;
        }

        .meta-val.highlight {
          color: #003078;
          font-weight: 700;
        }

        .document-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 800;
          color: #003078;
          text-align: center;
          margin: 1.5rem 0 1.25rem 0;
          letter-spacing: 0.02em;
          line-height: 1.3;
        }

        .preamble-text {
          font-style: italic;
          margin-bottom: 1.25rem;
          color: #333333;
        }

        .document-parties-box {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 640px) {
          .document-parties-box {
            grid-template-columns: 1fr 1fr;
          }
        }

        .party-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .party-details strong {
          color: #003078;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
          border-bottom: 1px solid #e9ecef;
          padding-bottom: 0.25rem;
        }

        .party-grid {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 0.25rem;
          font-size: 0.72rem;
          color: #333333;
        }

        .party-grid span:nth-child(odd) {
          font-weight: 550;
          color: #6c757d;
        }

        .clauses-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .clause-item {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .clause-heading {
          font-family: var(--font-heading);
          font-size: 0.78rem;
          font-weight: 700;
          color: #003078;
          letter-spacing: 0.02em;
        }

        .clause-body {
          color: #333333;
          text-align: justify;
        }

        .clause-bullet-list, .clause-ordered-sublist {
          margin-top: 0.4rem;
          padding-left: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .contract-signature-block {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-top: 2rem;
          border-top: 1px dashed #ced4da;
          padding-top: 1.5rem;
        }

        @media (min-width: 540px) {
          .contract-signature-block {
            grid-template-columns: 1fr 1fr;
          }
        }

        .signature-col {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .sig-title {
          font-weight: 700;
          font-size: 0.7rem;
          color: #6c757d;
          letter-spacing: 0.05em;
        }

        .signature-line {
          height: 48px;
          border-bottom: 1px solid #1d1d1f;
          display: flex;
          align-items: flex-end;
          padding-bottom: 0.25rem;
          font-size: 1.4rem;
          color: #003078;
        }

        .signature-font {
          font-family: 'Outfit', cursive, sans-serif;
          font-style: italic;
        }

        .signature-line.agent-sig {
          color: #b58a3f;
        }

        .sig-details {
          font-size: 0.7rem;
          color: #6c757d;
        }

        .document-footer-notes {
          text-align: center;
          font-size: 0.65rem;
          color: #adb5bd;
          margin-top: 2.5rem;
          border-top: 1px solid #f1f3f5;
          padding-top: 0.75rem;
        }

        /* PRINT STYLES - STrips page layouts down to absolute contract paper */
        @media print {
          body * {
            visibility: hidden;
            background: #ffffff !important;
          }
          #contract, #contract *, .contract-document-wrapper, .contract-document-wrapper * {
            visibility: visible;
          }
          #contract {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 0 !important;
            margin: 0 !important;
            background: #ffffff !important;
          }
          .contract-layout-grid {
            display: block !important;
          }
          .contract-form-panel {
            display: none !important; /* Hide input fields entirely */
          }
          .contract-preview-panel {
            position: relative !important;
            top: 0 !important;
            max-height: none !important;
            overflow: visible !important;
            border: none !important;
            box-shadow: none !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .contract-document-wrapper {
            padding: 0 !important;
            margin: 0 !important;
            font-size: 9pt !important;
            color: #000000 !important;
            width: 100% !important;
          }
          .document-title {
            font-size: 14pt !important;
            color: #000000 !important;
          }
          .company-name, .clause-heading, .signature-line {
            color: #000000 !important;
          }
          .letterhead-logo {
            filter: grayscale(1) !important;
          }
        }
      `}</style>
    </section>
  );
}
