import HeroImage from '@/public/images/Home.png'
import PhoneMockup from '@/components/ui/phone-mockup'

const APP_STORE_URL = 'https://apps.apple.com/app/casebuddy-ai/id6746489925'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Soft background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-plum-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-plum-50/60 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-20 pb-12 md:pt-28 md:pb-20">
          <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">

            {/* Copy */}
            <div className="text-center lg:text-left">
              <div className="hero-animate inline-flex text-sm font-medium py-1.5 px-4 mb-6 text-plum-700 bg-plum-50 border border-plum-200 rounded-full">
                Built for consulting recruiting (undergrad &amp; MBA)
              </div>
              <h1 className="h1 mb-5 hero-animate-delay-1">
                Get case-ready 3x faster for consulting interviews.
              </h1>
              <p className="text-lg text-ink-muted mb-4 leading-relaxed hero-animate-delay-2">
                CaseBuddy runs realistic AI mock interviews based on real consulting cases, so you stop guessing and start drilling exactly what firms test on.
              </p>
              <p className="text-sm text-ink-faint mb-8 hero-animate-delay-2">
                Practice on your own schedule. No awkward mock interviews with classmates. Just focused reps that actually move your score.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:justify-start hero-animate-delay-3">
                <a
                  className="btn text-white bg-plum-600 hover:bg-plum-700 hover:-translate-y-px hover:shadow-lg w-full sm:w-auto gap-2"
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download on iOS
                </a>
                <a
                  className="btn text-ink border border-sand-dark hover:bg-sand w-full sm:w-auto"
                  href="#features"
                >
                  See how it works
                </a>
              </div>

              {/* Inline social proof */}
              <div className="mt-6 flex items-center gap-3 justify-center lg:justify-start hero-animate-delay-4">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-ink-muted">
                  Helped <span className="font-semibold text-ink">300+</span> students land consulting offers
                </span>
              </div>
            </div>

            {/* Visual — phone mockup */}
            <div className="relative flex justify-center hero-animate-delay-3">
              <PhoneMockup
                src={HeroImage}
                alt="CaseBuddy home screen showing case stats and performance"
                className="w-[220px] md:w-[260px]"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur border border-sand-dark rounded-full px-4 py-2 text-xs text-ink-muted shadow-lg whitespace-nowrap">
                <span className="font-semibold text-ink">Structure</span> · <span className="font-semibold text-ink">Creativity</span> · <span className="font-semibold text-ink">Math</span> · <span className="font-semibold text-ink">Communication</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
