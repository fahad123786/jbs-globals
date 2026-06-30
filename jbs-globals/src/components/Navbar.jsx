import { NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Solutions', to: '/' },
  { label: 'Industries', to: '/industries' },
  { label: 'Global Scale', to: '/global-scale' },
  { label: 'About Us', to: '/aboutus' },
  { label: 'Insights', to: '/insights' },
]

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-surface/70 backdrop-blur-xl border-b border-glass-stroke shadow-sm">
      <div className="flex justify-between items-center px-baseline md:px-gutter max-w-container-max mx-auto py-4">
        <div className="font-headline-md text-headline-md font-bold text-navy-deep">JBS Globals</div>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                isActive
                  ? 'font-body-md text-body-md text-secondary border-b-2 border-secondary pb-1'
                  : 'font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-300'
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
        <button className="bg-secondary-container text-on-secondary px-6 py-2 rounded hover:opacity-90 active:scale-95 transition-all font-body-md font-bold">
          Get Started
        </button>
      </div>
    </nav>
  )
}
