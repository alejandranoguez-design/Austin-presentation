import { motion } from 'framer-motion'
import { EASE } from '../components/motion.js'

/* 11 — The closing. The slide people photograph. Dark, spare, one line. */
export default function Slide11Closing() {
  return (
    <motion.div
      className="slide"
      style={{
        background: '#0a0f0d',
        color: '#fff',
        justifyContent: 'center',
        padding: '92px 120px',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <motion.h2
        className="display"
        style={{ fontSize: 84, maxWidth: 1040, lineHeight: 1.1, letterSpacing: '-0.03em' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.9, ease: EASE }}
      >
        <span style={{ color: 'var(--sp-yellow)' }}>Understand</span> the problem.
        <br />
        <span style={{ color: 'var(--sp-yellow)' }}>Iterate</span> as you build.
        <br />
        <span style={{ color: 'var(--sp-yellow)' }}>Ask</span> for feedback early.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        style={{ marginTop: 56, display: 'flex', alignItems: 'center', gap: 14 }}
      >
        <svg width="24" height="24" viewBox="0 0 32 32"><path d="M7 24C7 15.2 13.9 8.4 24 8c.3 6.2-1.6 11-5.3 14-3 2.4-7 2.9-11.7 2z" fill="rgba(255,255,255,0.9)" /><circle cx="22.5" cy="9.5" r="3.2" fill="var(--sp-yellow)" /></svg>
        <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.6)' }}>
          Thank you · Ale Noguez
        </span>
      </motion.div>
    </motion.div>
  )
}
