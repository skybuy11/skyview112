import React, { useState } from 'react';
import { Search, MapPin, Bookmark, GraduationCap, X, ChevronDown, ExternalLink } from 'lucide-react';

export default function Universities() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedUni, setSelectedUni] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const filterOptions = [
    'All',
    'Russell Group',
    'London',
    'Scotland & Wales',
    'Modern & Career'
  ];

  const universitiesData = [
    {
      id: 'lse',
      name: 'London School of Economics (LSE)',
      location: 'London, England',
      description: 'Specializing in social sciences, LSE is renowned globally for its leadership in economics, politics, sociology, law, and anthropology.',
      tags: ['Russell Group', 'London'],
      popularCourses: ['Economics', 'Finance', 'International Relations', 'Sociology'],
      established: '1895',
      studentCount: '11,000+',
      satisfaction: '91%',
      badge: 'Top for Social Sciences'
    },
    {
      id: 'ucl',
      name: 'University College London (UCL)',
      location: 'London, England',
      description: 'The first university in England to admit students of any religion and women on equal terms. A multidisciplinary research powerhouse.',
      tags: ['Russell Group', 'London'],
      popularCourses: ['Architecture', 'Law', 'Medicine', 'Psychology'],
      established: '1826',
      studentCount: '43,000+',
      satisfaction: '89%',
      badge: "London's Global Uni"
    },
    {
      id: 'durham',
      name: 'Durham University',
      location: 'Durham, England',
      description: "England's third oldest university, known for its collegiate system where students live and study in historic colleges.",
      tags: ['Russell Group', 'Collegiate'],
      popularCourses: ['Geography', 'History', 'Law', 'English Literature'],
      established: '1832',
      studentCount: '20,000+',
      satisfaction: '93%',
      badge: 'UNESCO Heritage Site'
    },
    {
      id: 'edinburgh',
      name: 'University of Edinburgh',
      location: 'Edinburgh, Scotland',
      description: "One of Scotland's ancient universities, famous for its role in the Scottish Enlightenment and world-leading research.",
      tags: ['Russell Group', 'Scotland & Wales'],
      popularCourses: ['Informatics (CS)', 'Biological Sciences', 'Philosophy', 'English Literature'],
      established: '1582',
      studentCount: '45,000+',
      satisfaction: '88%',
      badge: 'Ancient Scottish Uni'
    },
    {
      id: 'glasgow',
      name: 'University of Glasgow',
      location: 'Glasgow, Scotland',
      description: 'Founded in 1451, Glasgow is the fourth-oldest university in the English-speaking world. A member of the prestigious Russell Group.',
      tags: ['Russell Group', 'Scotland & Wales'],
      popularCourses: ['Veterinary Medicine', 'Aerospace Engineering', 'Medicine'],
      established: '1451',
      studentCount: '35,000+',
      satisfaction: '92%',
      badge: 'Russell Group Scotland'
    },
    {
      id: 'manchester',
      name: 'University of Manchester',
      location: 'Manchester, England',
      description: 'A red-brick research university known for high employability rates and groundbreaking scientific discoveries including graphene.',
      tags: ['Russell Group'],
      popularCourses: ['Chemical Engineering', 'Business Administration', 'Computer Science'],
      established: '1824',
      studentCount: '40,000+',
      satisfaction: '88%',
      badge: 'Research Powerhouse'
    },
    {
      id: 'greenwich',
      name: 'University of Greenwich',
      location: 'London, England',
      description: 'Located on a UNESCO World Heritage site in London, offering career-aligned programs in business, computing, and engineering.',
      tags: ['London', 'Modern & Career'],
      popularCourses: ['MBA International', 'Computer Science', 'Cybersecurity'],
      established: '1890',
      studentCount: '21,000+',
      satisfaction: '87%',
      badge: 'UNESCO Maritime Campus'
    },
    {
      id: 'middlesex',
      name: 'Middlesex University',
      location: 'London, England',
      description: 'Forward-looking London university known for industry placements, practical degree structures, and global career pathways.',
      tags: ['London', 'Modern & Career'],
      popularCourses: ['MSc Cybersecurity', 'Business Analytics', 'Nursing'],
      established: '1973',
      studentCount: '19,000+',
      satisfaction: '86%',
      badge: 'Global Career Focus'
    },
    {
      id: 'bpp',
      name: 'BPP University',
      location: 'London & UK Wide',
      description: 'UK specialist university dedicated exclusively to professional education in Law, Business, Finance, and Healthcare degrees.',
      tags: ['London', 'Modern & Career'],
      popularCourses: ['LLM Legal Practice', 'MSc Healthcare Management', 'ACCA Finance'],
      established: '1992',
      studentCount: '16,000+',
      satisfaction: '90%',
      badge: 'Professional Law & Business'
    }
  ];

  const filteredUnis = universitiesData.filter((uni) => {
    const matchesQuery = 
      uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.popularCourses.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));

    if (activeFilter === 'All') return matchesQuery;
    return matchesQuery && uni.tags.includes(activeFilter);
  });

  const paginatedUnis = filteredUnis.slice(0, visibleCount);

  return (
    <section id="universities" className="unis-section section">
      <div className="container">
        <h2 className="section-title">Partner Universities</h2>
        <p className="section-subtitle">
          Explore elite Russell Group institutions and leading career-focused UK universities officially represented by Skyview Consultants.
        </p>

        {/* Search & Filter Bar */}
        <div className="search-filter-box glass-card">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search by university name, location, or course..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(6); }}
              className="search-bar"
            />
          </div>

          <div className="filter-tags">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => { setActiveFilter(filter); setVisibleCount(6); }}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {paginatedUnis.length > 0 ? (
          <>
            <div className="unis-grid">
              {paginatedUnis.map((uni) => (
                <div 
                  key={uni.id} 
                  className="glass-card uni-card"
                  onClick={() => setSelectedUni(uni)}
                >
                  <div className="uni-card-header">
                    <span className="uni-badge">{uni.badge}</span>
                    <Bookmark className="bookmark-icon" size={18} />
                  </div>

                  <h3 className="uni-card-title">{uni.name}</h3>

                  <div className="uni-card-location">
                    <MapPin size={15} className="text-accent" />
                    <span>{uni.location}</span>
                  </div>

                  <p className="uni-card-desc">{uni.description}</p>

                  <div className="uni-card-tags">
                    {uni.tags.map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>

                  <button className="btn btn-secondary uni-card-btn">
                    View University Details
                  </button>
                </div>
              ))}
            </div>

            {/* Load More */}
            {visibleCount < filteredUnis.length && (
              <div className="load-more-container">
                <button className="btn btn-primary btn-load-more" onClick={() => setVisibleCount(prev => prev + 3)}>
                  Load More Universities
                  <ChevronDown size={18} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="no-results glass-card">
            <GraduationCap size={44} className="no-results-icon" />
            <h3>No Universities Found</h3>
            <p>No partner institutions match your query. Try resetting your search filters.</p>
            <button className="btn btn-primary" onClick={() => { setSearchQuery(''); setActiveFilter('All'); setVisibleCount(6); }}>
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedUni && (
        <div className="modal-overlay" onClick={() => setSelectedUni(null)}>
          <div className="modal-content glass-card animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedUni(null)}>
              <X size={20} />
            </button>

            <div className="modal-header">
              <span className="uni-badge">{selectedUni.badge}</span>
              <h3 className="modal-title">{selectedUni.name}</h3>
              <div className="modal-location">
                <MapPin size={16} />
                <span>{selectedUni.location}</span>
              </div>
            </div>

            <div className="modal-body">
              <p className="modal-desc">{selectedUni.description}</p>
              
              <div className="modal-stats-grid">
                <div className="modal-stat">
                  <span className="stat-val">{selectedUni.established}</span>
                  <span className="stat-lbl">Established</span>
                </div>
                <div className="modal-stat">
                  <span className="stat-val">{selectedUni.studentCount}</span>
                  <span className="stat-lbl">Students</span>
                </div>
                <div className="modal-stat">
                  <span className="stat-val">{selectedUni.satisfaction}</span>
                  <span className="stat-lbl">Satisfaction</span>
                </div>
              </div>

              <div className="modal-courses">
                <h4>Popular Programs:</h4>
                <div className="course-tags">
                  {selectedUni.popularCourses.map((c, i) => (
                    <span key={i} className="course-pill">{c}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setSelectedUni(null)}>
                Close
              </button>
              <a 
                href="#contact" 
                className="btn btn-accent"
                onClick={() => {
                  setSelectedUni(null);
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Inquire Admissions
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .unis-section {
          background-color: var(--bg-primary);
        }

        .search-filter-box {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2.25rem;
        }

        .search-input-wrapper {
          position: relative;
          width: 100%;
        }

        .search-icon {
          position: absolute;
          left: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .search-bar {
          width: 100%;
          padding: 0.8rem 1rem 0.8rem 3rem;
          border-radius: 99px;
          border: 1px solid var(--border-color);
          background-color: var(--bg-primary);
          color: var(--text-primary);
          font-size: 16px;
        }

        .search-bar:focus {
          border-color: var(--accent);
          background: #FFFFFF;
        }

        .filter-tags {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 4px;
        }

        .filter-tags::-webkit-scrollbar {
          display: none;
        }

        .filter-btn {
          background: transparent;
          border: 1px solid var(--border-color);
          padding: 0.45rem 1.1rem;
          border-radius: 99px;
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.825rem;
          cursor: pointer;
          flex-shrink: 0;
        }

        .filter-btn.active {
          background: var(--primary);
          border-color: var(--primary);
          color: #FFFFFF;
        }

        .unis-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 640px) {
          .unis-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .unis-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        .uni-card {
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .uni-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .uni-badge {
          background: var(--accent-light);
          color: var(--accent);
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
          border: 1px solid rgba(181, 138, 63, 0.2);
        }

        .bookmark-icon {
          color: var(--text-muted);
        }

        .uni-card-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
        }

        .uni-card-location {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.85rem;
        }

        .uni-card-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .uni-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.25rem;
        }

        .tag-pill {
          background: var(--bg-primary);
          color: var(--text-secondary);
          font-size: 0.7rem;
          padding: 0.2rem 0.55rem;
          border-radius: 4px;
          font-weight: 500;
          border: 1px solid var(--border-color);
        }

        .uni-card-btn {
          width: 100%;
        }

        .load-more-container {
          display: flex;
          justify-content: center;
          margin-top: 2.5rem;
        }

        .no-results {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 3rem 1.5rem;
          gap: 1rem;
        }

        /* Modal Overlay */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .modal-content {
          width: 100%;
          max-width: 580px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .modal-close {
          position: absolute;
          right: 1.25rem;
          top: 1.25rem;
          background: var(--bg-primary);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-primary);
        }

        .modal-header {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .modal-title {
          font-size: 1.4rem;
          font-weight: 700;
        }

        .modal-location {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .modal-body {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .modal-desc {
          font-size: 0.925rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .modal-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          background: var(--bg-primary);
          padding: 1rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
        }

        .modal-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat-val {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--primary);
        }

        .stat-lbl {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .modal-courses h4 {
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .course-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .course-pill {
          background: var(--bg-primary);
          color: var(--text-primary);
          font-size: 0.8rem;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
          border: 1px solid var(--border-color);
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 0.75rem;
          margin-top: 1.5rem;
          border-top: 1px solid var(--border-color);
          padding-top: 1.25rem;
          flex-wrap: wrap;
        }

        @media (max-width: 480px) {
          .modal-footer {
            flex-direction: column;
          }
          .modal-footer .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
