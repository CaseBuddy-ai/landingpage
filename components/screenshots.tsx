'use client'

import { useRef } from 'react'
import AnimateOnScroll from '@/components/ui/animate-on-scroll'
import PhoneMockup from '@/components/ui/phone-mockup'

import ScreenHome from '@/public/images/Home.png'
import ScreenChat from '@/public/images/Chat.png'
import ScreenFramework from '@/public/images/Competitive Response Framework.png'
import ScreenTips from '@/public/images/Tips.png'

const SCREENS = [
  {
    title: 'Your command center',
    body: 'See your stats, start a new case, or review feedback — all from one screen.',
    image: ScreenHome,
  },
  {
    title: 'Live AI mock interviews',
    body: 'Chat through real cases with an AI interviewer that pushes back, asks follow-ups, and mirrors actual consulting pressure.',
    image: ScreenChat,
  },
  {
    title: 'Real case frameworks',
    body: 'Practice structured frameworks like Competitive Response and Market Entry — with components, examples, and one-tap practice.',
    image: ScreenFramework,
  },
  {
    title: 'Detailed AI feedback',
    body: 'Get dimension-by-dimension breakdowns on Structure, Communication, and more — with actionable tips to improve.',
    image: ScreenTips,
  },
]

export default function Screenshots() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = 300
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section id="screenshots" className="bg-sand">
      <div className="py-20 md:py-28">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <AnimateOnScroll>
              <h2 className="h2 mb-4">See CaseBuddy in action.</h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <p className="text-lg text-ink-muted">
                Designed for fast, focused practice on your phone&mdash;with the depth you&apos;d expect from a live coach.
              </p>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Scrollable phone carousel */}
        <AnimateOnScroll animation="animate-fade-up">
          <div className="relative">
            {/* Scroll container */}
            <div
              ref={scrollRef}
              className="flex gap-8 md:gap-12 overflow-x-auto scroll-smooth px-8 md:px-16 pb-6 snap-x snap-mandatory no-scrollbar"
            >
              {/* Left spacer for centering on large screens */}
              <div className="shrink-0 w-[calc((100vw-1000px)/2)] hidden lg:block" />

              {SCREENS.map((screen) => (
                <div key={screen.title} className="shrink-0 snap-center flex flex-col items-center text-center w-[200px] md:w-[240px]">
                  <PhoneMockup
                    src={screen.image}
                    alt={screen.title}
                    className="w-[200px] md:w-[240px] mb-5"
                  />
                  <h3 className="font-display text-lg md:text-xl mb-1.5">{screen.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{screen.body}</p>
                </div>
              ))}

              {/* Right spacer */}
              <div className="shrink-0 w-[calc((100vw-1000px)/2)] hidden lg:block" />
            </div>

            {/* Navigation arrows */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-2 md:left-6 top-[35%] -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-sand-dark shadow-md flex items-center justify-center text-ink-muted hover:text-ink hover:bg-white transition-all"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute right-2 md:right-6 top-[35%] -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-sand-dark shadow-md flex items-center justify-center text-ink-muted hover:text-ink hover:bg-white transition-all"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
