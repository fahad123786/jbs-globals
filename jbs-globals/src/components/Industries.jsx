const industries = [
  {
    icon: 'medical_services',
    title: 'Healthcare',
    desc: 'HIPAA-compliant support and data management for modern healthcare providers.',
  },
  {
    icon: 'shopping_cart',
    title: 'E-Commerce',
    desc: 'Seamless customer experience and back-office scale for global digital brands.',
  },
  {
    icon: 'storefront',
    title: 'Retail & Wholesale',
    desc: 'Optimizing supply chain communication and omnichannel retail operations.',
  },
  {
    icon: 'domain',
    title: 'Real Estate',
    desc: 'Lead qualification and administrative support for high-volume agencies.',
  },
  {
    icon: 'account_balance',
    title: 'Finance & Insurance',
    desc: 'Secure, precision-driven processing and client relations for financial firms.',
  },
  {
    icon: 'flight',
    title: 'Travel & Tourism',
    desc: '24/7 global booking support and multilingual travel assistance services.',
  },
  {
    icon: 'school',
    title: 'Education',
    desc: 'Streamlining enrollment processes and support for educational institutions.',
  },
  {
    icon: 'code',
    title: 'Technology',
    desc: 'Technical support and software implementation help for high-growth tech firms.',
  },
]

export default function Industries() {
  return (
    <section className="bg-surface py-section-gap">
      <div className="max-w-container-max mx-auto px-baseline md:px-gutter">
        <div className="text-center mb-16 reveal">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">
            Who We Serve
          </span>
          <h2 className="font-headline-md text-headline-md text-navy-deep">
            Industries We Support
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter reveal">
          {industries.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/30 group hover:-translate-y-2 transition-all duration-300 service-card-hover smooth-transition"
            >
              <div className="w-12 h-12 bg-secondary-container/5 rounded flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">{icon}</span>
              </div>
              <h4 className="font-bold text-navy-deep text-lg mb-3">{title}</h4>
              <p className="text-on-surface-variant text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
