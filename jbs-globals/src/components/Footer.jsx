const hubs = ['London', 'New York', 'Singapore', 'Dubai']
const legal = [
  { label: 'Privacy Policy' },
  { label: 'Terms of Service' },
  { label: 'Client Login', highlight: true },
]

export default function Footer() {
  return (
    <footer className="w-full pt-section-gap pb-8 bg-navy-deep border-t border-glass-stroke">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-baseline md:px-gutter max-w-container-max mx-auto">
        <div className="md:col-span-2">
          <div className="font-headline-md text-headline-md font-bold text-white mb-6">
            JBS Globals
          </div>
          <p className="text-slate-gray max-w-sm font-body-md">
            Empowering scale through digital excellence. We provide the infrastructure and expertise
            for global enterprises to dominate their markets.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Global Hubs</h4>
          <ul className="space-y-4 text-slate-gray font-body-md">
            {hubs.map((hub) => (
              <li key={hub}>
                <a href="#" className="hover:text-white transition-colors">
                  {hub}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Legal</h4>
          <ul className="space-y-4 font-body-md">
            {legal.map(({ label, highlight }) => (
              <li key={label}>
                <a
                  href="#"
                  className={
                    highlight
                      ? 'text-electric-blue font-bold hover:text-white transition-colors'
                      : 'text-slate-gray hover:text-white transition-colors'
                  }
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-baseline md:px-gutter mt-20 pt-8 border-t border-white/10 text-center md:text-left">
        <p className="text-slate-gray text-sm">
  © {new Date().getFullYear()} JBS Globals. Empowering Scale Through Digital Excellence.
</p>
      </div>
    </footer>
  )
}
