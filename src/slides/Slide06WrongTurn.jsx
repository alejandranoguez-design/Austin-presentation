import { motion } from 'framer-motion'
import SlideShell from '../components/SlideShell.jsx'
import { EASE } from '../components/motion.js'

/* The credibility moment: a real detour, not a frictionless story. */
export default function Slide06WrongTurn() {
  return (
    <SlideShell variant="paper" brandLabel="THE WRONG TURN">
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <p className="eyebrow" style={{ marginBottom: 18 }}>Where I almost went wrong</p>
        <h2 className="headline" style={{ fontSize: 56, maxWidth: 820 }}>
          My first instinct was the wrong source.
        </h2>

        <div style={{ display: 'flex', alignItems: 'center', gap: 40, margin: 'auto 0' }}>
          {/* Linear — crossed out */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: EASE }}
            style={{ position: 'relative', width: 340 }}
          >
            <div
              style={{
                width: '100%',
                padding: '40px 34px',
                borderRadius: 20,
                border: '1.5px solid var(--sp-line)',
                background: 'var(--sp-paper-soft)',
                opacity: 0.7,
              }}
            >
              <div style={{ fontSize: 40, fontWeight: 700 }}>Linear</div>
              <div style={{ fontSize: 19, color: 'var(--sp-muted)', marginTop: 10 }}>
                Tracks the tasks
              </div>
            </div>
            {/* strike-through */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.5, ease: EASE }}
              style={{
                position: 'absolute',
                top: '50%',
                left: 16,
                right: 16,
                height: 4,
                borderRadius: 2,
                background: 'var(--sp-coral)',
                transformOrigin: 'left center',
              }}
            />
          </motion.div>

          <motion.svg
            width="64"
            height="24"
            viewBox="0 0 64 24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <path d="M2 12h54m0 0l-10-8m10 8l-10 8" fill="none" stroke="var(--sp-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>

          {/* Snowflake — the truth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7, ease: EASE }}
            style={{
              width: 360,
              padding: '40px 34px',
              borderRadius: 20,
              border: '2px solid var(--sp-green)',
              background: 'var(--sp-paper)',
              boxShadow: '0 28px 56px -30px rgba(20,51,43,0.4)',
            }}
          >
            <div style={{ fontSize: 40, fontWeight: 700 }}>Snowflake</div>
            <div style={{ fontSize: 19, color: 'var(--sp-green-soft)', marginTop: 10 }}>
              Held the truth
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          style={{ fontSize: 28, fontWeight: 600, marginTop: 4 }}
        >
          Linear tracks tasks. <span className="mark mark--blue">Snowflake had the truth.</span>
        </motion.p>
      </div>
    </SlideShell>
  )
}
