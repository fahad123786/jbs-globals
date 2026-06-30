const reasons = [
  {
    icon: 'payments',
    title: 'Cost Efficiency',
    desc: 'Optimize your overhead without compromising on quality or performance.',
  },
  {
    icon: 'schedule',
    title: '24/7 Availability',
    desc: 'Your business never sleeps. Neither do we. Consistent global presence.',
  },
  {
    icon: 'groups',
    title: 'Expert Team',
    desc: 'Vetted specialists trained in the latest technologies and methodologies.',
  },
  {
    icon: 'verified_user',
    title: 'Data Security',
    desc: 'Enterprise-grade encryption and strict compliance protocols for total peace of mind.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-section-gap max-w-container-max mx-auto px-baseline md:px-gutter">
      <div className="text-center mb-16 reveal">
        <h2 className="font-headline-md text-headline-md text-navy-deep">
          Why Leading Brands Choose JBS
        </h2>
        <p className="text-on-surface-variant mt-4 font-body-lg">
          Engineering excellence into every process.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-gutter reveal">
        {reasons.map(({ icon, title, desc }) => (
          <div key={title} className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-secondary-container/10">
              <span className="material-symbols-outlined text-secondary text-3xl">{icon}</span>
            </div>
            <h4 className="font-bold text-navy-deep text-lg mb-2">{title}</h4>
            <p className="text-slate-gray">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
