import AnimateOnScroll from '@/components/ui/animate-on-scroll'

const APP_STORE_URL = 'https://apps.apple.com/app/casebuddy-ai/id6746489925'

const methods = [
  {
    name: 'CaseBuddy',
    recommended: true,
    items: [
      { label: 'Time to feedback', value: '~20 min per case, instant scoring', positive: true },
      { label: 'Feedback quality', value: 'Structured across 4 dimensions with specific notes', positive: true },
      { label: 'Cost per mock', value: 'Low — unlimited reps on your phone', positive: true },
      { label: 'Availability', value: '24/7, whenever you have 15–20 minutes', positive: true },
    ],
  },
  {
    name: 'Mocking with a friend',
    recommended: false,
    items: [
      { label: 'Time to feedback', value: 'Depends on schedules; feedback quality varies', positive: false },
      { label: 'Feedback quality', value: 'Depends on experience; often vague', positive: false },
      { label: 'Cost per mock', value: 'Free, but costs social capital and coordination', positive: null },
      { label: 'Availability', value: 'When you can both find a slot', positive: false },
    ],
  },
  {
    name: '1-1 Coaching',
    recommended: false,
    items: [
      { label: 'Time to feedback', value: '30\u201340 min per case', positive: null },
      { label: 'Feedback quality', value: 'Generally good for experienced coaches', positive: null },
      { label: 'Cost per mock', value: 'High \u2014 up to $200 per session', positive: false },
      { label: 'Availability', value: 'When you can both find a slot', positive: false },
    ],
  },
]

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-sage-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  )
}

function NeutralIcon() {
  return (
    <svg className="w-4 h-4 text-ink-faint shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  )
}

export default function Comparison() {
  return (
    <section className="bg-sand">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <AnimateOnScroll>
              <h2 className="h2 mb-4">Better than casebooks, fellow students and expensive 1-1 coaching.</h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <p className="text-lg text-ink-muted">
                CaseBuddy gives you the speed of drilling alone with the feedback quality of a good coach&mdash;without the scheduling or price tag.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Comparison cards */}
          <AnimateOnScroll>
            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              {methods.map((method) => (
                <div
                  key={method.name}
                  className={`rounded-2xl p-6 md:p-8 ${
                    method.recommended
                      ? 'bg-white shadow-xl ring-2 ring-plum-200 relative'
                      : 'bg-cream border border-sand-dark'
                  }`}
                >
                  {method.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-plum-600 text-white text-xs font-medium px-4 py-1 rounded-full">
                      Recommended
                    </div>
                  )}
                  <h3 className={`font-display text-xl mb-6 ${method.recommended ? 'text-ink' : 'text-ink-muted'}`}>
                    {method.name}
                  </h3>
                  <ul className="space-y-4">
                    {method.items.map((item) => (
                      <li key={item.label} className="flex gap-2.5">
                        {item.positive === true ? <CheckIcon /> : item.positive === false ? <CrossIcon /> : <NeutralIcon />}
                        <div>
                          <div className="text-xs font-medium text-ink-faint uppercase tracking-wide mb-0.5">{item.label}</div>
                          <div className={`text-sm leading-relaxed ${method.recommended ? 'text-ink-light' : 'text-ink-muted'}`}>
                            {item.value}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* CTA */}
          <AnimateOnScroll delay={200}>
            <div className="text-center mt-12">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="btn text-white bg-plum-600 hover:bg-plum-700 hover:-translate-y-px hover:shadow-lg"
              >
                Start practicing smarter
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
