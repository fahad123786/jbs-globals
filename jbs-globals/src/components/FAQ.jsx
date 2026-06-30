import { useState } from 'react'

const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'We offer end-to-end digital services including Web Development, Mobile App Development, Generative AI integration, and UI/UX Design — tailored to startups and enterprises alike.',
  },
  {
    question: 'How long does a project usually take?',
    answer:
      'Timelines vary based on scope and complexity. A typical web project takes 4–8 weeks, a mobile app 8–14 weeks, and AI integrations are scoped per requirement. We share a detailed timeline during our discovery call.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer:
      'Yes. We provide dedicated post-launch maintenance, bug fixes, performance monitoring, and feature updates. We offer flexible monthly retainer plans to keep your product running at its best.',
  },
  {
    question: 'Can I get a custom design for my brand?',
    answer:
      'Absolutely. Our UI/UX team creates fully custom designs grounded in your brand identity, target audience, and user research — not templates. Every pixel is intentional.',
  },
  {
    question: 'How do I get started with a project?',
    answer:
      'Simply reach out through our contact form or book a free 30-minute discovery call. We will understand your goals, scope the work, and send you a clear proposal within 48 hours.',
  },
  {
    question: 'Do you sign NDAs before sharing project details?',
    answer:
      'Yes. We take confidentiality seriously and are happy to sign an NDA before any detailed project discussion. Your ideas and business data are always protected.',
  },
  {
    question: 'What industries do you work with?',
    answer:
      'We have delivered projects across Healthcare, E-Commerce, FinTech, Real Estate, Education, SaaS, and more. Our team adapts quickly to industry-specific requirements and compliance needs.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes — we serve clients across 12+ countries. Our team is experienced in remote collaboration across time zones, with clear async communication and regular video check-ins.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  const left = faqs.slice(0, Math.ceil(faqs.length / 2))
  const right = faqs.slice(Math.ceil(faqs.length / 2))

  const AccordionItem = ({ item, index, offset = 0 }) => {
    const i = index + offset
    const isOpen = openIndex === i
    return (
      <div
        className={`rounded-3xl border transition-all duration-300 overflow-hidden
          ${isOpen
            ? 'bg-surface-container-low border-secondary/40 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.15)]'
            : 'bg-surface-container-low border-outline-variant/30 hover:-translate-y-1'
          }`}
      >
        <button
          onClick={() => toggle(i)}
          className="w-full text-left px-8 py-6 flex items-center justify-between gap-4 group"
        >
          <span className={`font-headline-sm text-headline-sm transition-colors duration-200 ${isOpen ? 'text-secondary' : 'text-navy-deep'}`}>
            {item.question}
          </span>
          <span
            className={`material-symbols-outlined text-secondary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          >
            expand_more
          </span>
        </button>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="px-8 pb-6 border-t border-outline-variant/20 pt-4">
            <p className="text-on-surface-variant font-body-md leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="bg-surface py-section-gap">
      <div className="max-w-container-max mx-auto px-baseline md:px-gutter">

        <div className="text-center mb-16 reveal">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">
            Have a Question?
          </span>
          <h2 className="font-headline-md text-headline-md text-navy-deep">
            Frequently Asked Questions
          </h2>
          <p className="text-on-surface-variant mt-4 font-body-lg max-w-2xl mx-auto">
            Everything you need to know before starting your project with us.
            Can't find your answer?{' '}
            <a href="/contact" className="text-secondary underline underline-offset-2 hover:opacity-80 transition-opacity">
              Let's talk.
            </a>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-gutter reveal">
          <div className="flex flex-col gap-4">
            {left.map((item, index) => (
              <AccordionItem key={item.question} item={item} index={index} offset={0} />
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {right.map((item, index) => (
              <AccordionItem key={item.question} item={item} index={index} offset={left.length} />
            ))}
          </div>
        </div>

        <div className="mt-16 reveal">
          <div className="rounded-3xl bg-surface-container-low p-10 border border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-navy-deep mb-2">
                Still have questions?
              </h3>
              <p className="text-on-surface-variant font-body-md max-w-md">
                Book a free 30-minute discovery call and we'll answer everything — no commitment needed.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-white font-medium text-sm px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-200 whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-base">calendar_month</span>
              Book a free call
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
