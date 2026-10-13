import { motion } from 'framer-motion'
import SlideShell from '../components/SlideShell.jsx'
import { EASE } from '../components/motion.js'

/* Shared layout for the three "See …" lessons so they land as a parallel set. */
export default function LessonLayout({ n, headline, example, accent = 'var(--sp-yellow)', markClass }) {
  return (
    <SlideShell variant="paper" brandLabel="WHAT I LEARNED">
      <div style={{ margin: 'auto 0', maxWidth: 1000 }}>
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 30 }}
        >
          <span style={{ fontSize: 22, fontWeight: 700, fontVariantNumeric: 'tabular-nums', color: 'var(--sp-muted)' }}>
            {String(n).padStart(2, '0')}
          </span>
          <span style={{ width: 54, height: 5, borderRadius: 3, background: accent }} />
          <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sp-muted)' }}>
            Lesson {n} of 3
          </span>
        </motion.div>

        <motion.h2
          className="display"
          style={{ fontSize: 96, maxWidth: 1040 }}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: EASE }}
        >
          {headline.pre === '' ? null : <>{headline.pre ?? 'See the'}{' '}</>}
          <span className={`mark ${markClass}`}>{headline.key}</span> {headline.tail}
        </motion.h2>

        {example && (
          <motion.p
            className="subhead"
            style={{ marginTop: 34, fontSize: 26, maxWidth: 680 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7, ease: EASE }}
          >
            {example}
          </motion.p>
        )}
      </div>
    </SlideShell>
  )
}
