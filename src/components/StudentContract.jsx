import React, { useState, useEffect } from 'react';
import { Printer } from 'lucide-react';

export default function StudentContract() {
  const [formData, setFormData] = useState({
    fullName: '',
    nationality: '',
    dob: '',
    email: '',
    phone: '',
    passportNumber: '',
    courseLevel: 'Postgraduate',
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
          Complete the 4-part application form to instantly generate your official UK representation agreement. Print or save as a PDF.
        </p>

        <div className="contract-layout-grid">
          {/* Left Panel: 4-Part Guided Form */}
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
                    placeholder="Enter your full legal name"
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
                      placeholder="+44 7..."
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
                    placeholder="e.g. Computer Science, Law, MBA"
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

          {/* Right Panel: Live Document Preview */}
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

              {/* Document Title */}
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
                    The Agent provides counseling and university admission services free of charge to the Student when applying to partnered universities, as the Agent receives representative commissions from participating British universities.
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
                    The Student agrees to provide fully authentic, accurate, and original documents. Providing fraudulent credentials voids this agreement immediately. The Student remains solely responsible for university application fees, UK immigration health surcharges, and tuition fees.
                  </div>
                </div>

                <div className="clause-item">
                  <h4 className="clause-heading">6. CONFIDENTIALITY & DATA PROTECTION</h4>
                  <div className="clause-body">
                    All personal data shared will be protected and processed strictly for admissions purposes in compliance with UK GDPR rules.
                  </div>
                </div>

                <div className="clause-item">
                  <h4 className="clause-heading">7. AGREEMENT TERMINATION</h4>
                  <div className="clause-body">
                    This Agreement may be terminated by either party upon 14 days' written notice.
                  </div>
                </div>

                <div className="clause-item">
                  <h4 className="clause-heading">8. LIMITATION OF LIABILITY</h4>
                  <div className="clause-body">
                    While the Agent commits to high professional standards, final admissions decisions rest with universities, and student visa decisions rest with UK Visas and Immigration (UKVI).
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

              {/* Footer Notes */}
              <div className="document-footer-notes">
                This document serves as an official digital record of representation under UK law. Skyview Consultants is registered in England & Wales.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contract-section {
          background-color: var(--bg-primary);
        }

        .contract-layout-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: start;
        }

        @media (min-width: 1024px) {
          .contract-layout-grid {
            grid-template-columns: 1fr 1.05fr;
            gap: 2.5rem;
          }
        }

        .contract-form-panel {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-steps-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .form-step-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .step-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--primary);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.4rem;
        }

        .step-subtitle-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0 1rem;
        }

        @media (min-width: 480px) {
          .form-grid-2 {
            grid-template-columns: 1fr 1fr;
          }
        }

        .checkbox-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .checkbox-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          cursor: pointer;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .checkbox-item input[type="checkbox"] {
          width: 18px;
          height: 18px;
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
        }

        .form-actions-row {
          border-top: 1px solid var(--border-color);
          padding-top: 1.25rem;
        }

        .print-button {
          width: 100%;
        }

        /* Live Preview Document */
        .contract-preview-panel {
          position: sticky;
          top: 90px;
          max-height: 85vh;
          overflow-y: auto;
          border-radius: 16px;
          border: 1px solid var(--border-color);
          background: #FFFFFF;
          box-shadow: var(--shadow-md);
        }

        .contract-document-wrapper {
          padding: 2rem;
          color: #111827;
          background: #FFFFFF;
          font-size: 0.8rem;
          line-height: 1.5;
        }

        .contract-letterhead {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .letterhead-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .letterhead-logo {
          height: 48px;
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
          font-weight: 800;
          font-size: 0.9rem;
          color: #003078;
        }

        .company-address {
          font-size: 0.68rem;
          color: #4B5563;
        }

        .company-email {
          font-size: 0.68rem;
          color: #B58A3F;
          font-weight: 600;
        }

        .letterhead-divider {
          height: 2px;
          background: #B58A3F;
        }

        .document-meta-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.72rem;
          color: #4B5563;
        }

        .meta-val.highlight {
          color: #003078;
          font-weight: 700;
        }

        .document-title {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 800;
          color: #003078;
          text-align: center;
          margin: 1.25rem 0;
          line-height: 1.3;
        }

        .preamble-text {
          font-style: italic;
          margin-bottom: 1rem;
          color: #374151;
        }

        .document-parties-box {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
          background: #F9FAFB;
          border: 1px solid #E5E7EB;
          padding: 0.85rem;
          border-radius: 8px;
          margin-bottom: 1.25rem;
        }

        @media (min-width: 640px) {
          .document-parties-box {
            grid-template-columns: 1fr 1fr;
          }
        }

        .party-details strong {
          color: #003078;
          font-size: 0.72rem;
          display: block;
          margin-bottom: 0.25rem;
        }

        .party-grid {
          display: grid;
          grid-template-columns: 75px 1fr;
          gap: 0.2rem;
          font-size: 0.7rem;
        }

        .party-grid span:nth-child(odd) {
          color: #6B7280;
          font-weight: 600;
        }

        .clauses-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .clause-heading {
          font-size: 0.75rem;
          font-weight: 700;
          color: #003078;
        }

        .clause-body {
          color: #374151;
        }

        .clause-bullet-list, .clause-ordered-sublist {
          padding-left: 1.2rem;
          margin-top: 0.3rem;
        }

        .contract-signature-block {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          margin-top: 1.5rem;
          border-top: 1px dashed #D1D5DB;
          padding-top: 1.25rem;
        }

        @media (min-width: 540px) {
          .contract-signature-block {
            grid-template-columns: 1fr 1fr;
          }
        }

        .signature-line {
          height: 42px;
          border-bottom: 1px solid #111827;
          display: flex;
          align-items: flex-end;
          padding-bottom: 0.2rem;
          font-size: 1.3rem;
          color: #003078;
        }

        .signature-font {
          font-style: italic;
        }

        .signature-line.agent-sig {
          color: #B58A3F;
        }

        .sig-details {
          font-size: 0.68rem;
          color: #6B7280;
        }

        .document-footer-notes {
          text-align: center;
          font-size: 0.65rem;
          color: #9CA3AF;
          margin-top: 2rem;
          border-top: 1px solid #F3F4F6;
          padding-top: 0.75rem;
        }

        /* PRINT STYLES */
        @media print {
          body * {
            visibility: hidden;
            background: #FFFFFF !important;
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
          }
          .contract-layout-grid {
            display: block !important;
          }
          .contract-form-panel {
            display: none !important;
          }
          .contract-preview-panel {
            position: relative !important;
            top: 0 !important;
            max-height: none !important;
            overflow: visible !important;
            border: none !important;
            box-shadow: none !important;
            width: 100% !important;
          }
          .contract-document-wrapper {
            padding: 0 !important;
            font-size: 9pt !important;
          }
        }
      `}</style>
    </section>
  );
}
