const milestones = [
  {
    year: '2019',
    icon: 'rocket_launch',
    title: 'Founded',
    desc: 'Started as a 3-person web development shop in Lahore with a bold vision for digital transformation.',
  },
  {
    year: '2020',
    icon: 'devices',
    title: 'Mobile app practice launched',
    desc: 'Expanded into iOS and Android development. Delivered our first cross-platform product using React Native.',
  },
  {
    year: '2021',
    icon: 'palette',
    title: 'UI/UX design studio',
    desc: 'Added a dedicated design team. Won our first international client and launched a full-service design practice.',
  },
  {
    year: '2022',
    icon: 'groups',
    title: 'Team of 20+',
    desc: 'Scaled to 20+ specialists across engineering, design, and project management. Expanded to 8 countries served.',
  },
  {
    year: '2023',
    icon: 'smart_toy',
    title: 'Generative AI practice',
    desc: 'Built a dedicated AI team. Delivered our first GPT-powered SaaS product and RAG pipeline for an enterprise client.',
  },
  {
    year: '2025',
    icon: 'emoji_events',
    title: '200+ projects milestone',
    desc: '30+ team members. 80+ happy clients. 12 countries served. Still building — and just getting started.',
  },
]

export default function Timeline() {
  return (
    <section className="bg-surface-container-low py-section-gap">
      <div className="max-w-container-max mx-auto px-baseline md:px-gutter">

        <div className="text-center mb-16 reveal">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">
            Our Journey
          </span>
          <h2 className="font-headline-md text-headline-md text-navy-deep">
            How We Got Here
          </h2>
          <p className="text-on-surface-variant mt-4 font-body-lg max-w-2xl mx-auto">
            Every milestone is a reflection of the trust our clients placed in us and the
            dedication of our growing team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-gutter reveal">
          {milestones.map(({ year, icon, title, desc }) => (
            <div
              key={year}
              className="rounded-3xl bg-surface-container-low p-8 border border-outline-variant/30 hover:-translate-y-2 transition-all duration-300 flex gap-6 items-start"
            >
              <div className="flex flex-col items-center gap-3 flex-shrink-0">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary-container/10">
                  <span className="material-symbols-outlined text-secondary text-2xl">{icon}</span>
                </div>
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                  {year}
                </span>
              </div>

              <div className="pt-1">
                <h4 className="font-headline-sm text-headline-sm text-navy-deep mb-3">{title}</h4>
                <p className="text-on-surface-variant font-body-md">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
