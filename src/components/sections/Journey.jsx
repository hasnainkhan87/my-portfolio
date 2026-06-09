import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Users, Trophy, Star } from 'lucide-react'
import { journey } from '../../data'
import SectionHeader from '../ui/SectionHeader'
import FadeUp from '../ui/FadeUp'

const typeConfig = {
  education: { icon: GraduationCap, color: 'text-olive', bg: 'bg-olive/10', border: 'border-olive/20' },
  community: { icon: Users, color: 'text-gold', bg: 'bg-gold/10', border: 'border-gold/20' },
  leadership: { icon: Star, color: 'text-olive', bg: 'bg-olive/15', border: 'border-olive/30' },
  achievement: { icon: Trophy, color: 'text-gold', bg: 'bg-gold/15', border: 'border-gold/30' },
}

function TimelineItem({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const config = typeConfig[item.type]
  const Icon = config.icon
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className={`hidden md:flex items-center gap-6 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`flex-1 bg-stone border ${config.border} p-5 max-w-sm ${isLeft ? 'text-right' : 'text-left'}`}
      >
        <span className="font-body text-xs tracking-widest uppercase text-gold mb-1 block">{item.year}</span>
        <h3 className="font-display text-lg text-charcoal mb-0.5">{item.title}</h3>
        <p className="font-body text-xs text-olive font-medium mb-2">{item.org}</p>
        <p className="font-body text-sm text-muted leading-relaxed">{item.description}</p>
      </motion.div>

      {/* Center icon */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
        className={`flex-shrink-0 w-10 h-10 ${config.bg} border ${config.border} flex items-center justify-center z-10`}
      >
        <Icon size={16} className={config.color} />
      </motion.div>

      {/* Empty side */}
      <div className="flex-1 max-w-sm" />
    </div>
  )
}

function MobileTimelineItem({ item, index }) {
  const config = typeConfig[item.type]
  const Icon = config.icon

  return (
    <FadeUp delay={index * 0.07}>
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className={`w-8 h-8 ${config.bg} border ${config.border} flex items-center justify-center flex-shrink-0`}>
            <Icon size={14} className={config.color} />
          </div>
          {index < journey.length - 1 && <div className="w-px flex-1 bg-stone-dark mt-2" />}
        </div>
        <div className="pb-8">
          <span className="font-body text-xs tracking-widest uppercase text-gold mb-1 block">{item.year}</span>
          <h3 className="font-display text-base text-charcoal mb-0.5">{item.title}</h3>
          <p className="font-body text-xs text-olive font-medium mb-1.5">{item.org}</p>
          <p className="font-body text-sm text-muted leading-relaxed">{item.description}</p>
        </div>
      </div>
    </FadeUp>
  )
}

export default function Journey() {
  const lineRef = useRef(null)
  const lineInView = useInView(lineRef, { once: true })

  return (
    <section id="journey" className="py-24 bg-ivory">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="The Story So Far"
          title="A Journey in Progress"
          subtitle="From a school in Lucknow to leading technical communities in Karnataka — every step has been intentional."
        />

        {/* Desktop: alternating timeline */}
        <div className="hidden md:block relative">
          {/* Center line */}
          <div ref={lineRef} className="absolute left-1/2 top-0 bottom-0 w-px bg-stone-dark -translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={lineInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
              style={{ transformOrigin: 'top' }}
              className="w-full h-full bg-olive/30"
            />
          </div>

          <div className="flex flex-col gap-10 py-4">
            {journey.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="md:hidden">
          {journey.map((item, i) => (
            <MobileTimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
