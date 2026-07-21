import React, { useState } from 'react';
import { ClipboardCheck, ArrowRight, RotateCcw, CheckCircle2 } from 'lucide-react';

export default function EnglishTest({ setCurrentTab }) {
  const [started, setStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Choose the correct form of the comparative adjective: 'This book is _____ than the one I read last week.'",
      options: ["more interesting", "most interesting", "much interesting"],
      correct: 0
    },
    {
      id: 2,
      question: "Choose the correct option to complete the sentence: 'If I _____ known about the meeting, I would have attended it.'",
      options: ["have", "had", "would have"],
      correct: 1
    },
    {
      id: 3,
      question: "Choose the correct preposition: 'She is interested _____ pursuing a degree in engineering.'",
      options: ["in", "at", "for", "on"],
      correct: 0
    },
    {
      id: 4,
      question: "Select the correct meaning of the idiom 'to beat around the bush':",
      options: ["to fight for something", "to avoid the main topic", "to speak in secret", "to plant flowers"],
      correct: 1
    },
    {
      id: 5,
      question: "Select the sentence with correct punctuation:",
      options: [
        "However, I think the solution is simple.",
        "However I think, the solution is simple.",
        "However I think the solution, is simple.",
        "However I think the solution is, simple."
      ],
      correct: 0
    },
    {
      id: 6,
      question: "Which sentence has correct subject-verb agreement?",
      options: [
        "The team is playing well.",
        "The team are playing well.",
        "The team were playing well.",
        "The team being playing well."
      ],
      correct: 0
    },
    {
      id: 7,
      question: "Which sentence uses the passive voice?",
      options: [
        "The student completed the assignment.",
        "The student is completing the assignment.",
        "The assignment was completed by the student.",
        "Complete the assignment, student."
      ],
      correct: 2
    },
    {
      id: 8,
      question: "Which word is the antonym of 'benevolent'?",
      options: ["malevolent", "cruel", "kind", "selfish"],
      correct: 0
    },
    {
      id: 9,
      question: "Which of these words is a gerund?",
      options: ["run", "runner", "running", "ran"],
      correct: 2
    }
  ];

  const handleSelect = (optionIdx) => {
    setAnswers({ ...answers, [currentIdx]: optionIdx });
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const getScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.correct) {
        score += 1;
      }
    });
    return score;
  };

  const resetTest = () => {
    setAnswers({});
    setCurrentIdx(0);
    setSubmitted(false);
    setStarted(false);
  };

  const score = getScore();
  const maxScore = questions.length;
  const percentage = Math.round((score / maxScore) * 100);

  const getResultLevel = () => {
    if (percentage >= 85) {
      return {
        title: "C1 / C2 Advanced English Proficiency",
        desc: "Exemplary English proficiency suitable for direct entry into top Russell Group universities without pre-sessional English requirements.",
        steps: [
          "Eligible for direct postgraduate/undergraduate UK university entry",
          "Fast-track CAS visa application readiness",
          "Considered for top competitive academic scholarships"
        ]
      };
    } else if (percentage >= 60) {
      return {
        title: "B2 Upper-Intermediate English Proficiency",
        desc: "Good working competence. Suitable for standard UK university admissions, though a short 4 to 6-week pre-sessional course or UKVI IELTS may be recommended.",
        steps: [
          "Qualifies for most UK university undergraduate & postgraduate degree entry",
          "Minor UKVI IELTS booster recommended to achieve 6.5 minimum score",
          "Eligible for standard admissions assistance"
        ]
      };
    } else {
      return {
        title: "B1 Intermediate English Foundation",
        desc: "Basic functional English. We recommend enrolling in a UK Foundation Pathway or Pre-sessional English Language course prior to academic study.",
        steps: [
          "Recommended 10-12 week UK Pre-sessional English language pathway",
          "One-on-one English tutoring available through Skyview partners",
          "Pathway route guaranteeing entry into partner universities upon completion"
        ]
      };
    }
  };

  const resultLevel = getResultLevel();

  return (
    <section id="english-test" className="test-section section">
      <div className="container">
        <h2 className="section-title">English Competence Assessment</h2>
        <p className="section-subtitle">
          Test your English proficiency level with our free 9-question diagnostic tool to determine UK university readiness.
        </p>

        <div className="test-card-container">
          {!started && !submitted && (
            <div className="glass-card test-intro animate-fade-in">
              <div className="test-intro-icon">
                <ClipboardCheck size={32} />
              </div>
              <h3>UK University Readiness Test</h3>
              <p className="test-intro-desc">
                This diagnostic test evaluates your grammar, vocabulary, and sentence structure against British academic standards. It takes less than 5 minutes.
              </p>
              
              <div className="test-meta-info">
                <div className="meta-item">
                  <span className="meta-number">9</span>
                  <span className="meta-label">Questions</span>
                </div>
                <div className="meta-divider"></div>
                <div className="meta-item">
                  <span className="meta-number">5 Min</span>
                  <span className="meta-label">Duration</span>
                </div>
                <div className="meta-divider"></div>
                <div className="meta-item">
                  <span className="meta-number">Instant</span>
                  <span className="meta-label">Evaluation</span>
                </div>
              </div>

              <button className="btn btn-accent btn-lg" onClick={() => setStarted(true)}>
                Start English Diagnostic
                <ArrowRight size={18} />
              </button>
            </div>
          )}

          {started && !submitted && (
            <div className="glass-card quiz-card animate-fade-in">
              <div className="quiz-progress-wrapper">
                <div className="quiz-progress-text">
                  <span>Question {currentIdx + 1} of {questions.length}</span>
                  <span>{Math.round(((currentIdx + 1) / questions.length) * 100)}% Completed</span>
                </div>
                <div className="progress-track">
                  <div 
                    className="progress-bar-fill" 
                    style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="quiz-question-box">
                <h3 className="quiz-question">{questions[currentIdx].question}</h3>
              </div>

              <div className="quiz-options">
                {questions[currentIdx].options.map((option, optionIdx) => {
                  const isSelected = answers[currentIdx] === optionIdx;
                  return (
                    <button
                      key={optionIdx}
                      className={`option-btn ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleSelect(optionIdx)}
                    >
                      <span className="option-letter">{String.fromCharCode(65 + optionIdx)}</span>
                      <span className="option-text">{option}</span>
                    </button>
                  );
                })}
              </div>

              <div className="quiz-navigation">
                <button 
                  className="btn btn-secondary" 
                  onClick={handlePrev}
                  disabled={currentIdx === 0}
                >
                  Previous
                </button>
                
                <button 
                  className="btn btn-primary" 
                  onClick={handleNext}
                  disabled={answers[currentIdx] === undefined}
                >
                  {currentIdx === questions.length - 1 ? 'Finish & View Score' : 'Next Question'}
                </button>
              </div>
            </div>
          )}

          {submitted && (
            <div className="glass-card result-card animate-fade-in">
              <div className="result-header">
                <div className="result-score-circle">
                  <span className="result-score-number">{score}</span>
                  <span className="result-score-max">/ {maxScore}</span>
                </div>
                <div className="result-title-box">
                  <span className="result-subtitle">YOUR TEST RESULTS</span>
                  <h3 className="result-level-title">{resultLevel.title}</h3>
                  <span className="result-percentage">{percentage}% Score</span>
                </div>
              </div>

              <p className="result-description">{resultLevel.desc}</p>

              <div className="result-recommendations">
                <h4>Recommended Next Steps:</h4>
                <ul className="rec-list">
                  {resultLevel.steps.map((step, index) => (
                    <li key={index} className="rec-item">
                      <CheckCircle2 className="rec-check" size={18} />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="result-actions">
                <button className="btn btn-secondary" onClick={resetTest}>
                  <RotateCcw size={16} />
                  Retake Test
                </button>
                <button 
                  className="btn btn-accent" 
                  onClick={() => {
                    setCurrentTab('contact');
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Discuss Study Options
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .test-section {
          background-color: var(--bg-surface);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .test-card-container {
          max-width: 660px;
          margin: 0 auto;
        }

        .test-intro {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
        }

        .test-intro-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .test-meta-info {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          width: 100%;
          background: var(--bg-primary);
          padding: 0.85rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          margin: 0.5rem 0 1rem 0;
        }

        .meta-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .meta-number {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--primary);
        }

        .meta-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .meta-divider {
          width: 1px;
          height: 24px;
          background: var(--border-color);
        }

        .quiz-progress-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }

        .quiz-progress-text {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .progress-track {
          height: 6px;
          background: var(--bg-subtle);
          border-radius: 99px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: var(--primary);
          border-radius: 99px;
          transition: width 0.3s ease;
        }

        .quiz-question {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          line-height: 1.45;
        }

        .quiz-options {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 1.75rem;
        }

        .option-btn {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          padding: 0.85rem 1rem;
          border-radius: 12px;
          text-align: left;
          cursor: pointer;
          font-size: 0.925rem;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.2s ease;
        }

        .option-btn:hover {
          border-color: var(--primary);
          background: var(--primary-light);
        }

        .option-btn.selected {
          border-color: var(--primary);
          background: var(--primary-light);
          font-weight: 600;
        }

        .option-letter {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.75rem;
          color: var(--text-primary);
          flex-shrink: 0;
        }

        .option-btn.selected .option-letter {
          background: var(--primary);
          color: #FFFFFF;
          border-color: var(--primary);
        }

        .quiz-navigation {
          display: flex;
          justify-content: space-between;
          gap: 0.75rem;
          border-top: 1px solid var(--border-color);
          padding-top: 1.25rem;
        }

        /* Results */
        .result-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 480px) {
          .result-header {
            flex-direction: column;
            text-align: center;
          }
        }

        .result-score-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 2px solid var(--primary);
          background: var(--primary-light);
          color: var(--primary);
        }

        .result-score-number {
          font-family: var(--font-heading);
          font-size: 1.75rem;
          font-weight: 800;
          line-height: 1;
        }

        .result-score-max {
          font-size: 0.7rem;
          font-weight: 600;
          opacity: 0.8;
        }

        .result-subtitle {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }

        .result-level-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0.2rem 0;
        }

        .result-description {
          font-size: 0.925rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .result-recommendations {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          padding: 1.25rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
        }

        .result-recommendations h4 {
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .rec-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .rec-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.875rem;
        }

        .rec-check {
          color: var(--success);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .result-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: space-between;
          border-top: 1px solid var(--border-color);
          padding-top: 1.25rem;
          flex-wrap: wrap;
        }

        @media (max-width: 480px) {
          .result-actions {
            flex-direction: column;
          }
          .result-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
