export default function ServiceCard({ id, title, blurb, image }) {
  return (
    <a
      href="#"
      className="group relative isolate flex flex-col justify-end overflow-hidden rounded-3xl border border-outline/15 bg-white shadow-[0_18px_70px_rgba(2,12,27,0.08)] transform transform-gpu translate-y-0 transition-transform duration-300 will-change-transform hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-secondary min-h-[20rem]"
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-65 transition-all duration-700 ease-out group-hover:scale-[1.08] group-hover:opacity-10"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

      <div className="relative z-10 p-8 sm:p-10">
        <span className="font-label-caps text-xs uppercase tracking-[0.3em] text-secondary/80">
          {id}
        </span>
        <h3 className="mt-4 text-2xl font-headline-md text-white z-30 transform translate-y-0 transition-transform duration-500 will-change-transform group-hover:-translate-y-24 group-hover:-translate-x-4">
          {title}
        </h3>

        {/* Blurb overlay: absolute so it doesn't change layout when revealed */}
        <div className="absolute left-0 right-0 bottom-0 z-20 p-6 sm:p-8 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm leading-relaxed text-white/90">
            {blurb}
          </p>
        </div>

        <div className="mt-6 h-px w-12 bg-secondary transition-all duration-500 group-hover:w-20" />
      </div>
    </a>
  )
}