import { motion } from 'framer-motion'
import SlideShell from '../components/SlideShell.jsx'
import { stagger, riseItem, EASE } from '../components/motion.js'

/**
 * 1 — Title. Plants the idea before a word is spoken.
 * Edit the title, subtitle, and presenter block below.
 */
export default function Slide01Title() {
  return (
    <SlideShell variant="paper" brandLabel="">
      <motion.div
        variants={stagger(0.14, 0.2)}
        initial="hidden"
        animate="show"
        style={{ margin: 'auto 0', maxWidth: 1000 }}
      >
        <motion.p variants={riseItem} className="eyebrow" style={{ marginBottom: 28 }}>
          An internal talk
        </motion.p>

        <motion.h1
          variants={riseItem}
          className="display"
          style={{ fontSize: 82, maxWidth: 1000 }}
        >
          Internal tool for
          <br />
          <span className="mark mark--yellow">coordinating</span> promos.
        </motion.h1>

        <motion.p
          variants={riseItem}
          className="subhead"
          style={{ marginTop: 34, fontSize: 28, maxWidth: 720 }}
        >
          How one dashboard made every promotion visible — and what it taught me
          about building in the open.
        </motion.p>
      </motion.div>

      {/* Presenter footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8, ease: EASE }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          paddingTop: 20,
          borderTop: '1px solid var(--sp-line)',
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: 'var(--sp-yellow)',
          }}
        />
        <span style={{ fontSize: 20, fontWeight: 600 }}>Ale Noguez</span>
        <span style={{ fontSize: 20, color: 'var(--sp-muted)' }}>· Product Designer, SimplePractice</span>
      </motion.div>
    </SlideShell>
  )
}
