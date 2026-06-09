import { skills } from '../../data'
import SectionHeader from '../ui/SectionHeader'
import FadeUp from '../ui/FadeUp'

const categoryIcons = {
  'Programming Languages': '{ }',
  'Web Development': '</>',
  'Databases': '⌗',
  'Tools & Platforms': '⚙',
  'AI & Emerging Tech': '◈',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-stone">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Technical Profile"
          title="Skills & Expertise"
          subtitle="The tools I work with and the technologies I'm actively building on."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <div className="bg-ivory border border-stone-dark p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-body text-sm text-olive font-mono font-semibold">
                    {categoryIcons[group.category] || '·'}
                  </span>
                  <h3 className="font-body text-sm font-semibold text-charcoal tracking-wide">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, j) => (
                    <span
                      key={j}
                      className="font-body text-sm text-charcoal bg-stone border border-stone-dark px-3 py-1.5 hover:border-olive/40 hover:text-olive transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Philosophy note */}
        <FadeUp delay={0.3}>
          <div className="mt-10 border-l-2 border-olive pl-5 py-2">
            <p className="font-body text-sm text-muted italic leading-relaxed max-w-2xl">
              "I enjoy building software that solves real problems, leading communities that create opportunities for others, 
              and exploring how Generative AI can make technology more accessible and impactful."
            </p>
            <p className="font-body text-xs text-olive mt-2 font-medium">— Mohammad Hasnain Khan</p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
