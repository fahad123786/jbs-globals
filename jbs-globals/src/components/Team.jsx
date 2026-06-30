const team = [
  {
    initials: 'MJ',
    name: 'Muhammad Junaid',
    role: 'CEO & Co-founder',
    bio: '10+ years in software delivery. Scaled 3 startups before founding this company.',
    tags: ['Strategy', 'Growth'],
    color: 'bg-primary/10 text-primary',
  },
  {
    initials: 'FS',
    name: 'Fahad Sohail',
    role: 'Manager & Web Development Expert',
    bio: 'Full-stack engineer turned architect. Expert in cloud-native systems and AI pipelines.',
    tags: ['Website', 'AI/ML'],
    color: 'bg-secondary-container/20 text-secondary',
  },
  
]

export default function Team() {
  return (
    <section className="bg-surface py-section-gap">
      <div className="max-w-container-max mx-auto px-baseline md:px-gutter">
        <div className="text-center mb-16 reveal">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">
            The People Behind The Work
          </span>
          <h2 className="font-headline-md text-headline-md text-navy-deep">
            Meet Our Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter reveal">
          {team.map(({ initials, name, role, bio, tags, color }) => (
            <div
              key={name}
              className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/30 group hover:-translate-y-2 transition-all duration-300 service-card-hover smooth-transition"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 font-bold text-sm ${color}`}>
                {initials}
              </div>

              <h4 className="font-bold text-navy-deep text-lg mb-1">{name}</h4>
              <p className="text-secondary text-sm font-medium mb-3">{role}</p>

              <p className="text-on-surface-variant text-sm mb-5 leading-relaxed">{bio}</p>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-secondary-container/10 text-secondary border border-outline-variant/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
