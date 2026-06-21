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
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Invalid phone number format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message details are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // clear error for this field
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request
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
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Have questions about studying in the UK? Fill out the form below, and one of our certified advisors will contact you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 contact-grid">
          {/* Left: Contact Info & Map */}
          <div className="contact-info-panel animate-fade-in animate-delay-1">
            <div className="contact-details-box">
              <h3 className="panel-title">Contact Information</h3>
              <p className="panel-desc">
                Feel free to visit our central London office or reach out to us through our direct contact numbers.
              </p>

              <ul className="info-list">
                <li className="info-item">
                  <MapPin className="info-icon text-accent" size={24} />
                  <div>
                    <h4>Registered Office</h4>
                    <p>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</p>
                  </div>
                </li>

                <li className="info-item">
                  <Mail className="info-icon text-accent" size={24} />
                  <div>
                    <h4>Email Address</h4>
                    <p><a href="mailto:info@skyviewconsultants.co.uk">info@skyviewconsultants.co.uk</a></p>
                  </div>
                </li>

                <li className="info-item">
                  <Phone className="info-icon text-accent" size={24} />
                  <div>
                    <h4>Phone Number</h4>
                    <p><a href="tel:+442071234567">+44 (0) 20 7123 4567</a></p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Elegant Image Container */}
            <div className="contact-image-container glass animate-fade-in">
              <img src="/library-students.png" alt="Students studying in the UK" className="contact-img" />
              <div className="contact-image-overlay">
                <span className="contact-image-tag">Study in the UK</span>
                <p className="contact-image-quote">"Your potential is endless. Go find your future."</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-panel glass animate-fade-in animate-delay-2">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} noValidate className="contact-form">
                <h3 className="form-panel-title">Send Us a Message</h3>

                {/* Name */}
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
                    <div className="error-message-underline">
                      <AlertCircle size={14} />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                <div className="form-row">
                  {/* Email */}
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
                      <div className="error-message-underline">
                        <AlertCircle size={14} />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  {/* Phone */}
                  <div className={`form-group-underline flex-1 ${errors.phone ? 'has-error' : ''}`}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 7123 456789"
                    />
                    {errors.phone && (
                      <div className="error-message-underline">
                        <AlertCircle size={14} />
                        <span>{errors.phone}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Subject / Inquiry Type */}
                <div className="form-group-underline">
                  <label htmlFor="inquiryType">What is this regarding?</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                  >
                    <option value="admissions">University & Course Admissions</option>
                    <option value="visas">Student Visa Application</option>
                    <option value="englishTest">English Knowledge Test Inquiry</option>
                    <option value="partnerships">University Partnerships</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                {/* Message Details */}
                <div className={`form-group-underline ${errors.message ? 'has-error' : ''}`}>
                  <label htmlFor="message">Please provide details about your inquiry</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your qualifications, desired course, and any questions..."
                  ></textarea>
                  {errors.message && (
                    <div className="error-message-underline">
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
                <h3>Message Sent</h3>
                <p className="success-message-text">
                  Thank you for contacting Skyview Consultants. One of our specialist advisors will review your inquiry and get back to you shortly at the email address provided.
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
          border-top: 1px solid var(--border-color);
        }

        .contact-grid {
          align-items: stretch;
          margin-top: 1.5rem;
        }

        .contact-info-panel {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .contact-details-box {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .panel-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          letter-spacing: -0.015em;
        }

        .panel-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .info-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .info-item {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
        }

        .info-icon {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--accent);
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-item h4 {
          font-size: 0.95rem;
          color: var(--text-primary);
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .info-item p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .info-item a {
          transition: color 0.2s;
        }

        .info-item a:hover {
          color: var(--accent);
        }

        .contact-image-container {
          height: 280px;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          position: relative;
        }

        .contact-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .contact-image-container:hover .contact-img {
          transform: scale(1.02);
        }

        .contact-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 60%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.5rem;
          color: #ffffff;
        }

        .contact-image-tag {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent);
          margin-bottom: 0.25rem;
        }

        .contact-image-quote {
          font-size: 0.9rem;
          font-weight: 500;
          font-style: italic;
          opacity: 0.9;
        }

        /* Form panel styles */
        .contact-form-panel {
          padding: 3rem;
          border-radius: 18px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          box-shadow: none;
        }

        @media (max-width: 640px) {
          .contact-form-panel {
            padding: 2.25rem 1.5rem;
          }
        }

        .form-panel-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 2rem;
          letter-spacing: -0.015em;
        }

        .form-row {
          display: flex;
          gap: 1.5rem;
          flex-direction: column;
        }

        @media (min-width: 640px) {
          .form-row {
            flex-direction: row;
          }
        }

        .flex-1 {
          flex: 1;
        }

        .form-submit-btn {
          width: 100%;
          margin-top: 1.5rem;
          padding: 0.85rem;
        }

        /* Success Panel */
        .success-panel {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem 0;
          gap: 1.25rem;
        }

        .success-icon {
          color: var(--secondary);
        }

        .success-panel h3 {
          font-size: 1.5rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        .success-message-text {
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 480px;
          margin-bottom: 1rem;
        }

        @media (max-width: 640px) {
          .contact-form-panel {
            padding: 1.75rem 1.25rem;
          }
          .contact-image-container {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
}
