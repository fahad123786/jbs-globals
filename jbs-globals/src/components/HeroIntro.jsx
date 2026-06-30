export default function HeroIntro() {
  return (
    <section className="bg-surface py-section-gap">
      <div className="max-w-container-max mx-auto px-baseline md:px-gutter">

        <div className="text-center mb-16 reveal">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">
            Who We Are
          </span>
          <h1 className="font-headline-md text-headline-md text-navy-deep">
            We Build Software That Moves Businesses Forward
          </h1>
          <p className="text-on-surface-variant mt-4 font-body-lg max-w-3xl mx-auto">
            Founded in 2019, we are a team of engineers, designers, and AI specialists passionate
            about turning complex problems into elegant digital products that deliver real impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-gutter items-center reveal">
          <div className="space-y-6">
            <div className="rounded-3xl bg-surface-container-low p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]">
              <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase tracking-widest">
                Our Story
              </span>
              <h3 className="font-headline-sm text-headline-sm text-navy-deep mb-4">
                From a 3-person startup to a full-service digital powerhouse.
              </h3>
              <p className="text-on-surface-variant font-body-md">
                What started as a small web dev team in Lahore has grown into a 30+ strong company
                delivering web platforms, mobile apps, AI integrations, and world-class UI/UX design
                to clients across 12 countries.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-outline-variant/40 p-5 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary-container/10 mb-4">
                  <span className="material-symbols-outlined text-secondary text-2xl">public</span>
                </div>
                <div className="font-headline-sm text-headline-sm text-navy-deep font-bold">12 Countries</div>
              </div>
              <div className="rounded-2xl border border-outline-variant/40 p-5 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary-container/10 mb-4">
                  <span className="material-symbols-outlined text-secondary text-2xl">groups</span>
                </div>
                <div className="font-headline-sm text-headline-sm text-navy-deep font-bold">30+ Experts</div>
              </div>
              <div className="rounded-2xl border border-outline-variant/40 p-5 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary-container/10 mb-4">
                  <span className="material-symbols-outlined text-secondary text-2xl">rocket_launch</span>
                </div>
                <div className="font-headline-sm text-headline-sm text-navy-deep font-bold">Since 2019</div>
              </div>
            </div>
          </div>

          <div className="relative rounded-[32px] overflow-hidden shadow-2xl h-[520px] bg-navy-deep/5">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
              alt="Our team collaborating on digital products"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
