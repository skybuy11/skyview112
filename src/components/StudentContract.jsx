import React, { useState } from 'react';
import { FileText, Printer, CheckCircle, ShieldCheck, Download, AlertCircle } from 'lucide-react';

export default function StudentContract() {
  const [refNumber] = useState(() => `SC-2026-${Math.floor(100000 + Math.random() * 900000)}`);
  const [currentDate] = useState(() => new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }));

  const [formData, setFormData] = useState({
    fullName: '',
    passportNum: '',
    email: '',
    phone: '',
    studyLevel: 'Postgraduate (Master Degree)',
    intendedCourse: 'MSc Data Science / MBA Business Administration',
    intakeYear: 'September 2026',
    consentAQF: true,
    consentGDPR: true,
    signedName: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="contract" className="section contract-section">
      <div className="container">
        <h2 className="section-title">Student Representation Agreement</h2>
        <p className="section-subtitle">
          Official educational advisory contract between Skyview Consultants UK and the prospective student, adhering to British Council AQF guidelines and UK GDPR standards.
        </p>

        <div className="contract-grid">
          {/* Left Column: Form Controls */}
          <div className="form-card glass-card">
            <h3 className="card-heading">
              <FileText size={22} className="text-primary" />
              1. Student Agreement Form
            </h3>

            <div className="form-group-underline">
              <label>Full Legal Name (as on Passport)</label>
              <input
                type="text"
                name="fullName"
                placeholder="e.g., Alexander Wright"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group-underline">
              <label>Passport Number / ID Reference</label>
              <input
                type="text"
                name="passportNum"
                placeholder="e.g., A98765432"
                value={formData.passportNum}
                onChange={handleChange}
              />
            </div>

            <div className="form-group-underline">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="student@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group-underline">
              <label>Mobile / WhatsApp Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+44 7000 000000"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group-underline">
              <label>Intended Study Level</label>
              <select name="studyLevel" value={formData.studyLevel} onChange={handleChange}>
                <option value="Undergraduate (Bachelor Degree)">Undergraduate (Bachelor Degree)</option>
                <option value="Postgraduate (Master Degree)">Postgraduate (Master Degree)</option>
                <option value="Doctorate (PhD)">Doctorate (PhD)</option>
                <option value="Foundation / Pathway">Foundation / Pathway</option>
              </select>
            </div>

            <div className="form-group-underline">
              <label>Intended Course / Major</label>
              <input
                type="text"
                name="intendedCourse"
                placeholder="e.g. MSc Data Science / Business"
                value={formData.intendedCourse}
                onChange={handleChange}
              />
            </div>

            <div className="checkbox-stack">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="consentAQF"
                  checked={formData.consentAQF}
                  onChange={handleChange}
                />
                <span>I authorize Skyview Consultants as my designated agent for UK university admissions under British Council AQF compliance.</span>
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="consentGDPR"
                  checked={formData.consentGDPR}
                  onChange={handleChange}
                />
                <span>I consent to UK GDPR data processing for CAS visa support and university application lodging.</span>
              </label>
            </div>

            <div className="form-group-underline" style={{ marginTop: '1.5rem' }}>
              <label>Digital Signature (Type Full Name)</label>
              <input
                type="text"
                name="signedName"
                placeholder="Type name to sign document"
                value={formData.signedName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Right Column: Live Agreement Letterhead Preview */}
          <div className="letterhead-card glass-card printable-document">
            <div className="letterhead-top">
              <div className="letterhead-brand">
                <img src="/logo.png" alt="Skyview Logo" className="letterhead-logo" />
                <div className="brand-address">
                  <span>Skyview Consultants UK Ltd</span>
                  <span>71-75 Shelton Street, Covent Garden</span>
                  <span>London WC2H 9JQ, United Kingdom</span>
                </div>
              </div>
              <div className="letterhead-ref">
                <span className="ref-tag">OFFICIAL CONTRACT</span>
                <span className="ref-val">{refNumber}</span>
                <span className="ref-date">Date: {currentDate}</span>
              </div>
            </div>

            <div className="letterhead-body">
              <h3 className="doc-heading">STUDENT REPRESENTATION & ADMISSION AUTHORISATION AGREEMENT</h3>

              <div className="doc-section">
                <h4>1. PARTIES TO AGREEMENT</h4>
                <p>This Representation Agreement ("Agreement") is executed on <strong>{currentDate}</strong> between <strong>Skyview Consultants UK Ltd</strong> ("Agent") and the applicant stated below ("Student"):</p>
                <div className="party-details">
                  <div><strong>Student Name:</strong> {formData.fullName || '[Student Full Name]'}</div>
                  <div><strong>Passport / ID:</strong> {formData.passportNum || '[Passport Number]'}</div>
                  <div><strong>Email Contact:</strong> {formData.email || '[Student Email]'}</div>
                  <div><strong>Target Program:</strong> {formData.intendedCourse} ({formData.studyLevel})</div>
                </div>
              </div>

              <div className="doc-section">
                <h4>2. SCOPE OF REPRESENTATION & SERVICES</h4>
                <p>Skyview Consultants shall act as the official authorized representative for the Student across British Council certified partner universities in the United Kingdom. Services include course eligibility screening, SOP review, UCAS portal submission, CAS statement issuance assistance, and UKVI Student Visa documentation guidance.</p>
              </div>

              <div className="doc-section">
                <h4>3. COMPLIANCE & PRIVACY CLAUSES</h4>
                <p><strong>British Council AQF Standard:</strong> The Agent agrees to uphold the Ethical Agent Code of Conduct set by the British Council. No guarantees of university offer letters or visa outcomes are promised beyond objective compliance guidance.</p>
                <p><strong>UK GDPR Protection:</strong> Student personal data provided will be stored securely and transmitted strictly to recognized UK higher education institutions and UK Visas and Immigration (UKVI).</p>
              </div>

              <div className="doc-signatures">
                <div className="sig-box">
                  <span className="sig-label">FOR SKYVIEW CONSULTANTS UK:</span>
                  <div className="sig-line">Mr. Sharan Ahamed</div>
                  <span className="sig-title">Director & Certified Agent (Ref: BC-UK-9821)</span>
                </div>

                <div className="sig-box">
                  <span className="sig-label">STUDENT ELECTRONIC SIGNATURE:</span>
                  <div className="sig-line">{formData.signedName || formData.fullName || '[Waiting for Signature]'}</div>
                  <span className="sig-title">Signed on {currentDate}</span>
                </div>
              </div>
            </div>

            <div className="letterhead-footer no-print">
              <button className="btn btn-accent btn-lg print-btn" onClick={handlePrint}>
                <Printer size={18} />
                Print / Save Contract PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contract-section {
          background: #FFFFFF;
        }

        .contract-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.25rem;
        }

        @media (min-width: 992px) {
          .contract-grid {
            grid-template-columns: 1fr 1.15fr;
            gap: 2.5rem;
          }
        }

        .card-heading {
          font-size: 1.35rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 2rem;
        }

        .checkbox-stack {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
          cursor: pointer;
        }

        .checkbox-label input {
          margin-top: 0.2rem;
          accent-color: var(--primary);
        }

        /* Live Document Letterhead */
        .letterhead-card {
          background: #FFFFFF !important;
          border: 2px solid var(--border-color) !important;
          padding: 2.25rem !important;
          display: flex;
          flex-direction: column;
        }

        .letterhead-top {
          display: flex;
          justify-content: space-between;
          border-bottom: 2px solid var(--primary);
          padding-bottom: 1.25rem;
          margin-bottom: 1.75rem;
        }

        .letterhead-logo {
          height: 54px;
          margin-bottom: 0.4rem;
        }

        .brand-address {
          display: flex;
          flex-direction: column;
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.3;
        }

        .letterhead-ref {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .ref-tag {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--accent-gold-dark);
          letter-spacing: 0.08em;
        }

        .ref-val {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 900;
          color: var(--primary);
        }

        .ref-date {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .doc-heading {
          font-size: 1.1rem;
          font-weight: 900;
          text-align: center;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .doc-section {
          margin-bottom: 1.25rem;
        }

        .doc-section h4 {
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 0.35rem;
        }

        .doc-section p {
          font-size: 0.9rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        .party-details {
          background: var(--bg-primary);
          padding: 0.75rem 1rem;
          border-radius: 10px;
          font-size: 0.875rem;
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .doc-signatures {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-top: 2rem;
          padding-top: 1.25rem;
          border-top: 1px dashed var(--border-color);
        }

        .sig-box {
          display: flex;
          flex-direction: column;
        }

        .sig-label {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--text-muted);
        }

        .sig-line {
          font-family: 'Georgia', serif;
          font-style: italic;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0.4rem 0;
          padding-bottom: 0.2rem;
          border-bottom: 1.5px solid var(--border-color);
        }

        .sig-title {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .letterhead-footer {
          margin-top: auto;
          padding-top: 1.5rem;
        }

        .print-btn {
          width: 100%;
        }

        @media print {
          body * {
            visibility: hidden;
          }
          .printable-document, .printable-document * {
            visibility: visible;
          }
          .printable-document {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            border: none !important;
            box-shadow: none !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
