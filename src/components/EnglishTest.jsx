import React, { useState } from 'react';
import { Award, CheckCircle2, RefreshCw, ArrowRight, HelpCircle } from 'lucide-react';

export default function EnglishTest({ setCurrentTab }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Which option correctly completes the sentence? 'By the time the university term begins, I ______ my Tier 4 visa.'",
      options: [
        "will have received",
        "would receive",
        "have received",
        "am receiving"
      ],
      correct: 0
    },
    {
      id: 2,
      question: "Choose the sentence with the most appropriate formal academic tone for a Statement of Purpose:",
      options: [
        "I really want to get into this course because it's super cool.",
        "My primary motivation for pursuing this MSc stems from its rigorous curriculum.",
        "I figure this degree will help me land a high-paying job real quick.",
        "Your university looks pretty decent and I want to study there."
      ],
      correct: 1
    },
    {
      id: 3,
      question: "Select the correct prepositions: 'The student was eligible ______ a scholarship and applied ______ the academic board.'",
      options: [
        "for / to",
        "with / for",
        "to / at",
        "of / by"
      ],
      correct: 0
    },
    {
      id: 4,
      question: "Identify the synonym for 'compulsory' in a university course module context:",
      options: [
        "Mandatory",
        "Optional",
        "Extracurricular",
        "Elective"
      ],
      correct: 0
    }
  ];

  const handleOptionSelect = (qId, optionIdx) => {
    setAnswers({ ...answers, [qId]: optionIdx });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsSubmitted(false);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correct) {
        score += 1;
      }
    });
    return score;
  };

  const score = calculateScore();
  const percentage = Math.round((score / questions.length) * 100);

  return (
    <section id="english-test" className="section english-section">
      <div className="container">
        <h2 className="section-title">English Proficiency Assessment</h2>
        <p className="section-subtitle">
          Test your UK academic English readiness in 2 minutes. Receive an instant score evaluation for IELTS / SELT waiver eligibility.
        </p>

        <div className="quiz-container glass-card">
          {!isSubmitted ? (
            <div>
              {/* Progress Bar */}
              <div className="quiz-progress-wrapper">
                <div className="progress-header">
                  <span className="step-count">Question {currentStep + 1} of {questions.length}</span>
                  <span className="step-pct">{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
                </div>
                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="quiz-body">
                <h3 className="quiz-question">{questions[currentStep].question}</h3>

                <div className="options-stack">
                  {questions[currentStep].options.map((opt, idx) => {
                    const isSelected = answers[questions[currentStep].id] === idx;
                    return (
                      <button
                        key={idx}
                        className={`option-btn ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleOptionSelect(questions[currentStep].id, idx)}
                      >
                        <span className="option-indicator">{String.fromCharCode(65 + idx)}</span>
                        <span className="option-text">{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Footer Control */}
              <div className="quiz-footer">
                <button
                  className="btn btn-primary btn-lg quiz-next-btn"
                  disabled={answers[questions[currentStep].id] === undefined}
                  onClick={handleNext}
                >
                  {currentStep === questions.length - 1 ? 'Submit & View Score' : 'Next Question'}
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ) : (
            /* Score Report */
            <div className="score-report animate-fade-in">
              <div className="report-badge">
                <Award size={48} className="text-gold" />
              </div>

              <h3 className="report-title">Your English Assessment Result</h3>
              
              <div className="score-circle">
                <span className="score-num">{percentage}%</span>
                <span className="score-lbl">{score} of {questions.length} Correct</span>
              </div>

              <p className="report-evaluation">
                {percentage >= 75 ? (
                  "Congratulations! Your academic English command meets the baseline requirements for direct entry into most UK Masters and Bachelors programs (IELTS 6.5 - 7.0 equivalent)."
                ) : (
                  "Good effort! We recommend a brief pre-sessional English module or targeted IELTS prep before applying to competitive UK universities."
                )}
              </p>

              <div className="report-actions">
                <button className="btn btn-secondary btn-lg" onClick={handleReset}>
                  <RefreshCw size={18} />
                  Retake Test
                </button>
                <button
                  className="btn btn-accent btn-lg"
                  onClick={() => {
                    setCurrentTab('contact');
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Consult an Advisor
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .english-section {
          background: var(--bg-primary);
        }

        .quiz-container {
          max-width: 780px;
          margin: 0 auto;
          padding: 2.25rem !important;
        }

        .quiz-progress-wrapper {
          margin-bottom: 2rem;
        }

        .progress-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .progress-track {
          height: 8px;
          background: var(--bg-subtle);
          border-radius: 99px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--primary);
          border-radius: 99px;
          transition: width 0.35s ease;
        }

        .quiz-question {
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 1.75rem;
          line-height: 1.4;
        }

        .options-stack {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 2rem;
        }

        .option-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.1rem 1.25rem;
          border-radius: 16px;
          background: var(--bg-primary);
          border: 1.5px solid var(--border-color);
          text-align: left;
          cursor: pointer;
          min-height: 56px;
          transition: all 0.25s ease;
        }

        .option-btn:hover {
          border-color: var(--primary);
          background: #FFFFFF;
        }

        .option-btn.selected {
          border-color: var(--primary);
          background: var(--primary-light);
        }

        .option-indicator {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-surface);
          border: 1.5px solid var(--border-color);
          font-weight: 800;
          font-size: 0.9rem;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .option-btn.selected .option-indicator {
          background: var(--primary);
          color: #FFFFFF;
          border-color: var(--primary);
        }

        .option-text {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.5;
        }

        .quiz-footer {
          display: flex;
          justify-content: flex-end;
        }

        .quiz-next-btn {
          width: 100%;
        }

        @media (min-width: 640px) {
          .quiz-next-btn {
            width: auto;
          }
        }

        .score-report {
          text-align: center;
          padding: 1rem 0;
        }

        .report-badge {
          margin-bottom: 1rem;
        }

        .report-title {
          font-size: 1.75rem;
          font-weight: 900;
          margin-bottom: 1.5rem;
        }

        .score-circle {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: var(--primary-light);
          border: 3px solid var(--primary);
          margin-bottom: 1.75rem;
        }

        .score-num {
          font-family: var(--font-heading);
          font-size: 2.25rem;
          font-weight: 900;
          color: var(--primary);
          line-height: 1;
        }

        .score-lbl {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .report-evaluation {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--text-secondary);
          max-width: 580px;
          margin: 0 auto 2rem auto;
        }

        .report-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center;
        }

        @media (min-width: 640px) {
          .report-actions {
            flex-direction: row;
          }
        }
      `}</style>
    </section>
  );
}
