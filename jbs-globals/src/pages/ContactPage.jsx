import Contact from '../components/Contact'

export default function ContactPage() {
  const contactMethods = [
    {
      icon: 'mail',
      title: 'Email',
      value: 'info@jbsglobals.com',
      link: 'mailto:info@jbsglobals.com',
    },
    {
      icon: 'location_on',
      title: 'Headquarters',
      value: 'Lahore, Pakistan',
      link: '#',
    },
    {
      icon: 'schedule',
      title: 'Response Time',
      value: 'Within 24 hours',
      link: '#',
    },
    {
      icon: 'public',
      title: 'Global Reach',
      value: '12+ Countries',
      link: '#',
    },
  ]

  return (
    <main className="bg-surface">
      {/* Hero Section with Gradient Overlay */}
      <div className="relative bg-gradient-to-b from-surface-container-low to-surface py-section-gap overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-container-max mx-auto px-baseline md:px-gutter relative z-10">
          <div className="text-center mb-20 reveal">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">
              Get In Touch
            </span>
            <h1 className="font-headline-md md:font-display-lg text-headline-md md:text-display-lg text-navy-deep mb-6">
              Let's Build Something <span className="text-secondary">Amazing Together</span>
            </h1>
            <p className="text-on-surface-variant mt-6 font-body-lg max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? Whether it's web development, mobile apps, AI integration, or digital transformation, 
              our team is here to turn your vision into reality.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 reveal">
            {contactMethods.map(({ icon, title, value }, index) => (
              <div
                key={title}
                className="rounded-3xl bg-surface-container-low p-6 border border-outline-variant/30 hover:-translate-y-2 transition-all duration-300 text-center group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary-container/10 mb-4 group-hover:bg-secondary/20 transition-colors duration-200">
                  <span className="material-symbols-outlined text-secondary text-2xl">
                    {icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-navy-deep mb-2">
                  {title}
                </h3>
                <p className="text-on-surface-variant font-body-md">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-section-gap">
        <div className="max-w-container-max mx-auto px-baseline md:px-gutter">
          <div className="mb-12 text-center reveal">
            <h2 className="font-headline-md text-headline-md text-navy-deep mb-4">
              Send us a Message
            </h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible. 
              Or book a <span className="text-secondary font-semibold">free 30-minute discovery call</span> with our team.
            </p>
          </div>

          {/* Gradient card wrapper for form */}
          <div className="relative reveal">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-secondary/10 rounded-3xl blur-xl" />
            <div className="relative">
              <Contact />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-surface-container-low py-section-gap">
        <div className="max-w-container-max mx-auto px-baseline md:px-gutter">
          <div className="relative rounded-3xl bg-gradient-to-r from-secondary to-secondary/80 p-12 md:p-16 overflow-hidden reveal">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <div className="mb-4 inline-flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-4xl">
                  rocket_launch
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-white/90 font-body-lg mb-8">
                Every great project starts with a conversation. Schedule a free consultation with our team 
                and let's explore how we can help your business scale.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-secondary font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity duration-200 whitespace-nowrap shadow-lg"
                >
                  <span className="material-symbols-outlined text-base">calendar_month</span>
                  Book a Free Call
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 whitespace-nowrap"
                >
                  <span className="material-symbols-outlined text-base">mail</span>
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Additional Info */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-baseline md:px-gutter">
          <div className="text-center mb-12 reveal">
            <h2 className="font-headline-sm text-headline-sm text-navy-deep mb-3">
              Quick Response Options
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 reveal">
            <div className="rounded-3xl bg-surface-container-low p-8 border border-outline-variant/30 hover:-translate-y-2 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-container/10 mb-6">
                <span className="material-symbols-outlined text-secondary text-xl">chat</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-navy-deep mb-3">
                Live Chat
              </h4>
              <p className="text-on-surface-variant font-body-md">
                Chat with our team in real-time. Available Monday–Friday, 9 AM – 6 PM PKT.
              </p>
            </div>

            <div className="rounded-3xl bg-surface-container-low p-8 border border-outline-variant/30 hover:-translate-y-2 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-container/10 mb-6">
                <span className="material-symbols-outlined text-secondary text-xl">call</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-navy-deep mb-3">
                Phone Call
              </h4>
              <p className="text-on-surface-variant font-body-md">
                Prefer to talk? Schedule a call with our consultants. No long waits or hold music.
              </p>
            </div>

            <div className="rounded-3xl bg-surface-container-low p-8 border border-outline-variant/30 hover:-translate-y-2 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-container/10 mb-6">
                <span className="material-symbols-outlined text-secondary text-xl">description</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-navy-deep mb-3">
                Project Brief
              </h4>
              <p className="text-on-surface-variant font-body-md">
                Share your project details via email. We'll review and send a proposal within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
