import { motion } from 'framer-motion'
import SlideShell from '../components/SlideShell.jsx'
import { EASE } from '../components/motion.js'

/*
 * 6 — Finding the source, as a node-graph (shares slide 3's visual language).
 * The question forks into two real sources: Linear (faded, secondary) holds
 * tasks & planned projects; Snowflake (solid, primary) holds the Iterable data.
 * Reveals run strictly in reading order so it narrates beat by beat:
 *   question → Linear → tasks pill → Snowflake → data pill.
 */
const rowColors = ['var(--sp-yellow)', 'var(--sp-blue)', 'var(--sp-coral)']

export default function Slide06WrongTurn() {
  return (
    <SlideShell variant="paper" brandLabel="FINDING THE SOURCE">
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
        <p className="eyebrow" style={{ marginBottom: 14 }}>The first real decision</p>
        <h2 className="headline" style={{ fontSize: 48, maxWidth: 820 }}>
          Where should I pull the data from?
        </h2>

        <div style={{ flex: 1, minHeight: 0, marginTop: 4 }}>
          <svg
            viewBox="0 0 1120 420"
            preserveAspectRatio="xMidYMid meet"
            style={{ display: 'block', width: '100%', height: '100%', overflow: 'visible', fontFamily: 'var(--font-sans)' }}
          >
            {/* 1 · start node — the question */}
            <motion.g
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7, ease: EASE }}
            >
              <rect x="10" y="170" width="250" height="72" rx="18" fill="var(--sp-paper)" stroke="var(--sp-line)" strokeWidth="1.5" />
              <text x="135" y="201" textAnchor="middle" fontSize="20" fontWeight="600" fill="var(--sp-green)">Where does promo</text>
              <text x="135" y="226" textAnchor="middle" fontSize="20" fontWeight="600" fill="var(--sp-green)">data live?</text>
            </motion.g>

            {/* 2 · faded path up to Linear */}
            <motion.path
              d="M260 206 C 330 206, 350 100, 432 100"
              fill="none"
              stroke="var(--sp-green-soft)"
              strokeWidth="2.5"
              strokeDasharray="2 9"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 1.0, duration: 0.8, ease: EASE }}
            />

            {/* 3 · Linear card (faded, secondary source) */}
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.55, y: 0 }}
              transition={{ delay: 1.6, duration: 0.7, ease: EASE }}
            >
              <rect x="440" y="36" width="250" height="132" rx="18" fill="var(--sp-paper-soft)" stroke="var(--sp-line)" strokeWidth="1.5" />
              <text x="468" y="78" fontSize="27" fontWeight="700" fill="var(--sp-green-soft)">Linear</text>
              {[106, 136].map((ry) => (
                <g key={ry}>
                  <rect x="468" y={ry - 11} width="15" height="15" rx="4" fill="none" stroke="var(--sp-muted)" strokeWidth="1.5" />
                  <rect x="492" y={ry - 5} width="150" height="9" rx="4" fill="var(--sp-line)" />
                </g>
              ))}
            </motion.g>

            {/* 4 · Linear → tasks connector (drawn, so it clearly links) */}
            <motion.path
              d="M690 102 L748 102 M748 102 l-9 -5 M748 102 l-9 5"
              fill="none"
              stroke="var(--sp-green-soft)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ delay: 2.4, duration: 0.6, ease: EASE }}
            />

            {/* 5 · tasks pill */}
            <motion.g
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 0.75, x: 0 }}
              transition={{ delay: 2.9, duration: 0.6, ease: EASE }}
            >
              <rect x="752" y="70" width="332" height="64" rx="16" fill="var(--sp-paper-soft)" stroke="var(--sp-line)" strokeWidth="1.5" />
              <text x="778" y="107" fontSize="19" fontWeight="600" fill="var(--sp-green-soft)">Tasks and planned projects</text>
            </motion.g>

            {/* 6 · redirect path down to Snowflake */}
            <motion.path
              d="M260 206 C 350 206, 360 300, 440 300"
              fill="none"
              stroke="var(--sp-green)"
              strokeOpacity="0.7"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 3.8, duration: 0.9, ease: EASE }}
            />

            {/* 7 · Snowflake card (primary source) */}
            <motion.g
              style={{ transformBox: 'fill-box', transformOrigin: 'center', filter: 'drop-shadow(0 22px 30px rgba(20,51,43,0.16))' }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 4.5, duration: 0.7, ease: EASE }}
            >
              <rect x="440" y="232" width="275" height="150" rx="18" fill="var(--sp-paper)" stroke="var(--sp-green)" strokeWidth="2" />
              <text x="468" y="272" fontSize="29" fontWeight="700" fill="var(--sp-green)">Snowflake</text>
              {[302, 330, 358].map((ry, i) => (
                <g key={ry}>
                  <circle cx="474" cy={ry} r="5" fill={rowColors[i]} />
                  <rect x="490" y={ry - 5} width="150" height="9" rx="4" fill="var(--sp-line)" />
                </g>
              ))}
            </motion.g>

            {/* 8 · Snowflake → data connector */}
            <motion.path
              d="M715 300 L790 300 M790 300 l-9 -5 M790 300 l-9 5"
              fill="none"
              stroke="var(--sp-green)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 5.4, duration: 0.6, ease: EASE }}
            />

            {/* 9 · data payoff pill */}
            <motion.g
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 5.9, duration: 0.6, ease: EASE }}
            >
              <rect x="800" y="268" width="196" height="64" rx="16" fill="var(--sp-paper)" stroke="var(--sp-green)" strokeWidth="1.5" />
              <circle cx="830" cy="300" r="12" fill="var(--sp-green)" />
              <path d="M824 300 l4 4 l8 -8" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <text x="852" y="307" fontSize="19" fontWeight="600" fill="var(--sp-green)">Iterable data</text>
            </motion.g>
          </svg>
        </div>
      </div>
    </SlideShell>
  )
}
