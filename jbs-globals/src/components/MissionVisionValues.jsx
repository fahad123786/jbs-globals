const values = [
  {
    icon: 'shield_check',
    title: 'Quality First',
    desc: 'We do not ship until we are proud of it. Every line of code and every pixel is held to the highest standard.',
  },
  {
    icon: 'message',
    title: 'Radical Transparency',
    desc: 'Clear communication at every step of the project. No surprises — just honest updates and real progress.',
  },
  {
    icon: 'lightbulb',
    title: 'Innovation-Driven',
    desc: 'We embrace emerging tech — especially AI — to give our clients a competitive edge in their industries.',
  },
  {
    icon: 'favorite',
    title: 'Client Obsession',
    desc: 'Your success is our success. We measure our performance by the outcomes we deliver for your business.',
  },
  {
    icon: 'workspace_premium',
    title: 'Ownership Culture',
    desc: 'Every team member takes full ownership of their craft — no finger-pointing, only accountability.',
  },
  {
    icon: 'auto_stories',
    title: 'Always Learning',
    desc: 'Technology never stands still and neither do we. Continuous upskilling is baked into our culture.',
  },
]

export default function MissionVisionValues() {
  return (
    <section className="bg-surface py-section-gap">
      <div className="max-w-container-max mx-auto px-baseline md:px-gutter">

        <div className="text-center mb-16 reveal">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">
            What Drives Us
          </span>
          <h2 className="font-headline-md text-headline-md text-navy-deep">
            Mission, Vision & Values
          </h2>
          <p className="text-on-surface-variant mt-4 font-body-lg max-w-3xl mx-auto">
            We are not just a vendor — we are a long-term technology partner. These are the principles
            that guide every decision we make and every product we build.
          </p>
        </div>

        <div className="grid gap-gutter md:grid-cols-3 reveal">
          <div className="rounded-3xl bg-surface-container-low p-8 border border-outline-variant/30">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary-container/10 mb-6">
              <span className="material-symbols-outlined text-secondary text-2xl">target</span>
            </div>
            <h4 className="font-headline-sm text-headline-sm text-navy-deep mb-4">Our Mission</h4>
            <p className="text-on-surface-variant font-body-md">
              To empower businesses with cutting-edge software — from intelligent web platforms
              to AI-powered products — that deliver real, measurable impact for our clients.
            </p>
          </div>
          <div className="rounded-3xl bg-surface-container-low p-8 border border-outline-variant/30">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary-container/10 mb-6">
              <span className="material-symbols-outlined text-secondary text-2xl">visibility</span>
            </div>
            <h4 className="font-headline-sm text-headline-sm text-navy-deep mb-4">Our Vision</h4>
            <p className="text-on-surface-variant font-body-md">
              To be the most trusted technology partner for startups and enterprises — known globally
              for quality, transparency, and next-generation digital innovation.
            </p>
          </div>
          <div className="rounded-3xl bg-surface-container-low p-8 border border-outline-variant/30">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary-container/10 mb-6">
              <span className="material-symbols-outlined text-secondary text-2xl">handshake</span>
            </div>
            <h4 className="font-headline-sm text-headline-sm text-navy-deep mb-4">Our Promise</h4>
            <p className="text-on-surface-variant font-body-md">
              Consistent quality, transparent communication, and measurable business outcomes —
              every engagement, every time, without exception.
            </p>
          </div>
        </div>

        <div className="mt-gutter grid lg:grid-cols-3 gap-gutter reveal">
          {values.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="rounded-3xl bg-surface-container-low p-8 border border-outline-variant/30 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary-container/10 mb-6">
                <span className="material-symbols-outlined text-secondary text-2xl">{icon}</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-navy-deep mb-3">{title}</h4>
              <p className="text-on-surface-variant font-body-md">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
