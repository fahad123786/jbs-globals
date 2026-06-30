const HERO_BG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDhuoyjCdKl32NkeLO0x_DNxWtG0DUtQFJ36C1GUjzpwMb8K9tMWlblpKw3Qyj-wE1OWJ4zvBdneltLtAIvfO7qJqfEpVvJ0L-kDIxdCGM4vxVG8jlVuOXptgDoHu5iSTQqoVNBZGJ2AUXszSh8qePIYjX9R4rRtRcy2lx_f1D45npAp0wb5ZrY7iO80Zm2LOjo42kzlqFFjAttHO341F-WBQayXOFQztgeyl7G9_Y6SrJijmrbN6DBeZbtJgAPeaTE0k1WdQypr_I'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-navy-deep py-20">
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          alt="JBS Globals Global Operations"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-baseline md:px-gutter w-full">
        <div className="max-w-3xl">
          <span className="font-label-caps text-label-caps text-electric-blue mb-4 block tracking-widest uppercase">
            Global Excellence
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6">
            Scale Your Business with{' '}
            <span className="text-electric-blue">Global Precision.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-slate-gray mb-10 max-w-xl">
            Premier BPO and Digital Solutions tailored for growth-oriented brands in the US, UK, and
            beyond. We bridge the gap between world-class talent and your ambitious goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-electric-blue text-navy-deep px-8 py-4 font-bold text-body-md rounded shadow-lg hover:brightness-110 transition-all active:scale-95">
              Book a Free Consultation
            </button>
            <button className="border border-white/30 text-white px-8 py-4 font-bold text-body-md rounded hover:bg-white/10 transition-all">
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

