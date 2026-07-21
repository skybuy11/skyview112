import React, { useState } from 'react';
import { Search, MapPin, Award, CheckCircle, ExternalLink, X, Building2, GraduationCap } from 'lucide-react';

export default function Universities({ setCurrentTab }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedUni, setSelectedUni] = useState(null);

  const universities = [
    {
      id: 1,
      name: 'University of Greenwich',
      location: 'London & Medway, England',
      ranking: 'Top London Campus',
      category: 'London',
      acceptanceRate: '68%',
      popularCourses: ['Cyber Security', 'International Business', 'Logistics & Supply Chain', 'Nursing'],
      description: 'Iconic UNESCO World Heritage campus location offering flexible entry requirements, placement years, and career-aligned degree programs.'
    },
    {
      id: 2,
      name: 'Middlesex University London',
      location: 'Hendon, North London, England',
      ranking: 'Top Modern London Uni',
      category: 'London',
      acceptanceRate: '72%',
      popularCourses: ['Information Technology', 'Graphic Design', 'Accounting & Finance', 'Public Health'],
      description: 'Industry-integrated modern university in North London with high international student satisfaction and direct internship options.'
    },
    {
      id: 3,
      name: 'BPP University',
      location: 'London, Birmingham, Manchester & Bristol',
      ranking: 'Leading Professional Provider',
      category: 'London',
      acceptanceRate: '78%',
      popularCourses: ['ACCA Accounting', 'SQE Law Practice', 'Data Analytics', 'Healthcare Management'],
      description: 'Dedicated professional degree provider focusing strictly on employer-sponsored professional qualifications, business, and law tracks.'
    },
    {
      id: 4,
      name: 'Coventry University',
      location: 'Coventry & London, England',
      ranking: '#1 Modern University UK',
      category: 'Career Focused',
      acceptanceRate: '65%',
      popularCourses: ['Automotive Engineering', 'Global Business', 'Computer Science', 'Project Management'],
      description: 'Award-winning UK university renowned for employment outcomes, state-of-the-art simulation labs, and flexible intake options.'
    },
    {
      id: 5,
      name: 'University of Sunderland',
      location: 'Sunderland & London, England',
      ranking: 'High International Support',
      category: 'Career Focused',
      acceptanceRate: '74%',
      popularCourses: ['MBA (Work Placement)', 'Pharmacy', 'Digital Marketing', 'Tourism & Hospitality'],
      description: 'Career-focused UK university offering affordable tuition, generous international scholarships, and London/Sunderland campus choices.'
    },
    {
      id: 6,
      name: 'De Montfort University (DMU)',
      location: 'Leicester, England',
      ranking: 'Top 10 Employability UK',
      category: 'Career Focused',
      acceptanceRate: '69%',
      popularCourses: ['Fashion & Textiles', 'Artificial Intelligence', 'Architecture', 'Business Management'],
      description: 'Dynamic campus in Leicester recognized for world-leading design, technology research, and international graduate career support.'
    },
    {
      id: 7,
      name: 'University of Chester',
      location: 'Chester, North West England',
      ranking: 'Top Student Satisfaction',
      category: 'Regional Excellence',
      acceptanceRate: '73%',
      popularCourses: ['Biomedical Science', 'International Finance', 'Software Engineering', 'Psychology'],
      description: 'Historic and safe historic city campus setting delivering high student satisfaction, affordable living costs, and supportive faculties.'
    },
    {
      id: 8,
      name: 'University of Hertfordshire',
      location: 'Hatfield (25 mins from London)',
      ranking: 'Top Post-Polytechnic UK',
      category: 'Career Focused',
      acceptanceRate: '70%',
      popularCourses: ['Aerospace Engineering', 'Robotics', 'Data Science', 'Business Analytics'],
      description: 'Innovative university located just 25 minutes from central London, featuring direct industry ties with UK aerospace and tech hubs.'
    },
    {
      id: 9,
      name: 'University of East London (UEL)',
      location: 'Docklands & Stratford, London',
      ranking: 'Top London Career Impact',
      category: 'London',
      acceptanceRate: '71%',
      popularCourses: ['Construction Management', 'Civil Engineering', 'FinTech', 'Clinical Psychology'],
      description: 'Vibrant London Docklands campus providing career-focused degree programs with active industry employer partnerships.'
    },
    {
      id: 10,
      name: 'University of Portsmouth',
      location: 'Portsmouth, South Coast England',
      ranking: 'TEF Gold Rating UK',
      category: 'Regional Excellence',
      acceptanceRate: '67%',
      popularCourses: ['Logistics & Supply Chain', 'Cyber Security', 'Mechanical Engineering', 'International Relations'],
      description: 'Gold-rated coastal UK university offering high-quality teaching, industry work placements, and strong international student care.'
    }
  ];

  const categories = ['All', 'London', 'Career Focused', 'Regional Excellence'];

  const filteredUnis = universities.filter(uni => {
    const matchesCategory = activeCategory === 'All' || uni.category === activeCategory;
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          uni.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          uni.popularCourses.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleApplyNow = (uniName) => {
    setSelectedUni(null);
    setCurrentTab('contact');
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="universities" className="section unis-section">
      <div className="container">
        <h2 className="section-title">UK Partner Universities</h2>
        <p className="section-subtitle">
          Explore career-focused British institutions offering high international acceptance rates, generous scholarships, and placement year options across London and the UK.
        </p>

        {/* Search & Filter Box */}
        <div className="search-filter-box glass-card">
          <div className="search-bar-wrapper">
            <Search size={22} className="search-bar-icon" />
            <input
              type="text"
              placeholder="Search university name, city or degree subject..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-bar"
            />
          </div>

          <div className="filter-tags">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid Without Images */}
        <div className="unis-grid">
          {filteredUnis.map((uni) => (
            <div key={uni.id} className="uni-card glass-card">
              <div className="uni-card-header-bar">
                <div className="uni-icon-box">
                  <GraduationCap size={26} />
                </div>
                <span className="uni-ranking-badge">{uni.ranking}</span>
              </div>

              <div className="uni-card-body">
                <span className="uni-location-tag">
                  <MapPin size={14} />
                  {uni.location}
                </span>

                <h3 className="uni-card-title">{uni.name}</h3>
                <p className="uni-card-desc">{uni.description}</p>

                <div className="uni-courses-box">
                  <span className="courses-label">Popular Programs:</span>
                  <div className="course-pills">
                    {uni.popularCourses.slice(0, 3).map((course, idx) => (
                      <span key={idx} className="course-pill">{course}</span>
                    ))}
                  </div>
                </div>

                <div className="uni-card-actions">
                  <button 
                    className="btn btn-secondary uni-card-btn"
                    onClick={() => setSelectedUni(uni)}
                  >
                    View Details
                  </button>
                  <button 
                    className="btn btn-primary uni-card-btn"
                    onClick={() => handleApplyNow(uni.name)}
                  >
                    Apply Direct
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        {selectedUni && (
          <div className="modal-backdrop" onClick={() => setSelectedUni(null)}>
            <div className="modal-content glass-card animate-fade-in" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedUni(null)}>
                <X size={24} />
              </button>

              <div className="modal-header">
                <Building2 size={32} className="modal-icon text-primary" />
                <div>
                  <span className="uni-ranking-badge">{selectedUni.ranking}</span>
                  <h3 className="modal-title">{selectedUni.name}</h3>
                  <span className="uni-location-tag"><MapPin size={14} />{selectedUni.location}</span>
                </div>
              </div>

              <div className="modal-body">
                <p className="modal-desc">{selectedUni.description}</p>

                <div className="modal-meta-grid">
                  <div className="meta-box">
                    <span className="meta-lbl">Category</span>
                    <span className="meta-val">{selectedUni.category}</span>
                  </div>
                  <div className="meta-box">
                    <span className="meta-lbl">Est. Acceptance Rate</span>
                    <span className="meta-val">{selectedUni.acceptanceRate}</span>
                  </div>
                </div>

                <h4 className="modal-subheading">Featured Degrees Offered:</h4>
                <div className="course-pills">
                  {selectedUni.popularCourses.map((c, idx) => (
                    <span key={idx} className="course-pill">{c}</span>
                  ))}
                </div>
              </div>

              <div className="modal-footer">
                <button 
                  className="btn btn-accent btn-lg"
                  onClick={() => handleApplyNow(selectedUni.name)}
                >
                  Start Application to {selectedUni.name}
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .unis-section {
          background: #FFFFFF;
        }

        .search-filter-box {
          margin-bottom: 3rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding: 1.5rem !important;
        }

        .search-bar-wrapper {
          position: relative;
          width: 100%;
        }

        .search-bar-icon {
          position: absolute;
          left: 1.15rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .search-bar {
          width: 100%;
          padding: 0.95rem 1rem 0.95rem 3.25rem;
          background: var(--bg-primary);
          border: 1.5px solid var(--border-color);
          border-radius: 99px;
          color: var(--text-primary);
          font-size: 16px;
        }

        .search-bar:focus {
          border-color: var(--primary);
        }

        .filter-tags {
          display: flex;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.55rem 1.25rem;
          border-radius: 99px;
          background: var(--bg-subtle);
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          border: 1px solid transparent;
          transition: all 0.2s ease;
        }

        .filter-btn:hover, .filter-btn.active {
          background: var(--primary);
          color: #FFFFFF;
        }

        .unis-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
        }

        @media (min-width: 992px) {
          .unis-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
        }

        .uni-card {
          display: flex;
          flex-direction: column;
          padding: 1.75rem !important;
        }

        .uni-card-header-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .uni-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .uni-ranking-badge {
          background: var(--primary-light);
          color: var(--primary);
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.35rem 0.85rem;
          border-radius: 99px;
          border: 1px solid rgba(0, 92, 59, 0.15);
        }

        .uni-card-body {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .uni-location-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.825rem;
          color: var(--text-muted);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .uni-card-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.65rem;
          line-height: 1.25;
        }

        .uni-card-desc {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }

        .uni-courses-box {
          margin-top: auto;
          margin-bottom: 1.5rem;
        }

        .courses-label {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--text-muted);
          text-transform: uppercase;
          margin-bottom: 0.45rem;
          display: block;
        }

        .course-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .course-pill {
          background: var(--primary-light);
          color: var(--primary);
          font-size: 0.78rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          border-radius: 99px;
        }

        .uni-card-actions {
          display: flex;
          gap: 0.75rem;
        }

        .uni-card-btn {
          flex: 1;
          min-height: 48px;
          font-size: 0.95rem;
          padding: 0.65rem 1rem;
        }

        /* Modal */
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 41, 30, 0.65);
          backdrop-filter: blur(10px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
        }

        .modal-content {
          width: 100%;
          max-width: 600px;
          position: relative;
          padding: 2rem !important;
          background: #FFFFFF !important;
        }

        .modal-close {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          color: var(--text-muted);
          cursor: pointer;
        }

        .modal-header {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .modal-title {
          font-size: 1.5rem;
          font-weight: 800;
        }

        .modal-desc {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .modal-meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          background: var(--bg-primary);
          padding: 1rem;
          border-radius: 14px;
          margin-bottom: 1.5rem;
        }

        .meta-box {
          display: flex;
          flex-direction: column;
        }

        .meta-lbl {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 700;
          text-transform: uppercase;
        }

        .meta-val {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .modal-subheading {
          font-size: 0.9rem;
          font-weight: 800;
          margin-bottom: 0.65rem;
          text-transform: uppercase;
        }

        .modal-footer {
          margin-top: 2rem;
        }

        .modal-footer .btn {
          width: 100%;
        }
      `}</style>
    </section>
  );
}
