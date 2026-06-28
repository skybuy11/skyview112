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
      summary: 'Leading UK universities have announced a £50 million scholarship fund to attract top international talent in AI and data science for the 2026/2027 academic year.',
      content: 'This major funding injection is backed by both university consortiums and key tech industry partners. The scholarships will cover full tuition fees and provide living stipends for outstanding postgraduate applicants pursuing Master\'s and PhD degrees in artificial intelligence, machine learning, and advanced data science programs. Participating Russell Group universities include Imperial College London, UCL, and the University of Edinburgh. Applications open in October.'
    },
    {
      id: 2,
      title: 'Digital Proof of Study Becomes Standard for UK Student Visas',
      date: 'May 28, 2026',
      readTime: '3 min read',
      tag: 'Visa & Rules',
      summary: 'The UK Home Office is rolling out a fully digital system for Confirmation of Acceptance for Studies (CAS), eliminating physical certificates.',
      content: 'Under the new system, international students will receive their CAS numbers and visa sponsorships through a streamlined online portal. This digital transformation aims to reduce administrative delays and speed up visa processing times ahead of the autumn intake. The digital proof will integrate directly with biometric profiles, making the application process faster and more secure. Certified consultants will have direct dashboard access to assist students.'
    },
    {
      id: 3,
      title: 'International Student Satisfaction in the UK Reaches All-Time High',
      date: 'May 15, 2026',
      readTime: '5 min read',
      tag: 'Student Life',
      summary: 'The National Student Survey (NSS) results show over 90% satisfaction rate among international students studying at British institutions.',
      content: 'The survey highlights high satisfaction rates in teaching quality, campus facilities, and academic support. International students praised the multicultural environment, the practical nature of courses, and career readiness services. Major centers like London, Edinburgh, and Glasgow scored particularly high in student experience, confirming the UK as a premier global destination for higher education.'
    },
    {
      id: 4,
      title: "UK Government Introduces New 'High Potential Individual' Visa Route",
      date: 'April 20, 2026',
      readTime: '4 min read',
      tag: 'Careers',
      summary: 'A new streamlined work visa for graduates from top global universities wishing to work in the UK, effective from mid-2026.',
      content: 'This visa route allows highly skilled graduates from designated top-tier global universities to come to the UK without a prior job offer. The visa is valid for two years (three years for PhD graduates) and offers an excellent opportunity for skilled young professionals to start careers in major UK industries, including finance, tech, and creative fields. It represents the government\'s commitment to attracting international talent.'
    },
    {
      id: 5,
      title: 'UK Universities to Increase Focus on Sustainable Development Goals',
      date: 'April 02, 2026',
      readTime: '3 min read',
      tag: 'Academic',
      summary: 'A new sector-wide commitment aims to integrate sustainability and climate goals into curricula and research across all major disciplines.',
      content: 'The initiative, supported by over 80 UK higher education institutions, will see climate literacy and sustainable business practices integrated into engineering, business, law, and arts programs. It also pledges increased funding for green technology research projects, offering international students opportunities to work on cutting-edge sustainability projects during their studies.'
    },
    {
      id: 6,
      title: 'Student Visa Application Fees to be Adjusted in July 2026',
      date: 'March 18, 2026',
      readTime: '3 min read',
      tag: 'Visa & Rules',
      summary: 'The UK Home Office has announced upcoming adjustments to student visa application fees and healthcare surcharges.',
      content: 'The standard visa application fee for student routes applied from outside the UK will see a minor adjustment starting July 2026. The Immigration Health Surcharge (IHS) will also be updated. Students planning their applications for the autumn 2026 intake are strongly advised to finalize their submissions early to take advantage of current rates and avoid the summer peak processing rush.'
    }
  ];

  return (
    <section id="news" className="news-section">
      <div className="container">
        <h2 className="section-title">UK Education News</h2>
        <p className="section-subtitle">
          Stay informed with the latest updates on UK immigration rules, university scholarships, and international student policies.
        </p>

        <div className="grid-3 news-grid">
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
                    <div className="meta-icon-text">
                      <Calendar size={14} />
                      <span>{item.date}</span>
                    </div>
                    <div className="meta-icon-text">
                      <Clock size={14} />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </div>

                <h3 className="news-title">{item.title}</h3>
                
                <p className="news-summary">{item.summary}</p>
                
                {isExpanded && (
                  <p className="news-content animate-fade-in">
                    {item.content}
                  </p>
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

        <div className="newsletter-box glass">
          <div className="newsletter-text">
            <Newspaper className="newsletter-icon" size={32} />
            <div>
              <h3>Want to stay updated with UK education?</h3>
              <p>Subscribe to our monthly newsletter and get scholarship alerts directly in your inbox.</p>
            </div>
          </div>
          <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              required 
              className="form-control newsletter-input" 
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
          border-top: 1px solid var(--border-color);
        }

        .news-grid {
          margin-top: 1.5rem;
        }

        .news-card {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          padding: 1.25rem 1rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          box-shadow: none;
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (min-width: 480px) {
          .news-card {
            padding: 1.75rem 1.25rem;
            border-radius: 18px;
          }
        }

        @media (min-width: 768px) {
          .news-card {
            padding: 2.25rem;
          }
        }

        .news-card:hover {
          transform: translateY(-2px);
          border-color: var(--accent);
          box-shadow: var(--card-shadow-hover);
        }

        .news-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .news-tag {
          background: var(--accent-light);
          color: var(--accent);
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.3rem 0.75rem;
          border-radius: 99px;
          border: 1px solid rgba(181, 138, 63, 0.1);
        }

        .news-meta {
          display: flex;
          gap: 0.75rem;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .meta-icon-text {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .news-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 0.75rem;
          letter-spacing: -0.015em;
        }

        .news-summary {
          font-size: 0.9rem;
          line-height: 1.55;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .news-content {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
          padding-top: 1rem;
          border-top: 1px dashed var(--border-color);
          margin-bottom: 1.5rem;
        }

        .news-footer {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--accent);
          font-weight: 500;
          font-size: 0.85rem;
          margin-top: auto;
        }

        .news-readmore-btn {
          font-family: var(--font-body);
        }

        .arrow-icon {
          transition: transform 0.2s;
        }

        .arrow-icon.rotated {
          transform: rotate(90deg);
        }

        /* Newsletter Box */
        .newsletter-box {
          margin-top: 4.5rem;
          padding: 2.5rem;
          border-radius: 18px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          align-items: center;
          justify-content: space-between;
        }

        @media (min-width: 1024px) {
          .newsletter-box {
            flex-direction: row;
            padding: 2.5rem 3.5rem;
          }
        }

        .newsletter-text {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          text-align: left;
        }

        @media (max-width: 640px) {
          .newsletter-text {
            flex-direction: column;
            text-align: center;
          }
        }

        .newsletter-icon {
          color: var(--accent);
          flex-shrink: 0;
        }

        .newsletter-text h3 {
          font-size: 1.05rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
          font-weight: 600;
        }

        @media (min-width: 640px) {
          .newsletter-text h3 {
            font-size: 1.25rem;
          }
        }

        .newsletter-text p {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .newsletter-form {
          display: flex;
          gap: 1rem;
          width: 100%;
          max-width: 420px;
          align-items: center;
        }

        @media (max-width: 480px) {
          .newsletter-form {
            flex-direction: column;
            align-items: stretch;
          }
        }

        .newsletter-input {
          border-radius: 0;
          border: none;
          border-bottom: 1.5px solid var(--border-color);
          padding: 0.5rem 0;
          font-size: 0.95rem;
          background: transparent;
          color: var(--text-primary);
          width: 100%;
          transition: border-color 0.3s;
        }

        .newsletter-input:focus {
          border-bottom-color: var(--accent);
          outline: none;
        }

        @media (max-width: 640px) {
          .newsletter-box {
            padding: 1.5rem 1rem;
            margin-top: 2.5rem;
          }
          .newsletter-text {
            gap: 0.75rem;
          }
          .news-grid {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
