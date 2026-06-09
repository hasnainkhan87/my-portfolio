import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Code2, Award } from 'lucide-react'
import { achievements } from '../../data'
import { images } from '../../assets/images'
import SectionHeader from '../ui/SectionHeader'
import FadeUp from '../ui/FadeUp'

const typeConfig = {
  hackathon: { icon: Trophy, label: 'Hackathon', color: 'text-gold', bg: 'bg-gold/10' },
  opensource: { icon: Code2, label: 'Open Source', color: 'text-olive', bg: 'bg-olive/10' },
  certification: { icon: Award, label: 'Certification', color: 'text-muted', bg: 'bg-stone-dark' },
}

export default function Achievements() {
  const hackathons = achievements.filter(a => a.type === 'hackathon')
  const rest = achievements.filter(a => a.type !== 'hackathon')

  return (
    <section id="achievements" className="py-24 bg-ivory">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Recognition"
          title="Achievements"
          subtitle="Competitions, contributions, and certifications that mark the journey."
        />

        {/* Hackathon spotlight with image */}
        <div className="mb-10">
          <FadeUp>
            <p className="section-label mb-5">Hackathons</p>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-5">
            {/* HackLoop with image */}
            <FadeUp delay={0.05}>
              <div className="bg-stone border border-stone-dark overflow-hidden group">
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/7' }}>
                  <img
                    src={images['hackloop-podium']}
                    alt="HackLoop S04 Podium"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="font-body text-xs tracking-widest uppercase text-gold">HackLoop S04</span>
                    <p className="font-display text-white text-xl">3rd Place — MolecuLens</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-body text-xs text-olive font-medium mb-1">NMAM Institute of Technology · 2025</p>
                  <p className="font-body text-sm text-muted leading-relaxed">{hackathons[0].description}</p>
                </div>
              </div>
            </FadeUp>

            {/* SIH */}
            <FadeUp delay={0.1}>
              <div className="bg-stone border border-stone-dark p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 bg-gold/10 px-3 py-1.5 mb-4">
                    <Trophy size={13} className="text-gold" />
                    <span className="font-body text-xs text-gold font-medium tracking-wide">Hackathon</span>
                  </div>
                  <h3 className="font-display text-xl text-charcoal mb-1">{hackathons[1].title}</h3>
                  <p className="font-body text-xs text-olive font-medium mb-3">{hackathons[1].org} · {hackathons[1].year}</p>
                  <p className="font-body text-sm text-muted leading-relaxed">{hackathons[1].description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-dark">
                  <p className="font-body text-xs text-muted italic">National-level recognition among thousands of teams across India.</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Certifications + Open Source */}
        <div>
          <FadeUp>
            <p className="section-label mb-5">Certifications & Contributions</p>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {rest.map((item, i) => {
              const config = typeConfig[item.type]
              const Icon = config.icon
              return (
                <FadeUp key={i} delay={i * 0.07}>
                  <div className="bg-stone border border-stone-dark p-5 h-full">
                    <div className={`inline-flex items-center gap-1.5 ${config.bg} px-2.5 py-1 mb-4`}>
                      <Icon size={12} className={config.color} />
                      <span className={`font-body text-xs ${config.color} font-medium tracking-wide`}>{config.label}</span>
                    </div>
                    <h4 className="font-display text-base text-charcoal mb-1 leading-snug">{item.title}</h4>
                    <p className="font-body text-xs text-olive font-medium mb-2">{item.org}</p>
                    <p className="font-body text-xs text-muted leading-relaxed">{item.description}</p>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
