import { personal } from '../../data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display text-ivory/90 text-lg">MHK<span className="text-gold">.</span></span>
          <span className="w-px h-4 bg-ivory/20" />
          <span className="font-body text-xs text-ivory/40 tracking-wide">Mohammad Hasnain Khan</span>
        </div>

        <div className="flex items-center gap-5">
          <a href={personal.github} target="_blank" rel="noopener noreferrer"
            className="font-body text-xs text-ivory/40 hover:text-ivory/80 transition-colors duration-200 tracking-wide">
            GitHub
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
            className="font-body text-xs text-ivory/40 hover:text-ivory/80 transition-colors duration-200 tracking-wide">
            LinkedIn
          </a>
          <a href={`mailto:${personal.email}`}
            className="font-body text-xs text-ivory/40 hover:text-ivory/80 transition-colors duration-200 tracking-wide">
            Email
          </a>
        </div>

        <p className="font-body text-xs text-ivory/30 tracking-wide">
          © {year} · NMAMIT, Nitte
        </p>
      </div>
    </footer>
  )
}
