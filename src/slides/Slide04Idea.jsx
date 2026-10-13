import { motion } from 'framer-motion'
import SlideShell from '../components/SlideShell.jsx'
import { EASE } from '../components/motion.js'

/* The turn: problem → solution. One line, lots of air, a single unifying mark. */
export default function Slide04Idea() {
  return (
    <SlideShell variant="green" brandLabel="THE IDEA">
      <div style={{ margin: 'auto', textAlign: 'center', maxWidth: 980 }}>
        {/* unifying icon: scattered dots pulled into one ring */}
        <motion.svg
          width="92"
          height="92"
          viewBox="0 0 92 92"
          style={{ marginBottom: 44 }}
          initial="hidden"
          animate="show"
        >
          <motion.circle
            cx="46"
            cy="46"
            r="26"
            fill="none"
            stroke="var(--sp-yellow)"
            strokeWidth="3"
            variants={{ hidden: { pathLength: 0, opacity: 0 }, show: { pathLength: 1, opacity: 1 } }}
            transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          />
          {[
            [12, 12], [80, 16], [14, 78], [82, 74],
          ].map(([cx, cy], i) => (
            <motion.circle
              key={i}
              r="4.5"
              fill="var(--sp-yellow)"
              initial={{ cx, cy, opacity: 0 }}
              animate={{ cx: 46, cy: 46, opacity: [0, 1, 0] }}
              transition={{ delay: 0.5 + i * 0.12, duration: 1, ease: EASE }}
            />
          ))}
          <motion.circle
            cx="46"
            cy="46"
            r="7"
            fill="var(--sp-yellow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5, ease: EASE }}
            style={{ transformOrigin: '46px 46px' }}
          />
        </motion.svg>

        <motion.h2
          className="display"
          style={{ fontSize: 76, lineHeight: 1.08 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: EASE }}
        >
          One place to see every promotion —
          <br />
          <span style={{ color: 'var(--sp-yellow)' }}>live or planned.</span>
        </motion.h2>
      </div>
    </SlideShell>
  )
}
