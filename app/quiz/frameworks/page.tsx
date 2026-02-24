'use client'

import type React from 'react'
import { useState, useEffect } from 'react'
import { Check, X } from 'lucide-react'
import Link from 'next/link'

const APP_STORE_URL = 'https://apps.apple.com/app/casebuddy-ai/id6746489925'

const QUESTION_BANK = [
  {
    id: 1,
    question:
      "A subscription app's profit is down. Revenue is up 5%, but costs are up 18%. What's the most 'framework-correct' next step to find the root cause?",
    answers: [
      "Run Porter's Five Forces to assess industry rivalry",
      'Use 4Ps to adjust promotion and placement',
      'Do SWOT to list threats and weaknesses',
      'Break costs into fixed vs variable and identify the driver, then segment by product/region',
    ],
    correct: 3,
    explanation:
      'Profitability requires decomposing costs (fixed/variable) and segmenting to locate the driver of margin decline.',
  },
  {
    id: 2,
    question:
      "A client says: 'We raised prices, so profitability should be better—why isn't it?' Which analysis path best fits?",
    answers: [
      'Profitability: decompose revenue into price vs quantity and segment by customer/channel to see where volume fell',
      'Value Chain: map operations to reduce inbound logistics cost',
      'Growth Strategy: choose market development vs diversification',
      'Organizational Strategy: redesign incentives',
    ],
    correct: 0,
    explanation: "When price increased but profit didn't, you must test quantity/mix effects and where they occur.",
  },
  {
    id: 3,
    question:
      'A company wants to enter a new market that looks large, but you suspect profits are structurally low because buyers have strong negotiating power. What framework should you use first?',
    answers: ["Porter's Five Forces", 'Product Launch Framework', 'Customer Segmentation', 'Value Chain Analysis'],
    correct: 0,
    explanation: 'Five Forces helps determine whether the market is attractive and why profits may be competed away.',
  },
  {
    id: 4,
    question:
      "A client asks: 'Should we enter this market, and if yes, should we build, buy, or partner?' What's the best framework to structure the full answer?",
    answers: ['3Cs Framework', 'Market Entry Framework', 'SWOT Analysis', 'Growth Strategy'],
    correct: 1,
    explanation: "Market Entry explicitly covers both the 'should we' and the 'how should we' questions.",
  },
  {
    id: 5,
    question:
      'A competitor launches a cheaper product. Churn is concentrated in one mid-tier segment, while premium customers are stable. What\'s the most framework-correct first move?',
    answers: [
      'Cut prices across all tiers immediately to protect share',
      'Increase promotion everywhere to boost demand quickly',
      'Segment customers, quantify impact, then evaluate response options based on capabilities and customer value',
      'Run SWOT to document threats and opportunities',
    ],
    correct: 2,
    explanation:
      'Competitive Response starts with sizing the threat by segment, then choosing options aligned to capabilities and customer value.',
  },
  {
    id: 6,
    question:
      "A logistics-heavy business has stable revenue but worsening margins. You know 'cost per delivery' is rising but not where. What framework best drives the investigation plan?",
    answers: ['4Ps', '3Cs', 'Product Launch Framework', 'Value Chain Analysis'],
    correct: 3,
    explanation: 'Value Chain pinpoints which operational step is driving unit cost increases.',
  },
  {
    id: 7,
    question:
      'A client wants to grow revenue next year. Their core market is saturated, but they have strong capabilities that could serve adjacent customer types. Which growth lever is most consistent with this?',
    answers: [
      'Market Penetration (sell more to the same customers)',
      'Product Development (build new products for existing customers)',
      'Diversification (new products for new markets)',
      'Market Development (take existing offering to new customer segments/markets)',
    ],
    correct: 3,
    explanation: 'Adjacent customer types with a similar offering points to market development.',
  },
  {
    id: 8,
    question:
      'A company has a broad customer base and poor conversion. You suspect two segments have very different needs and willingness to pay. What\'s the best first step?',
    answers: [
      '4Ps: increase promotion and adjust placement',
      "Porter's Five Forces: assess threat of entrants",
      'Customer Segmentation: split by needs/behaviors/value, then tailor messaging and pricing by segment',
      'Organizational Strategy: change incentives for sales reps',
    ],
    correct: 2,
    explanation: 'When needs and WTP differ, segmentation is required before fixing GTM or pricing.',
  },
  {
    id: 9,
    question:
      "A client is pricing a premium add-on. Demand is uncertain and competitors are cheaper, but customers say the add-on saves them time. What pricing approach should be prioritized first?",
    answers: [
      'Value-based pricing: quantify customer value/time saved and test willingness to pay',
      'Cost-based pricing: add margin on top of cost',
      'Competition-based pricing: match the cheapest competitor',
      'Promotion-led pricing: discount heavily to drive adoption',
    ],
    correct: 0,
    explanation: 'Premium add-ons should anchor on value and WTP, not cost or competitor price.',
  },
  {
    id: 10,
    question:
      "A startup is launching a product. They already know the feature set, but they're unclear on who to target first and how they'll acquire customers. Which framework best structures the work?",
    answers: [
      'Product Launch Framework',
      'Value Chain Analysis',
      'M&A Fit Framework',
      'Competitive Response Framework',
    ],
    correct: 0,
    explanation: 'Product Launch focuses on target, GTM, distribution, pricing, and campaign design.',
  },
  {
    id: 11,
    question:
      "A company's strategy is sound, but execution is failing: teams are pulling in different directions and decisions are slow. What's the best framework to diagnose the cause?",
    answers: ['3Cs', 'Organizational Strategy', "Porter's Five Forces", '4Ps'],
    correct: 1,
    explanation: 'Misalignment and decision friction are classic org design/incentive/decision-rights problems.',
  },
  {
    id: 12,
    question:
      "A manufacturer is near full utilization. Demand is growing but volatile. They're deciding whether to build a new plant, add shifts, or outsource. Which framework best structures the decision?",
    answers: ['Value Chain Analysis', 'Growth Strategy', 'Capacity Expansion Framework', 'SWOT Analysis'],
    correct: 2,
    explanation: 'Capacity Expansion evaluates demand uncertainty, utilization, economics, and alternative options.',
  },
  {
    id: 13,
    question:
      'A client wants to outsource a function to cut costs, but leadership worries about loss of control and quality. What\'s the most framework-correct evaluation path?',
    answers: [
      'Market Entry Framework: assess barriers to entry',
      'Outsourcing Decision Tree: core vs non-core, cost comparison, quality risk, control needs, flexibility',
      '4Ps: adjust price and promotion',
      "3Cs: analyze competitors' strengths",
    ],
    correct: 1,
    explanation:
      'Outsourcing decisions require explicitly weighing control/quality risk against cost and strategic importance.',
  },
  {
    id: 14,
    question:
      'A client wants to acquire a competitor. The deal case relies on cross-selling, but the target serves a different segment through a different channel. What risk should you validate first?',
    answers: [
      'Threat of substitutes',
      'Promotion strategy for the combined company',
      'Customer/channel overlap feasibility',
      'Market penetration vs market development choice',
    ],
    correct: 2,
    explanation: 'If cross-sell is the value driver, overlap feasibility is the first and biggest uncertainty.',
  },
  {
    id: 15,
    question:
      "You're asked to give a 'full situation assessment' for why a business is underperforming, but the problem statement is vague. Which framework best sets up a comprehensive first pass?",
    answers: [
      'Pricing Strategy (cost/value/competition pricing)',
      'Value Chain Analysis (operations only)',
      'Business Situation Framework (customer, company, product, competition)',
      'Competitive Response Framework (assumes a competitor move)',
    ],
    correct: 2,
    explanation: 'When the problem is ambiguous, Business Situation provides a broad, MECE starting structure.',
  },
]

