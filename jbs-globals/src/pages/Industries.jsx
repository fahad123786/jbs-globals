import Industries from '../components/Industries'

export default function IndustriesPage() {
  return (
    <main className="bg-surface py-section-gap">
      <div className="max-w-container-max mx-auto px-baseline md:px-gutter mb-12 reveal">
        <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">
          Industries
        </span>
        <h1 className="font-headline-md text-headline-md text-navy-deep">
          Industries We Support
        </h1>
        <p className="text-on-surface-variant mt-4 font-body-lg max-w-3xl">
          Expert support for healthcare, e-commerce, retail, finance, travel, education, and technology companies.
        </p>
      </div>
      <Industries />
    </main>
  )
}
