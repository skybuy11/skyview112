import React, { useState } from 'react';
import { ClipboardCheck, ArrowRight, RotateCcw, Check, X, Award, CheckCircle2 } from 'lucide-react';

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

  // Determine feedback level
  let resultLevel = {};
  if (score >= 7) {
    resultLevel = {
      title: "Excellent English Proficiency",
      colorClass: "result-excellent",
      desc: "Your English proficiency is excellent! You're likely ready for university-level studies in the UK. You might want to consider preparing for official exams like IELTS or TOEFL if required by your chosen institution.",
      steps: [
        "Practice academic reading and writing structured papers",
        "Prepare for formal English language tests (IELTS, TOEFL, PTE)",
        "Focus on academic writing, referencing, and vocabulary enrichment"
      ]
    };
  } else if (score >= 5) {
    resultLevel = {
      title: "Good English Command",
      colorClass: "result-good",
      desc: "You have a good command of English, but might benefit from some additional practice to prepare for university studies. Many UK universities will accept this level with conditional offers.",
      steps: [
        "Prepare for formal English language tests early",
        "Practice English daily through academic reading, listening and speaking",
        "Consider a pre-sessional English course to bridge the gap"
      ]
    };
  } else {
    resultLevel = {
      title: "Basic English Skills",
      colorClass: "result-basic",
      desc: "You have some knowledge of English, but would benefit from intensive language preparation before university studies. Many UK institutions offer foundation or pathway programs for students at this level.",
      steps: [
        "Consider an intensive English language program in your home country or in the UK",
        "Look into foundation year programs with integrated English modules",
        "Practice English communication skills daily and read simplified academic journals"
      ]
    };
  }

  const progressPercentage = Math.round(((currentIdx + 1) / questions.length) * 100);

  return (
    <section id="english-test" className="test-section">
      <div className="container">
        <h2 className="section-title">English Knowledge Test</h2>
        <p className="section-subtitle">
          Assess your English language skills with our quick test to determine your readiness for UK university studies.
        </p>

        <div className="test-card-container">
          {!started && !submitted && (
            <div className="glass-card test-intro animate-fade-in">
              <div className="test-intro-icon">
                <ClipboardCheck size={48} />
              </div>
              <h3>Test Your Preparedness</h3>
              <p className="test-intro-desc">
                This quick English assessment helps us understand your current language proficiency level. It covers grammar, vocabulary, and comprehension to give us a basic idea of your readiness for academic studies in the UK.
              </p>
              
              <div className="test-meta-info">
                <div className="meta-item">
                  <span className="meta-number">{questions.length}</span>
                  <span className="meta-label">Questions</span>
                </div>
                <div className="meta-divider"></div>
                <div className="meta-item">
                  <span className="meta-number">~10</span>
                  <span className="meta-label">Minutes</span>
                </div>
                <div className="meta-divider"></div>
                <div className="meta-item">
                  <span className="meta-number">Instant</span>
                  <span className="meta-label">Feedback</span>
                </div>
              </div>

              <div className="test-disclaimer">
                <strong>Please note:</strong> This is not an official language test and is provided as an indicative guide only. UK universities typically require formal English language qualifications such as IELTS, TOEFL, or PTE Academic.
              </div>

              <button className="btn btn-primary btn-lg" onClick={() => setStarted(true)}>
                Start Assessment
                <ArrowRight size={18} />
              </button>
            </div>
          )}

          {started && !submitted && (
            <div className="glass-card quiz-card animate-fade-in">
              {/* Progress bar */}
              <div className="quiz-progress-wrapper">
                <div className="quiz-progress-text">
                  <span>Question {currentIdx + 1} of {questions.length}</span>
                  <span>{progressPercentage}% Completed</span>
                </div>
                <div className="progress-track">
                  <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
                </div>
              </div>

              {/* Question */}
              <div className="quiz-question-box">
                <h3 className="quiz-question">{questions[currentIdx].question}</h3>
              </div>

              {/* Options */}
              <div className="quiz-options">
                {questions[currentIdx].options.map((option, idx) => {
                  const isSelected = answers[currentIdx] === idx;
                  return (
                    <button
                      key={idx}
                      className={`option-btn ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleSelect(idx)}
                    >
                      <span className="option-letter">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="option-text">{option}</span>
                      {isSelected && <div className="selected-check"><Check size={16} /></div>}
                    </button>
                  );
                })}
              </div>

              {/* Navigation buttons */}
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
                <div className={`result-score-circle ${resultLevel.colorClass}`}>
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
                    const element = document.getElementById('contact');
                    if (element) {
                      setCurrentTab('contact');
                      window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
                    }
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
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
        }

        .test-card-container {
          max-width: 680px;
          margin: 0 auto;
        }

        .test-intro, .quiz-card, .result-card {
          padding: 3rem;
          border-radius: 18px;
          border: 1px solid var(--border-color);
          background: var(--bg-primary);
          box-shadow: none;
        }

        .test-intro {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.25rem;
        }

        .test-intro-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .test-intro h3 {
          font-size: 1.5rem;
          color: var(--text-primary);
          font-weight: 600;
          letter-spacing: -0.015em;
        }

        .test-intro-desc {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .test-meta-info {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          width: 100%;
          background: var(--bg-secondary);
          padding: 1rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          margin: 1rem 0;
        }

        .meta-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .meta-number {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.1;
        }

        .meta-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .meta-divider {
          width: 1px;
          height: 24px;
          background: var(--border-color);
        }

        .test-disclaimer {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.5;
          border-left: 2px solid var(--accent);
          padding-left: 0.85rem;
          text-align: left;
          width: 100%;
        }

        /* Quiz Card styles */
        .quiz-progress-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .quiz-progress-text {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-muted);
        }

        .progress-track {
          height: 4px;
          background: var(--border-color);
          border-radius: 99px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: var(--accent);
          border-radius: 99px;
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .quiz-question-box {
          margin-bottom: 2rem;
        }

        .quiz-question {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.4;
          letter-spacing: -0.01em;
        }

        .quiz-options {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .option-btn {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          padding: 0.85rem 1.25rem;
          border-radius: 10px;
          text-align: left;
          cursor: pointer;
          font-size: 0.95rem;
          color: var(--text-secondary);
          font-weight: 400;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .option-btn:hover {
          border-color: var(--text-primary);
          background: var(--bg-secondary);
        }

        .option-btn.selected {
          border-color: var(--accent);
          background: var(--bg-secondary);
          color: var(--text-primary);
          box-shadow: 0 0 0 1px var(--accent);
        }

        .option-letter {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.8rem;
          color: var(--text-primary);
          flex-shrink: 0;
        }

        .option-btn.selected .option-letter {
          background: var(--accent);
          border-color: var(--accent);
          color: white;
        }

        .option-text {
          flex-grow: 1;
        }

        .selected-check {
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .quiz-navigation {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid var(--border-color);
          padding-top: 1.5rem;
        }

        /* Results Card */
        .result-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 640px) {
          .result-header {
            flex-direction: column;
            text-align: center;
            gap: 1.25rem;
          }
        }

        .result-score-circle {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 2px solid var(--border-color);
          background: var(--bg-secondary);
        }

        .result-excellent {
          border-color: var(--secondary);
          color: var(--secondary);
        }

        .result-good {
          border-color: var(--accent);
          color: var(--accent);
        }

        .result-basic {
          border-color: var(--accent);
          color: var(--accent);
        }

        .result-score-number {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 700;
          line-height: 1;
        }

        .result-score-max {
          font-size: 0.75rem;
          font-weight: 500;
          opacity: 0.7;
          margin-top: -0.15rem;
        }

        .result-title-box {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        @media (max-width: 640px) {
          .result-title-box {
            align-items: center;
          }
        }

        .result-subtitle {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .result-level-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.2;
          margin: 0.2rem 0;
          letter-spacing: -0.015em;
        }

        .result-percentage {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-muted);
        }

        .result-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .result-recommendations {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          padding: 1.75rem;
          border-radius: 12px;
          margin-bottom: 2rem;
        }

        .result-recommendations h4 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .rec-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .rec-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .rec-check {
          color: var(--accent);
          margin-top: 0.15rem;
          flex-shrink: 0;
        }

        .result-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          border-top: 1px solid var(--border-color);
          padding-top: 1.5rem;
        }

        @media (max-width: 640px) {
          .test-intro, .quiz-card, .result-card {
            padding: 1.75rem 1.25rem;
          }
          .quiz-navigation {
            gap: 1rem;
          }
          .quiz-navigation .btn {
            flex: 1;
            padding: 0.65rem 0.5rem;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}
