import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink, Star } from 'lucide-react'
import { projects } from '../../data'
import SectionHeader from '../ui/SectionHeader'

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-stone border border-stone-dark hover:border-olive/40 transition-all duration-300 p-6 relative"
    >
      {project.featured && (
        <div className="absolute top-0 right-0 bg-olive px-3 py-1 flex items-center gap-1">
          <Star size={10} className="text-ivory fill-ivory" />
          <span className="font-body text-xs text-ivory tracking-wide">Featured</span>
        </div>
      )}

      <div className="mb-4">
        <h3 className="font-display text-xl text-charcoal mb-1">{project.title}</h3>
        <p className="font-body text-xs text-olive font-medium tracking-wide mb-3">{project.subtitle}</p>
        <p className="font-body text-sm text-muted leading-relaxed">{project.description}</p>
      </div>

      {/* Highlights */}
      <ul className="mb-5 space-y-1.5">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex items-center gap-2 font-body text-sm text-charcoal">
            <span className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
            {h}
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t, i) => (
          <span key={i} className="font-body text-xs text-muted border border-stone-dark px-2.5 py-1 bg-ivory">
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-body text-xs font-medium text-charcoal border border-charcoal/30 px-3 py-2 hover:bg-charcoal hover:text-ivory transition-all duration-200"
        >
          <Github size={13} />
          GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-body text-xs font-medium text-olive border border-olive/40 px-3 py-2 hover:bg-olive hover:text-ivory transition-all duration-200"
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-ivory">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Selected Work"
          title="Projects"
          subtitle="A few things I've built. More on GitHub."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/hasnainkhan87"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <Github size={15} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
