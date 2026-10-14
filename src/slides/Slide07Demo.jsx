import { motion } from 'framer-motion'
import { EASE } from '../components/motion.js'
import shot from '../assets/dashboard.webp'

/*
 * 7 — The dashboard. Ideally a LIVE demo; the screenshot is the backup.
 * The "Open live demo" button opens the running app. Set LIVE_DEMO_URL to change it.
 * Set SCREENSHOT to null to fall back to the mock dashboard.
 */
const SCREENSHOT = shot
const LIVE_DEMO_URL = 'https://drive.google.com/file/d/1FtW6AwLqe7uYp-jmducm1GG0H6YEerN8/view?usp=sharing'

const rows = [
  { promo: 'New-year upgrade', channel: 'Email · Iterable', status: 'Live', when: 'Now → Jan 31', tone: 'var(--sp-blue)' },
  { promo: 'In-app plan nudge', channel: 'In-app · Appcues', status: 'Live', when: 'Now → Feb 14', tone: 'var(--sp-yellow)' },
  { promo: 'Care Aide offer', channel: 'Care Aide', status: 'Planned', when: 'Feb 3', tone: 'var(--sp-coral)' },
  { promo: 'Winback — lapsed', channel: 'Email · Iterable', status: 'Planned', when: 'Feb 10', tone: 'var(--sp-blue)' },
  { promo: 'Referral boost', channel: 'In-product', status: 'Draft', when: 'Feb 24', tone: 'var(--sp-green-soft)' },
]

function MockDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--sp-paper)' }}>
      {/* app header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '26px 40px', borderBottom: '1px solid var(--sp-line)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <svg width="26" height="26" viewBox="0 0 32 32"><path d="M7 24C7 15.2 13.9 8.4 24 8c.3 6.2-1.6 11-5.3 14-3 2.4-7 2.9-11.7 2z" fill="var(--sp-green)" /><circle cx="22.5" cy="9.5" r="3.2" fill="var(--sp-yellow)" /></svg>
          <span style={{ fontWeight: 700, fontSize: 19 }}>Promotions Radar</span>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          {['All channels', 'Live', 'Planned'].map((t, i) => (
            <span key={t} style={{ fontSize: 14, fontWeight: 600, padding: '8px 16px', borderRadius: 999, background: i === 0 ? 'var(--sp-green)' : 'var(--sp-paper-soft)', color: i === 0 ? '#fff' : 'var(--sp-green-soft)', border: i === 0 ? 'none' : '1px solid var(--sp-line)' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* stat row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, padding: '26px 40px 8px' }}>
        {[['12', 'Active this week'], ['3', 'Users hit 2+ times'], ['5', 'Planned next 30 days']].map(([n, l]) => (
          <div key={l} style={{ background: 'var(--sp-paper-soft)', border: '1px solid var(--sp-line)', borderRadius: 16, padding: '20px 24px' }}>
            <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.02em' }}>{n}</div>
            <div style={{ fontSize: 15, color: 'var(--sp-muted)', marginTop: 2 }}>{l}</div>
          </div>
        ))}
      </div>

      {/* table */}
      <div style={{ padding: '14px 40px 32px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.2fr 0.8fr 1fr', padding: '0 20px 12px', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sp-muted)' }}>
          <span>Promotion</span><span>Channel</span><span>Status</span><span>Window</span>
        </div>
        {rows.map((r) => (
          <div key={r.promo} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.2fr 0.8fr 1fr', alignItems: 'center', padding: '16px 20px', borderTop: '1px solid var(--sp-line)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 18, fontWeight: 600 }}>
              <i style={{ width: 10, height: 10, borderRadius: 3, background: r.tone }} />{r.promo}
            </span>
            <span style={{ fontSize: 16, color: 'var(--sp-green-soft)' }}>{r.channel}</span>
            <span><span style={{ fontSize: 14, fontWeight: 600, padding: '5px 12px', borderRadius: 999, background: r.status === 'Live' ? 'var(--sp-green)' : r.status === 'Planned' ? 'var(--sp-paper-soft)' : 'transparent', color: r.status === 'Live' ? '#fff' : 'var(--sp-green-soft)', border: r.status !== 'Live' ? '1px solid var(--sp-line)' : 'none' }}>{r.status}</span></span>
            <span style={{ fontSize: 16, color: 'var(--sp-green-soft)' }}>{r.when}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Slide07Demo() {
  return (
    <motion.div
      className="slide"
      style={{ padding: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      {SCREENSHOT ? (
        <div style={{ position: 'absolute', inset: 0, background: 'var(--sp-green)', display: 'grid', placeItems: 'center' }}>
          <img
            src={SCREENSHOT}
            alt="Promotions dashboard"
            style={{
              height: 520,
              width: 'auto',
              maxWidth: '86%',
              display: 'block',
              borderRadius: 20,
              boxShadow: '0 40px 80px -30px rgba(0,0,0,0.6)',
            }}
          />
        </div>
      ) : (
        <MockDashboard />
      )}

      {/* click-through to the running app */}
      <a
        href={LIVE_DEMO_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'absolute',
          bottom: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: '0.01em',
          color: 'var(--sp-green)',
          background: 'var(--sp-yellow)',
          padding: '16px 28px',
          borderRadius: 999,
          textDecoration: 'none',
          boxShadow: '0 18px 36px -12px rgba(0,0,0,0.55), 0 0 0 4px rgba(255,199,44,0.25)',
          zIndex: 10,
        }}
      >
        <svg width="14" height="16" viewBox="0 0 14 16" aria-hidden="true">
          <path d="M1 1.5v13l11-6.5z" fill="var(--sp-green)" />
        </svg>
        Open video of the dashboard
      </a>
    </motion.div>
  )
}
