import ServiceCard from './ServiceCard'
import services from './servicesData'

export default function ServicesGrid() {
  return (
    <section className="bg-surface py-section-gap">
      <div className="max-w-container-max mx-auto px-baseline md:px-gutter">
        <div className="mb-12 flex flex-col gap-4 border-b border-outline/15 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-label-caps text-label-caps text-secondary mb-2 block uppercase tracking-widest">
              Index — Services
            </span>
            <h2 className="font-headline-md text-headline-md text-navy-deep">
              What we build
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-on-surface-variant">
            A working catalogue of disciplines, not a menu. Pick one as a starting point — most projects pull from several.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
