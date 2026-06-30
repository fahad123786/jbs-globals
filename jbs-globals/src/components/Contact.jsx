import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [serviceInterest, setServiceInterest] = useState('BPO & Customer Support')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setError('')

    try {
      const response = await fetch('https://jbs-globals.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          serviceInterest,
          message,
        }),
      })

      const result = await response.json()
      if (!response.ok) {
        throw new Error(result.message || 'Failed to send inquiry')
      }

      setStatus('success')
      setName('')
      setEmail('')
      setServiceInterest('BPO & Customer Support')
      setMessage('')
    } catch (err) {
      setStatus('error')
      setError(err.message)
    }
  }

  return (
    <section className="bg-navy-deep py-section-gap relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/10 to-transparent pointer-events-none" />

      <div className="max-w-container-max mx-auto px-baseline md:px-gutter relative z-10">
        <div className="grid md:grid-cols-2 gap-section-gap items-center reveal">
          {/* Left */}
          <div className="text-white">
            <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6">
              Let's Discuss Your Next Scale.
            </h2>
            <p className="font-body-lg text-slate-gray mb-10">
              Our consultants are ready to design a custom roadmap for your operational expansion.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-electric-blue">mail</span>
                <span className="font-body-lg">info@jbsglobals.com</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-electric-blue">public</span>
                <span className="font-body-lg">Global Headquarters: London | New York</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy-deep uppercase tracking-tighter">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary py-2 placeholder:text-outline-variant"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy-deep uppercase tracking-tighter">
                    Work Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@company.com"
                    className="w-full border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary py-2 placeholder:text-outline-variant"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-navy-deep uppercase tracking-tighter">
                  Service Interest
                </label>
                <select
                  value={serviceInterest}
                  onChange={(e) => setServiceInterest(e.target.value)}
                  className="w-full border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary py-2 text-on-surface-variant"
                >
                  <option>BPO &amp; Customer Support</option>
                  <option>Lead Generation</option>
                  <option>Digital Marketing</option>
                  <option>Software Development</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-navy-deep uppercase tracking-tighter">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help your business scale?"
                  className="w-full border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary py-2 placeholder:text-outline-variant"
                  required
                />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full font-bold py-4 rounded-lg transition-all shadow-lg ${
                  status === 'success'
                    ? 'bg-green-600 text-white'
                    : 'bg-secondary-container text-on-secondary hover:brightness-110'
                }`}
              >
                {status === 'idle' && 'Send Inquiry'}
                {status === 'sending' && (
                  <span className="flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined animate-spin text-base">sync</span>
                    Sending...
                  </span>
                )}
                {status === 'success' && 'Success! We’ll contact you soon.'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
