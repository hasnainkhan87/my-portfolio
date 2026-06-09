import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { personal, stats } from '../../data'
import { images } from '../../assets/images'

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="min-h-screen bg-ivory flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, #556B2F 0px, #556B2F 1px, transparent 1px, transparent 60px),
          repeating-linear-gradient(90deg, #556B2F 0px, #556B2F 1px, transparent 1px, transparent 60px)`
      }} />

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-olive" />
              <span className="section-label">Portfolio</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.05] mb-2"
            >
              Mohammad
            </motion.h1>
            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.05] mb-6"
            >
              Hasnain <span className="text-olive">Khan</span>
            </motion.h1>

            {/* Roles */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-6">
              {personal.roles.map((role, i) => (
                <span
                  key={i}
                  className="font-body text-xs tracking-widest uppercase text-muted border border-stone-dark px-3 py-1.5 bg-stone"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="font-body text-base md:text-lg text-muted leading-relaxed mb-8 max-w-md"
            >
              {personal.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <a href="#journey" className="btn-primary">
                View Journey
                <ArrowDown size={15} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Download Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-5">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted hover:text-charcoal transition-colors duration-200"
              >
                <Github size={18} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted hover:text-charcoal transition-colors duration-200"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="text-muted hover:text-charcoal transition-colors duration-200"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Photo + stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-8"
          >
            {/* Profile image */}
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 overflow-hidden bg-stone border border-stone-dark">
                <img
                  src={images.profile}
                  alt="Mohammad Hasnain Khan"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative offset border */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-olive/30 -z-10" />
              {/* University tag */}
              <div className="absolute -bottom-4 left-4 bg-ivory border border-stone-dark px-4 py-2 shadow-sm">
                <p className="font-body text-xs text-muted tracking-wide">NMAMIT, Nitte</p>
                <p className="font-body text-xs font-medium text-charcoal">B.Tech CSE · 2024–2028</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs mt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
                  className="bg-stone border border-stone-dark p-4 text-center"
                >
                  <p className="font-display text-2xl font-semibold text-olive mb-0.5">{stat.value}</p>
                  <p className="font-body text-xs text-muted tracking-wide uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs text-muted tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-muted" />
        </motion.div>
      </motion.div>
    </section>
  )
}
