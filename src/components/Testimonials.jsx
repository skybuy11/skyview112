import React from 'react';
import { Star, CheckCircle2, Quote, GraduationCap } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Ayesha Rahman',
      program: 'MSc Data Science & AI',
      university: 'University of Greenwich (London)',
      badge: 'CAS & Visa Approved in 14 Days',
      quote: 'Skyview Consultants guided me through every step from selecting the right MSc course at Greenwich to preparing my financial bank statements for my CAS. Everything was 100% transparent with zero hidden fees.'
    },
    {
      name: 'Karthik Nair',
      program: 'MBA Global Business (Placement Year)',
      university: 'Coventry University (London Campus)',
      badge: '£3,000 Merit Scholarship Secured',
      quote: 'Mr. Sharan Ahamed and his team helped me polish my Statement of Purpose and prepared me for my credibility interview. I received my unconditional offer and £3,000 scholarship within 10 days!'
    },
    {
      name: 'Fatima Al-Mansoor',
      program: 'BSc (Hons) Cyber Security',
      university: 'Middlesex University London',
      badge: 'Direct Undergraduate Entry',
      quote: 'As parents, we wanted a British Council certified agent we could trust. Skyview shared the official Study UK Student Guide on day one and supported our daughter all the way to her London accommodation.'
    }
  ];

  return (
    <section className="section testimonials-section">
      <div className="container">
        <h2 className="section-title">Student & Parent Success Stories</h2>
        <p className="section-subtitle">
          Read verified experiences from international students and families placed at leading UK universities through Skyview Consultants.
        </p>

        <div className="testimonials-grid">
          {reviews.map((rev, idx) => (
            <div key={idx} className="testimonial-card glass-card">
              <div className="testi-top">
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />
                  ))}
                </div>
                <span className="offer-badge">
                  <CheckCircle2 size={14} />
                  {rev.badge}
                </span>
              </div>

              <p className="testi-quote">"{rev.quote}"</p>

              <div className="testi-author">
                <div className="author-avatar">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="author-name">{rev.name}</h4>
                  <span className="author-course">{rev.program}</span>
                  <span className="author-uni">{rev.university}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          background: var(--bg-primary);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
        }

        @media (min-width: 992px) {
          .testimonials-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
        }

        .testimonial-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .testi-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .stars-row {
          display: flex;
          gap: 0.2rem;
        }

        .offer-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(16, 185, 129, 0.1);
          color: #047857;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.3rem 0.7rem;
          border-radius: 99px;
        }

        .testi-quote {
          font-size: 1.02rem;
          line-height: 1.65;
          color: var(--text-secondary);
          font-style: italic;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .testi-author {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }

        .author-avatar {
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

        .author-name {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .author-course {
          display: block;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--primary);
        }

        .author-uni {
          display: block;
          font-size: 0.78rem;
          color: var(--text-muted);
        }
      `}</style>
    </section>
  );
}
