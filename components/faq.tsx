'use client'

import { useState } from 'react'
import AnimateOnScroll from '@/components/ui/animate-on-scroll'

const faqs = [
  {
    question: 'Who is CaseBuddy for?',
    answer:
      'CaseBuddy is built for students and early-career professionals preparing for consulting interviews at firms like McKinsey, BCG, Bain, and other top strategy firms.',
  },
  {
    question: 'Can this really replace live mock interviews?',
    answer:
      'While live coaches offer human insight, CaseBuddy provides consistent, objective feedback available 24/7 at a fraction of the cost. Many users combine both\u2014using CaseBuddy for daily practice and occasional live sessions for final polish.',
  },
  {
    question: 'How accurate is the scoring?',
    answer:
      'Our scoring is designed around the same dimensions real interviewers use\u2014structure, creativity, math, and communication\u2014and calibrated using hundreds of real cases and example answers.',
  },
  {
    question: 'Can I focus on specific case types or firms?',
    answer:
      'Yes. You can choose specific case types and difficulty levels, and we\u2019re continuously expanding the library to cover common firm styles and industries.',
  },
  {
    question: 'How long does a typical session take?',
    answer:
      'Most cases take 15\u201320 minutes end-to-end, including feedback\u2014short enough to fit between classes or after work.',
  },
  {
    question: 'Do I need anything besides my phone?',
    answer:
      'No. As long as you have your iPhone and a quiet spot to think, you can run a full case with CaseBuddy.',
  },
]

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-sand-dark">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-semibold text-ink group-hover:text-plum-600 transition-colors pr-4">
          {faq.question}
        </span>
        <svg
          className={`w-5 h-5 text-ink-faint shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-ink-muted leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section id="faq" className="bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <AnimateOnScroll>
              <h2 className="h2 mb-4">Frequently asked questions.</h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <p className="text-lg text-ink-muted">
                Everything you need to know before making CaseBuddy your main prep tool.
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  faq={faq}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
