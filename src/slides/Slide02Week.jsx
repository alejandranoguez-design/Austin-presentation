import { motion } from 'framer-motion'
import SlideShell from '../components/SlideShell.jsx'
import { EASE } from '../components/motion.js'

/* Three promo touchpoints landing on one person across one week. */
const touches = [
  {
    day: 'Monday',
    channel: 'Email',
    copy: '“50% off your first month”',
    accent: 'var(--sp-blue)',
    icon: (
      <path
        d="M3 5h18v14H3zM3 6l9 7 9-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    ),
  },
  {
    day: 'Tuesday',
    channel: 'In-app',
    copy: '“Upgrade now — limited time”',
    accent: 'var(--sp-yellow)',
    icon: (
      <path
        d="M12 3a6 6 0 0 1 6 6v4l2 3H4l2-3V9a6 6 0 0 1 6-6zM9.5 20a2.5 2.5 0 0 0 5 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    ),
  },
  {
    day: 'Next week',
    channel: 'Care Aide',
    copy: '“Have you tried our new plan?”',
    accent: 'var(--sp-coral)',
    icon: (
      <path
        d="M4 5h16v11H9l-4 4V5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    ),
  },
]

function Card({ t, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: (i - 1) * 2.2 }}
      transition={{ delay: 0.5 + i * 0.5, duration: 0.7, ease: EASE }}
      style={{
        position: 'absolute',
        top: 24 + i * 118,
        left: i * 30,
        width: 388,
        background: 'var(--sp-paper)',
        border: '1px solid var(--sp-line)',
        borderRadius: 16,
        padding: '18px 20px',
        display: 'flex',
        gap: 16,
        alignItems: 'center',
        boxShadow: '0 24px 48px -24px rgba(20,51,43,0.35)',
      }}
    >
      <div
        style={{
          flex: '0 0 auto',
          width: 46,
          height: 46,
          borderRadius: 12,
          background: t.accent,
          color: 'var(--sp-green)',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24">{t.icon}</svg>
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sp-muted)' }}>
          {t.day} · {t.channel}
        </div>
        <div style={{ fontSize: 20, fontWeight: 600, marginTop: 4 }}>{t.copy}</div>
      </div>
    </motion.div>
  )
}

export default function Slide02Week() {
  return (
    <SlideShell variant="soft" brandLabel="THE STORY">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, flex: 1, alignItems: 'center' }}>
        <div>
          <p className="eyebrow" style={{ marginBottom: 20 }}>One user · one week</p>
          <h2 className="headline" style={{ fontSize: 58, maxWidth: 540 }}>
            One user,
            <br />
            <span className="mark mark--coral">several promos.</span>
          </h2>
          <p className="subhead" style={{ marginTop: 26, maxWidth: 470 }}>
            How can we be sure a single user isn’t seeing a flood of promotions in
            a short window? Do we even have visibility into every promo one person
            is getting?
          </p>
        </div>

        {/* stacked cards */}
        <div style={{ position: 'relative', height: 460 }}>
          {touches.map((t, i) => (
            <Card key={t.channel} t={t} i={i} />
          ))}
        </div>
      </div>
    </SlideShell>
  )
}
