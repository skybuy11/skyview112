import React, { useState } from 'react';
import { Calendar, Clock, ChevronRight, Newspaper, ArrowRight } from 'lucide-react';

export default function News() {
  const [expandedId, setExpandedId] = useState(null);

  const newsData = [
    {
      id: 1,
      title: 'AI and Data Science Scholarships for International Students Announced',
      date: 'June 12, 2026',
      readTime: '4 min read',
      tag: 'Scholarships',
      summary: 'Leading UK universities have announced a £50 million scholarship fund to attract top international talent in AI and data science for 2026/2027.',
      content: 'This major funding injection is backed by both university consortiums and key tech industry partners. The scholarships cover full tuition fees and provide living stipends for postgraduate applicants pursuing Master\'s and PhD degrees in artificial intelligence and machine learning at Russell Group institutions.'
    },
    {
      id: 2,
      title: 'Digital Proof of Study Becomes Standard for UK Student Visas',
      date: 'May 28, 2026',
      readTime: '3 min read',
      tag: 'Visa & Rules',
      summary: 'The UK Home Office is rolling out a fully digital system for Confirmation of Acceptance for Studies (CAS), eliminating physical certificates.',
      content: 'Under the new system, international students receive their CAS numbers and visa sponsorships through a streamlined online portal. This digital transformation aims to reduce administrative delays and speed up visa processing times ahead of the autumn intake.'
    },
    {
      id: 3,
      title: 'International Student Satisfaction in the UK Reaches All-Time High',
      date: 'May 15, 2026',
      readTime: '5 min read',
      tag: 'Student Life',
      summary: 'The National Student Survey (NSS) results show over 90% satisfaction rate among international students studying at British institutions.',
      content: 'The survey highlights high satisfaction rates in teaching quality, campus facilities, and academic support. International students praised the multicultural environment, practical degree structures, and career readiness services across London, Edinburgh, and Manchester.'
    }
  ];

  return (
    <section id="news" className="news-section section">
      <div className="container">
        <h2 className="section-title">UK Education News</h2>
        <p className="section-subtitle">
          Stay informed with official updates on UK visa regulations, university scholarships, and international student policies.
        </p>

        <div className="news-grid">
          {newsData.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div 
                key={item.id} 
                className={`glass-card news-card ${isExpanded ? 'expanded' : ''}`}
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
              >
                <div className="news-card-header">
                  <span className="news-tag">{item.tag}</span>
                  <div className="news-meta">
                    <Calendar size={13} />
                    <span>{item.date}</span>
                    <span>•</span>
                    <Clock size={13} />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                <h3 className="news-title">{item.title}</h3>
                <p className="news-summary">{item.summary}</p>
                
                {isExpanded && (
                  <p className="news-content animate-fade-in">{item.content}</p>
                )}

                <div className="news-footer">
                  <span className="news-readmore-btn">
                    {isExpanded ? 'Read less' : 'Read full update'}
                  </span>
                  <ChevronRight size={16} className={`arrow-icon ${isExpanded ? 'rotated' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Newsletter Subscription */}
        <div className="newsletter-box glass-card">
          <div className="newsletter-text">
            <Newspaper className="newsletter-icon" size={28} />
            <div>
              <h3>Want to stay updated with UK education?</h3>
              <p>Subscribe to our newsletter for instant scholarship alerts and visa updates.</p>
            </div>
          </div>
          <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required 
              className="newsletter-input" 
            />
            <button type="submit" className="btn btn-accent">
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .news-section {
          background-color: var(--bg-primary);
        }

        .news-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 768px) {
          .news-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        .news-card {
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .news-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.85rem;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .news-tag {
          background: var(--primary-light);
          color: var(--primary);
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          border-radius: 99px;
        }

        .news-meta {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .news-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          line-height: 1.35;
        }

        .news-summary {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .news-content {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.6;
          padding-top: 0.85rem;
          border-top: 1px dashed var(--border-color);
          margin-bottom: 1.25rem;
        }

        .news-footer {
          display: flex;
          align-items: center;
          gap: 0.2rem;
          color: var(--accent);
          font-weight: 600;
          font-size: 0.85rem;
        }

        .arrow-icon.rotated {
          transform: rotate(90deg);
        }

        .newsletter-box {
          margin-top: 3.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
          justify-content: space-between;
        }

        @media (min-width: 992px) {
          .newsletter-box {
            flex-direction: row;
            padding: 2.25rem 2.5rem;
          }
        }

        .newsletter-text {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        @media (max-width: 640px) {
          .newsletter-text {
            flex-direction: column;
            text-align: center;
          }
        }

        .newsletter-icon {
          color: var(--primary);
          flex-shrink: 0;
        }

        .newsletter-text h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .newsletter-text p {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .newsletter-form {
          display: flex;
          gap: 0.75rem;
          width: 100%;
          max-width: 420px;
        }

        @media (max-width: 480px) {
          .newsletter-form {
            flex-direction: column;
          }
          .newsletter-form .btn {
            width: 100%;
          }
        }

        .newsletter-input {
          border: 1.5px solid var(--border-color);
          border-radius: 99px;
          padding: 0.65rem 1.25rem;
          font-size: 16px;
          background: var(--bg-primary);
          color: var(--text-primary);
          width: 100%;
        }

        .newsletter-input:focus {
          border-color: var(--primary);
          background: #FFFFFF;
        }
      `}</style>
    </section>
  );
}
