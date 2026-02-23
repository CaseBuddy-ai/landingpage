import AnimateOnScroll from '@/components/ui/animate-on-scroll'

const APP_STORE_URL = 'https://apps.apple.com/app/casebuddy-ai/id6746489925'

const features = [
  {
    title: 'Mock interviews that feel real',
    body: 'Practice full cases with an AI interviewer that asks follow-ups, pushes on your structure, and mirrors real consulting interview pressure.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
    ),
  },
  {
    title: 'Scoring like real interviewers',
    body: 'Get detailed scores on Structure, Creativity, Math, and Communication\u2014exactly how firms evaluate you\u2014plus targeted tips to improve each area.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    title: 'Turn downtime into prep time',
    body: 'Short 15\u201320 minute cases fit between classes, on the subway, or after work\u2014so you can rack up reps without blocking your entire day.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: 'See your progress clearly',
    body: 'Track your scores and skills over time, see which case types you\u2019ve mastered, and focus your next sessions where they matter most.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-sand">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-20 md:py-28">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <AnimateOnScroll>
              <h2 className="h2 mb-4">Everything you need to ace your case interviews.</h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <p className="text-lg text-ink-muted">
                Practice like it&apos;s the real thing, fix weak spots fast, and know exactly when you&apos;re ready for MBB and other top firms.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Features — alternating layout */}
          <div className="space-y-16 md:space-y-24">
            {features.map((feature, index) => (
              <AnimateOnScroll
                key={feature.title}
                animation={index % 2 === 0 ? 'animate-fade-right' : 'animate-fade-left'}
              >
                <div className={`max-w-5xl mx-auto flex flex-col gap-6 md:gap-12 md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Icon card */}
                  <div className="shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-plum-50 to-plum-100 border border-plum-200 flex items-center justify-center text-plum-600">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="h3 mb-3">{feature.title}</h3>
                    <p className="text-lg text-ink-muted leading-relaxed mb-4">{feature.body}</p>
                    <a
                      href={APP_STORE_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-plum-600 hover:text-plum-700 font-medium text-sm transition-colors"
                    >
                      Try it yourself
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
