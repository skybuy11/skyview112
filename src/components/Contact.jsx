import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'admissions',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message details';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'admissions',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Have questions about studying in the UK? Send us a message and a certified advisor will get in touch with you.
        </p>

        <div className="contact-grid">
          {/* Left Panel: Contact Info */}
          <div className="contact-info-panel">
            <div className="contact-details-box">
              <h3 className="panel-title">Contact Information</h3>
              <p className="panel-desc">
                Feel free to visit our central London office or contact us directly via email or phone.
              </p>

              <ul className="info-list">
                <li className="info-item">
                  <div className="info-icon"><MapPin size={22} /></div>
                  <div>
                    <h4>Registered Office</h4>
                    <p>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</p>
                  </div>
                </li>

                <li className="info-item">
                  <div className="info-icon"><Mail size={22} /></div>
                  <div>
                    <h4>Email Address</h4>
                    <p><a href="mailto:sharan@skyview.org.uk">sharan@skyview.org.uk</a></p>
                  </div>
                </li>

                <li className="info-item">
                  <div className="info-icon"><Phone size={22} /></div>
                  <div>
                    <h4>Phone Number</h4>
                    <p><a href="tel:+447725355355">+44 7725 355355</a></p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="contact-img-box glass-card">
              <img src="/library-students.png" alt="Students studying in the UK" className="contact-img" />
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="contact-form-panel glass-card">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} noValidate className="contact-form">
                <h3 className="form-panel-title">Send Us a Message</h3>

                <div className={`form-group-underline ${errors.name ? 'has-error' : ''}`}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <div className="error-message">
                      <AlertCircle size={14} />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                <div className="form-row">
                  <div className={`form-group-underline flex-1 ${errors.email ? 'has-error' : ''}`}>
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                    />
                    {errors.email && (
                      <div className="error-message">
                        <AlertCircle size={14} />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  <div className={`form-group-underline flex-1 ${errors.phone ? 'has-error' : ''}`}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 7..."
                    />
                    {errors.phone && (
                      <div className="error-message">
                        <AlertCircle size={14} />
                        <span>{errors.phone}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-group-underline">
                  <label htmlFor="inquiryType">Subject / Inquiry Type</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                  >
                    <option value="admissions">University & Course Admissions</option>
                    <option value="visas">Student Visa (CAS) Guidance</option>
                    <option value="contract">Representation Agreement Inquiry</option>
                    <option value="englishTest">English Diagnostic Test Query</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div className={`form-group-underline ${errors.message ? 'has-error' : ''}`}>
                  <label htmlFor="message">Message Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your qualifications, intended course, and questions..."
                  ></textarea>
                  {errors.message && (
                    <div className="error-message">
                      <AlertCircle size={14} />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                <button 
                  type="submit" 
                  className="btn btn-accent form-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending Request...' : 'Send Inquiry'}
                  <Send size={16} />
                </button>
              </form>
            ) : (
              <div className="success-panel animate-fade-in">
                <CheckCircle className="success-icon" size={54} />
                <h3>Message Sent Successfully</h3>
                <p className="success-message-text">
                  Thank you for contacting Skyview Consultants. A specialist advisor will review your message and reply to your email shortly.
                </p>
                <button 
                  className="btn btn-secondary" 
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-primary);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr 1.1fr;
            gap: 3rem;
          }
        }

        .contact-info-panel {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .panel-title {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .panel-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }

        .info-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .info-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .info-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-item h4 {
          font-size: 0.95rem;
          font-weight: 700;
        }

        .info-item p {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .contact-img-box {
          padding: 0.5rem;
        }

        .contact-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 12px;
        }

        .form-panel-title {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .form-row {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        @media (min-width: 640px) {
          .form-row {
            flex-direction: row;
            gap: 1.25rem;
          }
        }

        .flex-1 {
          flex: 1;
        }

        .error-message {
          font-size: 0.75rem;
          color: #EF4444;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          margin-top: 0.25rem;
        }

        .form-submit-btn {
          width: 100%;
          margin-top: 1rem;
        }

        .success-panel {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem 0;
          gap: 1rem;
        }

        .success-icon {
          color: var(--success);
        }
      `}</style>
    </section>
  );
}
