import { motion } from 'framer-motion'
import SlideShell from '../components/SlideShell.jsx'
import { EASE } from '../components/motion.js'

/* Left-to-right process. Supports the "started in chat, moved to build" line. */
const steps = [
  {
    kicker: 'Think',
    title: 'Chat',
    sub: 'Shape the idea, pressure-test the data model, sketch the questions.',
    accent: 'var(--sp-blue)',
  },
  {
    kicker: 'Build',
    title: 'Claude in VS Code',
    sub: 'Wire up the queries, the views, the real dashboard.',
    accent: 'var(--sp-yellow)',
  },
]

export default function Slide05Process() {
  return (
    <SlideShell variant="soft" brandLabel="THE PROCESS">
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <p className="eyebrow" style={{ marginBottom: 18 }}>How it came together</p>
        <h2 className="headline" style={{ fontSize: 58, maxWidth: 760 }}>
          Started in chat. Moved to build.
        </h2>

        <div style={{ display: 'flex', alignItems: 'center', gap: 28, margin: 'auto 0' }}>
          {steps.map((s, i) => (
            <div key={s.title} style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.4, duration: 0.7, ease: EASE }}
                style={{
                  width: 380,
                  background: 'var(--sp-paper)',
                  border: '1.5px solid var(--sp-line)',
                  borderRadius: 20,
                  padding: '34px 34px 38px',
                  boxShadow: '0 24px 48px -30px rgba(20,51,43,0.3)',
                }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--sp-green)',
                    background: s.accent,
                    padding: '5px 12px',
                    borderRadius: 999,
                  }}
                >
                  {s.kicker}
                </div>
                <div style={{ fontSize: 38, fontWeight: 700, marginTop: 22, letterSpacing: '-0.02em' }}>
                  {s.title}
                </div>
                <div style={{ fontSize: 19, color: 'var(--sp-green-soft)', marginTop: 12, lineHeight: 1.45 }}>
                  {s.sub}
                </div>
              </motion.div>

              {i < steps.length - 1 && (
                <motion.svg
                  width="60"
                  height="24"
                  viewBox="0 0 60 24"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.4 + 0.25, duration: 0.6, ease: EASE }}
                >
                  <path
                    d="M2 12h50m0 0l-10-8m10 8l-10 8"
                    fill="none"
                    stroke="var(--sp-green)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  )
}
