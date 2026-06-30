import Services from '../components/Services'

export default function ServicesPage() {
  return (
    <main className="bg-surface py-section-gap">
      <div className="max-w-container-max mx-auto px-baseline md:px-gutter mb-12 reveal">
        <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">
          Our Services
        </span>
        <h1 className="font-headline-md text-headline-md text-navy-deep">
          What We Can Do For Your Business
        </h1>
        <p className="text-on-surface-variant mt-4 font-body-lg max-w-3xl">
          Explore our digital solutions, design services, cloud hosting, maintenance, and AI automation offerings.
        </p>
      </div>
      <Services />
    </main>
  )
}
