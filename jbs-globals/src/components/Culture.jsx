const perks = [
  {
    icon: 'home_work',
    title: 'Hybrid & remote-first',
    desc: 'Flexible work model — in-office collaboration when it matters, remote freedom the rest of the time.',
  },
  {
    icon: 'school',
    title: 'Learning budget',
    desc: 'PKR 30,000 annual learning budget per person. Udemy, Coursera, and in-house AI workshops every quarter.',
  },
  {
    icon: 'health_and_safety',
    title: 'Health coverage',
    desc: 'Full health insurance for you and your dependents. Because we care about you beyond the office.',
  },
  {
    icon: 'celebration',
    title: 'Team culture',
    desc: 'Monthly team lunches, quarterly hackathons, and an annual retreat. We celebrate every win.',
  },
  {
    icon: 'trending_up',
    title: 'Fast-track growth',
    desc: 'Performance-based promotions, transparent career ladders, and mentorship from senior engineers.',
  },
  {
    icon: 'devices',
    title: 'Laptop allowance',
    desc: 'Get the gear you need to do your best work — laptop allowance for all full-time team members.',
  },
  {
    icon: 'schedule',
    title: 'Flexible hours',
    desc: 'We care about output, not clock-in times. Own your schedule and deliver great work.',
  },
  {
    icon: 'volunteer_activism',
    title: 'Performance bonuses',
    desc: 'Quarterly bonuses tied to individual and company performance. Your effort is recognized.',
  },
]

export default function Culture() {
  return (
    <section className="bg-surface-container-lowest py-section-gap">
      <div className="max-w-container-max mx-auto px-baseline md:px-gutter">
        <div className="text-center mb-16 reveal">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">
            Life At Our Company
          </span>
          <h2 className="font-headline-md text-headline-md text-navy-deep">
            Culture & Workplace
          </h2>
          <p className="text-on-surface-variant text-base mt-4 max-w-xl mx-auto leading-relaxed">
            We've built a culture where talented people do the best work of their careers — with flexibility, trust, and room to grow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter reveal">
          {perks.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-surface p-8 rounded-xl border border-outline-variant/30 group hover:-translate-y-2 transition-all duration-300 service-card-hover smooth-transition"
            >
              <div className="w-12 h-12 bg-secondary-container/5 rounded flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">{icon}</span>
              </div>
              <h4 className="font-bold text-navy-deep text-lg mb-3">{title}</h4>
              <p className="text-on-surface-variant text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 reveal">
          <div className="bg-surface rounded-xl border border-outline-variant/30 p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-bold text-navy-deep text-xl mb-2">
                Want to be part of our team?
              </h3>
              <p className="text-on-surface-variant text-sm max-w-md">
                We're always looking for talented engineers, designers, and AI specialists to join us.
              </p>
            </div>
            <a
              href="/careers"
              className="inline-flex items-center gap-2 bg-secondary text-white font-medium text-sm px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-200 whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-base">work</span>
              View open roles
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
