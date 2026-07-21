import React, { useState } from 'react';
import { Calendar, ArrowRight, Bell, CheckCircle } from 'lucide-react';

export default function News() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const newsItems = [
    {
      id: 1,
      tag: 'UK VI POLICY',
      date: '18 July 2026',
      title: 'UK Post-Study Graduate Route (2-Year Work Permit) Confirmed for 2026/27 Intakes',
      snippet: 'The UK Home Office has re-confirmed that international graduates from recognized UK universities retain 2 years of unrestricted post-study work rights.'
    },
    {
      id: 2,
      tag: 'SCHOLARSHIPS',
      date: '10 July 2026',
      title: 'Chevening & British Council STEM Scholarships Open for International Applicants',
      snippet: 'Full-tuition grant opportunities are now open for postgraduate STEM and Sustainable Development applicants targeting top UK institutions.'
    },
    {
      id: 3,
      tag: 'CAS COMPLIANCE',
      date: '02 July 2026',
      title: 'UKVI Updated Financial Maintenance Thresholds for London vs Regional Campuses',
      snippet: 'Essential guidance on calculating required bank balance statements prior to lodging student visa applications for the Autumn intake.'
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section id="news" className="section news-section">
      <div className="container">
        <h2 className="section-title">UK Higher Education News & Updates</h2>
        <p className="section-subtitle">
          Stay informed on UK Student Visa policies, university scholarship deadlines, and admissions regulations.
        </p>

        <div className="news-grid">
          {newsItems.map((item) => (
            <div key={item.id} className="news-card glass-card">
              <div className="news-header">
                <span className="news-tag">{item.tag}</span>
                <span className="news-date">
                  <Calendar size={13} />
                  {item.date}
                </span>
              </div>
              <h3 className="news-title">{item.title}</h3>
              <p className="news-snippet">{item.snippet}</p>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription Bar */}
        <div className="newsletter-card glass-card">
          <div className="newsletter-text">
            <Bell className="bell-icon" size={24} />
            <div>
              <h4 className="newsletter-title">Subscribe to UK Admissions Alerts</h4>
              <p className="newsletter-desc">Receive visa policy updates and scholarship deadlines directly in your inbox.</p>
            </div>
          </div>

          {!subscribed ? (
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary newsletter-btn">
                Subscribe
              </button>
            </form>
          ) : (
            <div className="subscribed-msg text-success">
              <CheckCircle size={20} />
              <span>Thank you for subscribing to Skyview UK News!</span>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .news-section {
          background: var(--bg-primary);
        }

        .news-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
          margin-bottom: 3.5rem;
        }

        @media (min-width: 992px) {
          .news-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
        }

        .news-card {
          display: flex;
          flex-direction: column;
        }

        .news-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .news-tag {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--primary);
          background: var(--primary-light);
          padding: 0.25rem 0.65rem;
          border-radius: 99px;
          letter-spacing: 0.05em;
        }

        .news-date {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .news-title {
          font-size: 1.25rem;
          font-weight: 800;
          line-height: 1.35;
          margin-bottom: 0.85rem;
          color: var(--text-primary);
        }

        .news-snippet {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .newsletter-card {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          background: #FFFFFF !important;
          padding: 2rem !important;
          border-color: rgba(0, 92, 59, 0.2) !important;
        }

        @media (min-width: 992px) {
          .newsletter-card {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .newsletter-text {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .bell-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
        }

        .newsletter-title {
          font-size: 1.2rem;
          font-weight: 800;
        }

        .newsletter-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .newsletter-form {
          display: flex;
          gap: 0.75rem;
          width: 100%;
          max-width: 480px;
        }

        .newsletter-input {
          flex: 1;
          background: var(--bg-primary);
          border: 1.5px solid var(--border-color);
          padding: 0.75rem 1rem;
          border-radius: 99px;
          font-size: 16px;
        }

        .newsletter-btn {
          padding: 0.75rem 1.5rem;
          min-height: 48px;
        }

        .subscribed-msg {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
        }
      `}</style>
    </section>
  );
}
