import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { images } from '../../assets/images'
import SectionHeader from '../ui/SectionHeader'
import FadeUp from '../ui/FadeUp'

function BentoCard({ item, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const hasImage = item.image && images[item.image]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`group bg-stone border border-stone-dark overflow-hidden hover:border-olive/40 transition-colors duration-300 ${className}`}
    >
      {hasImage && (
        <div className="relative overflow-hidden" style={{ aspectRatio: item.tall ? '4/3' : '16/7' }}>
          <img
            src={images[item.image]}
            alt={item.org}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
          <span className="absolute top-3 left-3 font-body text-xs tracking-widest uppercase text-ivory/80 bg-olive/80 px-2 py-1">
            {item.tag}
          </span>
        </div>
      )}

      {!hasImage && (
        <div className="h-2 bg-olive/20" />
      )}

      <div className="p-5">
        {!hasImage && (
          <span className="font-body text-xs tracking-widest uppercase text-olive mb-3 block">{item.tag}</span>
        )}
        <h3 className="font-display text-lg text-charcoal mb-0.5">{item.org}</h3>
        <p className="font-body text-xs text-gold font-medium mb-2 tracking-wide">{item.role}</p>
        <p className="font-body text-sm text-muted leading-relaxed">{item.description}</p>

        {/* Second image if available */}
        {item.image2 && images[item.image2] && (
          <div className="mt-4 overflow-hidden border border-stone-dark" style={{ aspectRatio: '16/7' }}>
            <img
              src={images[item.image2]}
              alt={`${item.org} - additional`}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Leadership() {
  const leadershipData = [
    {
      org: 'ACM Student Chapter',
      role: 'Event Manager → Secretary',
      image: 'acm-event-head',
      image2: 'acm-tech-event',
      description: 'Rose from Event Manager to Secretary of ACM NMAMIT. Organized Finite Loop — a coding & fun event with 100+ participants and a significant prize pool — and led multiple technical events across semesters.',
      tag: 'Technical Community',
      tall: false,
    },
    {
      org: 'WikiClub Tech India',
      role: 'Core Member & Event Coordinator',
      image: 'opensource-talk',
      image2: 'wiki-anniversary',
      description: 'Core member running workshops, open-source talks, and WikiClub Tech\'s 25th anniversary event. Represented the club as a speaker and team lead.',
      tag: 'Open Source',
    },
    {
      org: 'Public Speaking & Emcee',
      role: 'Stage Host',
      image: 'nss-pitchathon',
      description: 'Hosted the NSS IT Wing Pitch-a-thon at the podium, bringing confidence and clarity to technical stage events.',
      tag: 'Communication',
    },
    {
      org: 'Sakura Exchange Program',
      role: 'Management Team',
      image: 'sakura-exchange',
      description: 'Part of the core management team hosting students from Ritsumeikan University, Japan at NMAMIT — bridging cultures through technology.',
      tag: 'International',
    },
    {
      org: 'National Service Scheme',
      role: 'Volunteer',
      description: 'Active NSS volunteer contributing to community service initiatives and social impact programs at NMAMIT.',
      tag: 'Social Impact',
    },
  ]

  return (
    <section id="leadership" className="py-24 bg-stone">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Beyond the Classroom"
          title="Leadership & Community"
          subtitle="The communities I've built, the stages I've stood on, and the people I've worked alongside."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Row 1: ACM (large, 2 cols) + WikiClub (1 col) */}
          <BentoCard item={leadershipData[0]} delay={0} className="md:col-span-2" />
          <BentoCard item={leadershipData[1]} delay={0.1} />

          {/* Row 2: Public Speaking + Sakura + NSS */}
          <BentoCard item={leadershipData[2]} delay={0.15} />
          <BentoCard item={leadershipData[3]} delay={0.2} />
          <BentoCard item={leadershipData[4]} delay={0.25} />
        </div>
      </div>
    </section>
  )
}
