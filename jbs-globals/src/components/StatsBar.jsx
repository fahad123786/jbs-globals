const stats = [
  { icon: 'check_circle', value: '200+', label: 'Projects Delivered' },
  { icon: 'handshake',    value: '80+',  label: 'Happy Clients'      },
  { icon: 'public',       value: '12',   label: 'Countries Served'   },
  { icon: 'emoji_events', value: '6+',   label: 'Years of Experience' },
]

export default function StatsBar() {
  return (
    <section className="bg-surface-container-low py-section-gap">
      <div className="max-w-container-max mx-auto px-baseline md:px-gutter">

        <div className="text-center mb-16 reveal">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">
            By The Numbers
          </span>
          <h2 className="font-headline-md text-headline-md text-navy-deep">
            Results That Speak For Themselves
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter reveal">
          {stats.map(({ icon, value, label }) => (
            <div
              key={label}
              className="rounded-3xl bg-surface-container-low p-8 border border-outline-variant/30 hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary-container/10 mb-6">
                <span className="material-symbols-outlined text-secondary text-2xl">{icon}</span>
              </div>
              <div className="font-headline-md text-headline-md text-navy-deep font-bold mb-2">
                {value}
              </div>
              <p className="text-on-surface-variant font-body-md">{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
