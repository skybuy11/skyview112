import React, { useState } from 'react';
import { Search, MapPin, ExternalLink, Bookmark, GraduationCap, X, Calendar, BookOpen, ChevronDown } from 'lucide-react';

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
      description: 'Specializing in social sciences, LSE is renowned globally for its leadership in economics, politics, sociology, law, and anthropology. Located in the heart of London, it offers an international environment with close connections to commerce.',
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
      description: 'The first university in England to admit students of any religion and women on equal terms with men. UCL is a multidisciplinary research powerhouse, offering a rich variety of courses and hosting students from over 150 nations.',
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
      description: "England's third oldest university, known for its collegiate system where students live and study in historic colleges (including Durham Castle). It combines ancient heritage with top-tier modern research.",
      tags: ['Russell Group', 'Collegiate', 'Historic'],
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
      description: "One of Scotland's ancient universities, located in the heart of the country's vibrant capital. Edinburgh is famous for its role in the Scottish Enlightenment and offers a wide scope of programs.",
      tags: ['Russell Group', 'Scotland & Wales', 'Scotland'],
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
      description: "Founded in 1451, Glasgow is the fourth-oldest university in the English-speaking world. A member of the Russell Group, it is known for its inspiring gothic architecture and research breakthroughs.",
      tags: ['Russell Group', 'Scotland & Wales', 'Scotland'],
      popularCourses: ['Veterinary Medicine', 'Aerospace Engineering', 'Medicine', 'English'],
      established: '1451',
      studentCount: '35,000+',
      satisfaction: '92%',
      badge: 'Russell Group Scotland'
    },
    {
      id: 'manchester',
      name: 'University of Manchester',
      location: 'Manchester, England',
      description: 'A prestigious red-brick research university and member of the Russell Group. Manchester is known for its innovation, high employability rates, and pioneering research, including the discovery of graphene.',
      tags: ['Russell Group'],
      popularCourses: ['Chemical Engineering', 'Business Administration', 'Computer Science', 'Physics'],
      established: '1824',
      studentCount: '40,000+',
      satisfaction: '88%',
      badge: 'Research Powerhouse'
    },
    {
      id: 'warwick',
      name: 'University of Warwick',
      location: 'Coventry, England',
      description: 'A world-leading Russell Group university known for its business school (WBS), strong links with industry, and innovative approach to research, set in a spacious green campus.',
      tags: ['Russell Group'],
      popularCourses: ['Mathematics', 'Business & Management', 'Economics', 'Systems Engineering'],
      established: '1965',
      studentCount: '27,000+',
      satisfaction: '90%',
      badge: 'Top Business & Math'
    },
    {
      id: 'bristol',
      name: 'University of Bristol',
      location: 'Bristol, England',
      description: 'A red-brick Russell Group university known for its independent spirit, academic excellence, and lively cultural environment. Bristol ranks highly for engineering, sciences, and arts.',
      tags: ['Russell Group'],
      popularCourses: ['Civil Engineering', 'Aerospace Engineering', 'Drama', 'Law'],
      established: '1876',
      studentCount: '28,000+',
      satisfaction: '89%',
      badge: 'Employability Leader'
    },
    {
      id: 'leeds',
      name: 'University of Leeds',
      location: 'Leeds, England',
      description: 'One of the largest universities in the UK and a member of the Russell Group. Leeds offers an exceptionally wide range of courses and is famous for its vibrant student union.',
      tags: ['Russell Group'],
      popularCourses: ['Food Science', 'Mechanical Engineering', 'Business & Marketing', 'Media Studies'],
      established: '1904',
      studentCount: '38,000+',
      satisfaction: '91%',
      badge: 'Top Student Experience'
    },
    {
      id: 'birmingham',
      name: 'University of Birmingham',
      location: 'Birmingham, England',
      description: 'A historic red-brick Russell Group university with a beautiful green campus. Birmingham is a top target for leading UK graduate employers, known for its science breakthroughs.',
      tags: ['Russell Group'],
      popularCourses: ['Materials Science', 'Medicine', 'Chemical Engineering', 'Sports Science'],
      established: '1900',
      studentCount: '36,000+',
      satisfaction: '89%',
      badge: 'Employer Target #1'
    },
    {
      id: 'nottingham',
      name: 'University of Nottingham',
      location: 'Nottingham, England',
      description: 'A research-led Russell Group university known for its award-winning green campus and global outlook, with campuses in China and Malaysia. Highly regarded for law and pharmacy.',
      tags: ['Russell Group'],
      popularCourses: ['Pharmacy', 'Veterinary Science', 'Electrical Engineering', 'Law'],
      established: '1881',
      studentCount: '34,000+',
      satisfaction: '90%',
      badge: 'Global Campus Network'
    },
    {
      id: 'sheffield',
      name: 'University of Sheffield',
      location: 'Sheffield, England',
      description: 'A member of the Russell Group and famous for its engineering faculty, high student satisfaction, and world-class library systems. A top choice for students looking for a friendly northern city.',
      tags: ['Russell Group'],
      popularCourses: ['Structural Engineering', 'Journalism', 'Architecture', 'Politics'],
      established: '1905',
      studentCount: '29,000+',
      satisfaction: '92%',
      badge: 'Top Northern Uni'
    },
    {
      id: 'middlesex',
      name: 'Middlesex University London',
      location: 'London, England',
      description: 'Located in Hendon, North London, Middlesex University is a highly respected modern institution. Renowned for its diverse student community, Middlesex focuses on career-led education.',
      tags: ['London', 'Modern & Career'],
      popularCourses: ['Business Management', 'Computer Science', 'Information Technology', 'Creative Writing'],
      established: '1973',
      studentCount: '25,000+',
      satisfaction: '88%',
      badge: 'Top London Modern'
    },
    {
      id: 'greenwich',
      name: 'University of Greenwich',
      location: 'London, England',
      description: 'Set on a spectacular UNESCO World Heritage Site on the banks of the River Thames, Greenwich combines historic grandeur with state-of-the-art learning labs and business links.',
      tags: ['London', 'Modern & Career'],
      popularCourses: ['Data Science', 'Logistics & Supply Chain', 'Software Engineering', 'MBA'],
      established: '1890',
      studentCount: '22,000+',
      satisfaction: '90%',
      badge: 'UNESCO Heritage Site'
    },
    {
      id: 'wales',
      name: 'University of Wales',
      location: 'Cardiff & Lampeter, Wales',
      description: 'The University of Wales holds a historic place in Welsh higher education, dating back to 1822. It delivers excellent academic programs with a focus on professional development.',
      tags: ['Scotland & Wales', 'Wales', 'Historic'],
      popularCourses: ['Business Administration (MBA)', 'Mechanical Engineering', 'Human Resource Management', 'Finance'],
      established: '1822',
      studentCount: '15,000+',
      satisfaction: '89%',
      badge: 'Historic Welsh Heritage'
    },
    {
      id: 'bpp',
      name: 'BPP University',
      location: 'London, Manchester & Birmingham',
      description: 'BPP University is a leading private specialist university focusing on business, law, finance, and technology, delivering intensive professional courses that lead directly to careers.',
      tags: ['London', 'Modern & Career'],
      popularCourses: ['LLM Professional Legal Practice', 'MSc Management', 'Accounting & Finance', 'Digital Marketing'],
      established: '1992',
      studentCount: '16,000+',
      satisfaction: '91%',
      badge: 'Top for Careers & Law'
    },
    {
      id: 'uws',
      name: 'University of the West of Scotland (UWS)',
      location: 'Glasgow & Paisley, Scotland',
      description: 'UWS is one of Scotland\'s largest and most career-focused modern universities, highly rated for student experience, innovative engineering research, and practical IT education.',
      tags: ['Scotland & Wales', 'Scotland', 'Modern & Career'],
      popularCourses: ['MSc Project Management', 'Information Technology', 'Civil Engineering', 'International Management'],
      established: '1897',
      studentCount: '19,000+',
      satisfaction: '90%',
      badge: "Scotland's Tech Hub"
    },
    {
      id: 'coventry',
      name: 'Coventry University',
      location: 'Coventry, England',
      description: 'A forward-looking university with campuses in Coventry and London. Known for its strong practical business links, automotive design course excellence, and international experience.',
      tags: ['Modern & Career'],
      popularCourses: ['Automotive Design', 'Business Admin (MBA)', 'Civil Engineering', 'Disaster Management'],
      established: '1992',
      studentCount: '30,000+',
      satisfaction: '87%',
      badge: 'Top for Employability'
    },
    {
      id: 'portsmouth',
      name: 'University of Portsmouth',
      location: 'Portsmouth, England',
      description: 'A modern, dynamic university set in the UK\'s only island city. Portsmouth is highly rated for student support, career services, and gold-standard teaching in creative technologies.',
      tags: ['Modern & Career'],
      popularCourses: ['Marine Biology', 'Creative Technologies', 'Criminology', 'Business & Management'],
      established: '1992',
      studentCount: '25,000+',
      satisfaction: '89%',
      badge: 'Top for Student Support'
    },
    {
      id: 'roehampton',
      name: 'University of Roehampton',
      location: 'London, England',
      description: 'London\'s only traditional parkland collegiate university. Set in a beautiful, green 54-acre campus in southwest London, providing a close-knit collegiate community feel.',
      tags: ['London', 'Collegiate'],
      popularCourses: ['Education (PGCE)', 'Creative Writing', 'Dance', 'Psychology'],
      established: '2004',
      studentCount: '9,000+',
      satisfaction: '90%',
      badge: 'Green London Campus'
    },
    {
      id: 'southwales',
      name: 'University of South Wales',
      location: 'Cardiff & Pontypridd, Wales',
      description: 'One of the largest universities in the UK, offering excellent practical courses developed in partnerships with industry leaders, notably in creative industries and aviation.',
      tags: ['Scotland & Wales', 'Wales', 'Modern & Career'],
      popularCourses: ['Aircraft Maintenance', 'Game Design', 'MBA & Finance', 'Creative Industries'],
      established: '2013',
      studentCount: '23,000+',
      satisfaction: '86%',
      badge: 'Industry Standard Hub'
    }
  ];

  // Filtering and Searching Logic
  const filteredUnis = universitiesData.filter((uni) => {
    const matchesSearch = 
      uni.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      uni.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeFilter === 'All') return matchesSearch;
    if (activeFilter === 'Russell Group') return matchesSearch && uni.tags.includes('Russell Group');
    if (activeFilter === 'London') return matchesSearch && uni.tags.includes('London');
    if (activeFilter === 'Scotland & Wales') return matchesSearch && uni.tags.includes('Scotland & Wales');
    if (activeFilter === 'Modern & Career') return matchesSearch && uni.tags.includes('Modern & Career');
    
    return matchesSearch;
  });

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setVisibleCount(6); // reset pagination count when changing filter
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, filteredUnis.length));
  };

  const paginatedUnis = filteredUnis.slice(0, visibleCount);

  return (
    <section id="universities" className="unis-section">
      <div className="container">
        <h2 className="section-title">Partner Universities</h2>
        <p className="section-subtitle">
          Explore elite Russell Group institutions and leading modern, career-focused UK universities officially represented by our firm.
        </p>

        {/* Search & Filter Bar */}
        <div className="search-filter-box glass">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search by university name, location, or course keyword..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(6); }}
              className="search-bar"
            />
          </div>

          <div className="filter-tags">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Display */}
        {paginatedUnis.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 unis-grid">
              {paginatedUnis.map((uni) => (
                <div 
                  key={uni.id} 
                  className="glass-card uni-card w-full"
                  onClick={() => setSelectedUni(uni)}
                >
                  <div className="uni-card-header">
                    <span className="uni-badge">{uni.badge}</span>
                    <Bookmark className="bookmark-icon" size={18} />
                  </div>

                  <h3 className="uni-card-title">{uni.name}</h3>

                  <div className="uni-card-location">
                    <MapPin size={16} className="text-accent" />
                    <span>{uni.location}</span>
                  </div>

                  <p className="uni-card-desc">
                    {uni.description.slice(0, 125)}...
                  </p>

                  <div className="uni-card-tags">
                    {uni.tags.map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>

                  <button className="btn btn-secondary uni-card-btn">
                    Learn Details
                  </button>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredUnis.length && (
              <div className="load-more-container">
                <button className="btn btn-primary btn-load-more" onClick={handleLoadMore}>
                  Load More Universities
                  <ChevronDown size={18} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="no-results glass-card">
            <GraduationCap size={48} className="no-results-icon" />
            <h3>No Universities Found</h3>
            <p>No universities match your search criteria. Please try adjusting your filters or query.</p>
            <button className="btn btn-primary" onClick={() => { setSearchQuery(''); setActiveFilter('All'); setVisibleCount(6); }}>
              Reset Search & Filters
            </button>
          </div>
        )}
      </div>

      {/* University Detail Modal */}
      {selectedUni && (
        <div className="modal-overlay" onClick={() => setSelectedUni(null)}>
          <div className="modal-content glass-card animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedUni(null)}>
              <X size={24} />
            </button>

            <div className="modal-header">
              <span className="uni-badge">{selectedUni.badge}</span>
              <h2 className="modal-title">{selectedUni.name}</h2>
              <div className="modal-location">
                <MapPin size={18} className="text-accent" />
                <span>{selectedUni.location}</span>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-desc-section">
                <h3>About the Institution</h3>
                <p>{selectedUni.description}</p>
              </div>

              <div className="modal-stats-grid">
                <div className="modal-stat">
                  <Calendar className="stat-icon" size={20} />
                  <div className="stat-text">
                    <span className="stat-val">{selectedUni.established}</span>
                    <span className="stat-lbl">Established</span>
                  </div>
                </div>

                <div className="modal-stat">
                  <GraduationCap className="stat-icon" size={20} />
                  <div className="stat-text">
                    <span className="stat-val">{selectedUni.studentCount}</span>
                    <span className="stat-lbl">Enrollment</span>
                  </div>
                </div>

                <div className="modal-stat">
                  <BookOpen className="stat-icon" size={20} />
                  <div className="stat-text">
                    <span className="stat-val">{selectedUni.satisfaction}</span>
                    <span className="stat-lbl">Satisfaction</span>
                  </div>
                </div>
              </div>

              <div className="modal-courses">
                <h3>Highly Recommended Courses</h3>
                <div className="course-tags">
                  {selectedUni.popularCourses.map((course) => (
                    <span key={course} className="course-pill">{course}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setSelectedUni(null)}>
                Close Window
              </button>
              <a 
                href={`#contact`} 
                className="btn btn-accent"
                onClick={() => {
                  setSelectedUni(null);
                  const element = document.getElementById('contact');
                  if (element) {
                    window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
                  }
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
          border-top: 1px solid var(--border-color);
        }

        .search-filter-box {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding: 1.5rem;
          border-radius: 18px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          margin-bottom: 2.5rem;
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
          padding: 0.85rem 1rem 0.85rem 3rem;
          border-radius: 99px;
          border: 1px solid var(--border-color);
          background-color: var(--bg-primary);
          color: var(--text-primary);
          font-size: 0.95rem;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .search-bar:focus {
          border-color: var(--accent);
          background-color: var(--bg-secondary);
          box-shadow: 0 0 0 1px var(--accent);
        }

        .filter-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .filter-btn {
          background: transparent;
          border: 1px solid var(--border-color);
          padding: 0.45rem 1.15rem;
          border-radius: 99px;
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .filter-btn:hover {
          border-color: var(--text-primary);
          color: var(--text-primary);
        }

        .filter-btn.active {
          background: var(--text-primary);
          border-color: var(--text-primary);
          color: var(--bg-primary);
        }

        .unis-grid {
          margin-top: 1.5rem;
        }

        .uni-card {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          padding: 2.25rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          box-shadow: none;
        }

        .uni-card:hover {
          transform: translateY(-2px);
          border-color: var(--accent);
          box-shadow: var(--card-shadow-hover);
        }

        .uni-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .uni-badge {
          background: var(--accent-light);
          color: var(--accent);
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.3rem 0.75rem;
          border-radius: 99px;
          border: 1px solid rgba(181, 138, 63, 0.1);
        }

        .bookmark-icon {
          color: var(--text-muted);
          transition: color 0.2s;
        }

        .uni-card:hover .bookmark-icon {
          color: var(--accent);
        }

        .uni-card-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          line-height: 1.25;
          letter-spacing: -0.015em;
        }

        .uni-card-location {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .uni-card-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .uni-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }

        .tag-pill {
          background: var(--bg-primary);
          color: var(--text-secondary);
          font-size: 0.7rem;
          padding: 0.25rem 0.6rem;
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
          margin-top: 3rem;
        }

        .btn-load-more {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .no-results {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 4rem 2rem;
          gap: 1rem;
        }

        .no-results-icon {
          color: var(--text-muted);
          opacity: 0.5;
        }

        .no-results h3 {
          font-size: 1.35rem;
          color: var(--text-primary);
        }

        .no-results p {
          color: var(--text-muted);
          max-width: 450px;
          margin-bottom: 1rem;
        }

        /* Modal Overlay & Card styling */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .modal-content {
          width: 100%;
          max-width: 600px;
          max-height: 85vh;
          overflow-y: auto;
          position: relative;
          padding: 2.5rem;
          border-radius: 18px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .modal-close {
          position: absolute;
          right: 1.5rem;
          top: 1.5rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-primary);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-close:hover {
          background: var(--border-color);
          transform: rotate(90deg);
        }

        .modal-header {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2rem;
          align-items: flex-start;
        }

        .modal-title {
          font-size: 1.6rem;
          color: var(--text-primary);
          line-height: 1.2;
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .modal-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.9rem;
        }

        .modal-body {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .modal-desc-section h3, .modal-courses h3 {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          margin-bottom: 0.65rem;
          font-weight: 600;
        }

        .modal-desc-section p {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .modal-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          background: var(--bg-primary);
          padding: 1.25rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
        }

        @media (max-width: 480px) {
          .modal-stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        .modal-stat {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .stat-icon {
          color: var(--accent);
        }

        .stat-text {
          display: flex;
          flex-direction: column;
        }

        .stat-val {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .stat-lbl {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .modal-courses {
          margin-top: 0.5rem;
        }

        .course-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .course-pill {
          background: var(--bg-primary);
          color: var(--text-primary);
          font-size: 0.8rem;
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          font-weight: 500;
          border: 1px solid var(--border-color);
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 0.75rem;
          margin-top: 2rem;
          border-top: 1px solid var(--border-color);
          padding-top: 1.5rem;
        }
      `}</style>
    </section>
  );
}
