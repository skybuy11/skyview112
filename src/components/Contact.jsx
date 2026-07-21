import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Globe } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studyLevel: 'Postgraduate',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get in Touch with Our Advisors</h2>
        <p className="section-subtitle">
          Start your UK admissions journey today. Schedule a free consultation with a British Council certified education counselor.
        </p>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Details */}
          <div className="info-panel glass-card">
            <h3 className="panel-title">London Headquarters</h3>
            <p className="panel-desc">
              Visit our Covent Garden London office or contact our international student desk directly.
            </p>

            <div className="contact-info-list">
              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="info-label">Office Address</span>
                  <p>71-75 Shelton Street, Covent Garden<br />London, WC2H 9JQ, United Kingdom</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="info-label">Email Support</span>
                  <p><a href="mailto:sharan@skyview.org.uk">sharan@skyview.org.uk</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="info-label">Phone & WhatsApp</span>
                  <p><a href="tel:+447725355355">+44 7725 355355</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Clock size={22} />
                </div>
                <div>
                  <span className="info-label">Working Hours</span>
                  <p>Monday – Friday: 9:00 AM – 6:00 PM (GMT)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="form-panel glass-card">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <h3 className="form-panel-title">Start Free Application Guidance</h3>

                <div className="form-group-underline">
                  <label>Your Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Sharan Ahamed"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group-underline">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group-underline">
                  <label>Phone / WhatsApp Number</label>
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
                    <option value="Undergraduate">Undergraduate (BSc / BA)</option>
                    <option value="Postgraduate">Postgraduate (MSc / MA / MBA)</option>
                    <option value="Doctorate">Doctorate (PhD)</option>
                    <option value="Foundation">Foundation / Pathway</option>
                  </select>
                </div>

                <div className="form-group-underline">
                  <label>Your Inquiry / Desired Course</label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Tell us your target subject or university..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg submit-btn">
                  Submit Consultation Request
                  <Send size={18} />
                </button>
              </form>
            ) : (
              <div className="submitted-box animate-fade-in">
                <CheckCircle size={56} className="text-success" />
                <h3>Application Request Received!</h3>
                <p>Thank you, <strong>{formData.name}</strong>. A British Council certified Skyview advisor will contact you within 24 business hours at <strong>{formData.email}</strong>.</p>
                <button
                  className="btn btn-secondary"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: var(--bg-primary);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.25rem;
        }

        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 0.9fr 1.1fr;
            gap: 2.5rem;
          }
        }

        .panel-title {
          font-size: 1.6rem;
          font-weight: 900;
          margin-bottom: 0.5rem;
        }

        .panel-desc {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .info-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-label {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .info-item p {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.5;
        }

        .info-item a {
          color: var(--primary);
        }

        .form-panel {
          background: #FFFFFF !important;
        }

        .form-panel-title {
          font-size: 1.5rem;
          font-weight: 900;
          margin-bottom: 2rem;
        }

        .submit-btn {
          width: 100%;
        }

        .submitted-box {
          text-align: center;
          padding: 3rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .submitted-box h3 {
          font-size: 1.6rem;
          font-weight: 900;
        }

        .submitted-box p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 440px;
        }
      `}</style>
    </section>
  );
}
