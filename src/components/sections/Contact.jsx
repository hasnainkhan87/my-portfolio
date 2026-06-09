import { Mail, Github, Linkedin, Download, ArrowUpRight } from 'lucide-react'
import { personal } from '../../data'
import SectionHeader from '../ui/SectionHeader'
import FadeUp from '../ui/FadeUp'

const contactLinks = [
  {
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail,
    description: 'Best way to reach me',
  },
  {
    label: 'GitHub',
    value: 'hasnainkhan87',
    href: personal.github,
    icon: Github,
    description: 'Code & projects',
  },
  {
    label: 'LinkedIn',
    value: 'hasnaink87',
    href: personal.linkedin,
    icon: Linkedin,
    description: 'Professional profile',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-stone">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          label="Get in Touch"
          title="Let's Connect"
          subtitle="Open to internship opportunities, collaborative projects, and interesting conversations."
        />

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {contactLinks.map((link, i) => {
            const Icon = link.icon
            return (
              <FadeUp key={i} delay={i * 0.08}>
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="group block bg-ivory border border-stone-dark p-5 hover:border-olive/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-9 h-9 bg-stone border border-stone-dark flex items-center justify-center group-hover:bg-olive group-hover:border-olive transition-all duration-300">
                      <Icon size={16} className="text-charcoal group-hover:text-ivory transition-colors duration-300" />
                    </div>
                    <ArrowUpRight size={14} className="text-muted group-hover:text-olive transition-colors duration-200" />
                  </div>
                  <p className="font-body text-xs text-muted mb-0.5">{link.label}</p>
                  <p className="font-display text-base text-charcoal truncate">{link.value}</p>
                  <p className="font-body text-xs text-muted mt-1">{link.description}</p>
                </a>
              </FadeUp>
            )
          })}
        </div>

        {/* Resume CTA */}
        <FadeUp delay={0.3}>
          <div className="bg-olive p-8 text-center">
            <p className="section-label text-ivory/60 mb-3">Ready to work together?</p>
            <h3 className="font-display text-2xl md:text-3xl text-ivory mb-4">
              Download my Resume
            </h3>
            <p className="font-body text-sm text-ivory/70 mb-6 max-w-md mx-auto">
              B.Tech CSE · CGPA 9.1 · ACM Secretary · Software Developer
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ivory text-olive px-8 py-3 font-body text-sm font-medium tracking-wide transition-all duration-300 hover:bg-stone"
            >
              <Download size={15} />
              Download Resume
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
