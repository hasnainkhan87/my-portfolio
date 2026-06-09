import FadeUp from './FadeUp'

export default function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="mb-14">
      <FadeUp>
        <p className="section-label mb-3">{label}</p>
      </FadeUp>
      <FadeUp delay={0.08}>
        <h2 className="section-title mb-4">{title}</h2>
      </FadeUp>
      <FadeUp delay={0.12}>
        <div className="divider" />
      </FadeUp>
      {subtitle && (
        <FadeUp delay={0.16}>
          <p className="mt-4 font-body text-muted text-base leading-relaxed max-w-xl">{subtitle}</p>
        </FadeUp>
      )}
    </div>
  )
}