type QuizState = 'intro' | 'quiz' | 'results'

interface Question {
  id: number
  question: string
  answers: string[]
  correct: number
  explanation: string
}

function getLevel(score: number): { label: string; description: string } {
  if (score <= 3) {
    return {
      label: 'Framework Rookie',
      description: "You've got a few names down — next step is matching frameworks to the right situations.",
    }
  }
  if (score <= 6) {
    return {
      label: 'Solid Foundations',
      description: 'Good recognition — now focus on the key components and when to use each framework.',
    }
  }
  if (score <= 8) {
    return {
      label: 'Interview-Ready',
      description: 'Strong baseline — sharpen edge cases and practice switching frameworks smoothly.',
    }
  }
  return {
    label: 'Framework Fluent',
    description: 'Excellent — you can structure cases confidently and explain your logic under pressure.',
  }
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function FrameworksQuizPage() {
  const [state, setState] = useState<QuizState>('intro')
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const startQuiz = () => {
    const shuffled = shuffleArray(QUESTION_BANK).slice(0, 10)
    const questionsWithShuffledAnswers = shuffled.map((q) => {
      const answers = [...q.answers]
      const correctAnswer = answers[q.correct]
      const shuffledAnswers = shuffleArray(answers)
      const newCorrectIndex = shuffledAnswers.indexOf(correctAnswer)
      return {
        ...q,
        answers: shuffledAnswers,
        correct: newCorrectIndex,
      }
    })
    setQuestions(questionsWithShuffledAnswers)
    setCurrentQuestionIndex(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setEmailSubmitted(false)
    setState('quiz')
  }

  const handleAnswerClick = (answerIndex: number) => {
    if (showFeedback) return
    setSelectedAnswer(answerIndex)
    setShowFeedback(true)
    if (answerIndex === questions[currentQuestionIndex].correct) {
      setScore((prev) => prev + 1)
    }
  }

  useEffect(() => {
    if (showFeedback) {
      const timer = setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex((prev) => prev + 1)
          setSelectedAnswer(null)
          setShowFeedback(false)
        } else {
          setState('results')
        }
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [showFeedback, currentQuestionIndex, questions.length])

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!firstName.trim() || !email.trim()) return

    setIsSubmitting(true)
    const level = getLevel(score)

    try {
      await fetch('/api/quiz/frameworks/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstName.trim(),
          email: email.trim(),
          score,
          level: level.label,
        }),
      })
      setEmailSubmitted(true)
    } catch (error) {
      console.error('Error submitting email:', error)
      setEmailSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const currentQuestion = questions[currentQuestionIndex]
  const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0
  const level = getLevel(score)

  // Intro screen
  if (state === 'intro') {
    return (
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h1 className="h1">Framework Quiz</h1>
            <p className="text-lg text-ink-muted">(3 minutes)</p>
            <p className="text-xl text-ink-muted max-w-xl mx-auto">
              Test how well you know the core consulting frameworks.
            </p>
          </div>
          <button
            onClick={startQuiz}
            className="btn text-white bg-plum-600 hover:bg-plum-700 hover:-translate-y-px hover:shadow-lg text-lg px-8"
          >
            Start Quiz
          </button>
        </div>
      </main>
    )
  }

  // Quiz screen
  if (state === 'quiz' && currentQuestion) {
    const isCorrect = selectedAnswer === currentQuestion.correct
    return (
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="space-y-6">
          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm text-ink-muted">
              <span>
                {currentQuestionIndex + 1}/{questions.length}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 w-full bg-sand-dark rounded-full overflow-hidden">
              <div
                className="h-full bg-plum-600 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question card */}
          <div className="bg-white rounded-3xl shadow-xl ring-1 ring-sand-dark p-8 md:p-10 space-y-8">
            <h2 className="font-display text-2xl leading-tight">{currentQuestion.question}</h2>
            <div className="grid gap-3">
              {currentQuestion.answers.map((answer, index) => {
                let classes =
                  'w-full text-left py-4 px-6 rounded-2xl border-2 font-medium transition-all duration-200 cursor-pointer'

                if (showFeedback) {
                  if (index === currentQuestion.correct) {
                    classes += ' bg-sage-500 border-sage-500 text-white'
                  } else if (index === selectedAnswer) {
                    classes += ' bg-red-500 border-red-500 text-white'
                  } else {
                    classes += ' border-sand-dark text-ink-muted opacity-50'
                  }
                } else {
                  classes +=
                    ' border-sand-dark text-ink hover:border-plum-300 hover:bg-plum-50'
                }

                return (
                  <button
                    key={index}
                    className={classes}
                    onClick={() => handleAnswerClick(index)}
                    disabled={showFeedback}
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-left leading-relaxed">{answer}</span>
                      {showFeedback && index === currentQuestion.correct && (
                        <Check className="w-5 h-5 shrink-0" />
                      )}
                      {showFeedback && index === selectedAnswer && index !== currentQuestion.correct && (
                        <X className="w-5 h-5 shrink-0" />
                      )}
                    </span>
                  </button>
                )
              })}
            </div>

            {showFeedback && (
              <div className="pt-6 border-t border-sand-dark space-y-2">
                <p className="font-semibold text-lg">{isCorrect ? 'Correct!' : 'Incorrect'}</p>
                <p className="text-ink-muted leading-relaxed">{currentQuestion.explanation}</p>
              </div>
            )}
          </div>
        </div>
      </main>
    )
  }

  // Results screen
  if (state === 'results') {
    return (
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="font-display text-5xl md:text-6xl">
              {score}/{questions.length}
            </h1>
            <div className="space-y-2">
              <h2 className="font-display text-3xl text-plum-600">{level.label}</h2>
              <p className="text-lg text-ink-muted max-w-xl mx-auto">{level.description}</p>
            </div>
          </div>

          {!emailSubmitted ? (
            <div className="bg-white rounded-3xl shadow-xl ring-1 ring-sand-dark p-8 md:p-10 space-y-6">
              <div className="text-center space-y-2">
                <h3 className="font-display text-2xl">Get your results + the 1-page Framework Cheat Sheet</h3>
              </div>
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="form-input w-full h-12 rounded-xl"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-input w-full h-12 rounded-xl"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn w-full text-white bg-plum-600 hover:bg-plum-700 hover:-translate-y-px hover:shadow-lg text-lg disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send it to me'}
                </button>
                <p className="text-xs text-center text-ink-faint">
                  No spam. Unsubscribe anytime.{' '}
                  <Link href="/privacy" className="underline hover:text-ink">
                    Privacy Policy
                  </Link>
                </p>
              </form>
              <div className="text-center">
                <button
                  onClick={() => setEmailSubmitted(true)}
                  className="text-sm text-ink-muted underline hover:text-ink"
                >
                  Skip for now
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <p className="text-lg text-ink-muted">
                {firstName ? `Thanks ${firstName}! Check your email for your results.` : 'Quiz complete!'}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={startQuiz}
                  className="btn text-ink border border-sand-dark hover:bg-sand w-full sm:w-auto"
                >
                  Restart Quiz
                </button>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn text-white bg-plum-600 hover:bg-plum-700 hover:-translate-y-px hover:shadow-lg w-full sm:w-auto gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Practice on CaseBuddy
                </a>
              </div>
            </div>
          )}
        </div>
      </main>
    )
  }

  return null
}
