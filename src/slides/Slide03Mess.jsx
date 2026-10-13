import { motion } from 'framer-motion'
import SlideShell from '../components/SlideShell.jsx'
import { EASE } from '../components/motion.js'

/*
 * 3 — The mess. A node graph: three disconnected channels each reach the
 * user on their own path. A translucent "visibility layer" marks the gap —
 * the slide poses the question rather than answering it (that's slide 4).
 */
const sources = [
  { label: 'Appcues', cy: 66 },
  { label: 'In-product', cy: 200 },
  { label: 'Iterable', cy: 334 },
]

// cubic path from a source pill's right edge to the user node's left edge
const pathFor = (cy) => `M256 ${cy} C 540 ${cy}, 660 200, 950 200`

export default function Slide03Mess() {
  return (
    <SlideShell variant="paper" brandLabel="THE PROBLEM">
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <p className="eyebrow" style={{ marginBottom: 16 }}>Why nobody saw it coming</p>
        <h2 className="headline" style={{ fontSize: 46, maxWidth: 820 }}>
          They all reach the user — on separate paths.
        </h2>

        <div style={{ flex: 1, marginTop: 4, minHeight: 0 }}>
          <svg
            viewBox="0 0 1095 410"
            preserveAspectRatio="xMidYMid meet"
            style={{ display: 'block', width: '100%', height: '100%', overflow: 'visible' }}
          >
            {/* proposed visibility layer — translucent band the paths cross */}
            <motion.g
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 5.2, duration: 0.9, ease: EASE }}
            >
              <rect
                x="566" y="24" width="150" height="362" rx="20"
                fill="var(--sp-yellow)" fillOpacity="0.14"
                stroke="var(--sp-yellow-deep)" strokeWidth="1.5"
                strokeDasharray="2 9" strokeLinecap="round"
              />
            </motion.g>

            {/* connectors (solid — they DO reach the user, just unobserved) */}
            {sources.map((s, i) => (
              <motion.path
                key={s.label}
                id={`flow-${i}`}
                d={pathFor(s.cy)}
                fill="none"
                stroke="var(--sp-green-soft)"
                strokeOpacity="0.55"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.55 + i * 0.18, duration: 0.9, ease: EASE }}
              />
            ))}

            {/* soft data pulses travelling each line toward the user */}
            {sources.map((s, i) => {
              const begin = `${1.7 + i * 0.7}s`
              return (
                <g key={`pulse-${i}`} opacity="0">
                  <circle r="11" fill="var(--sp-yellow)" opacity="0.22" />
                  <circle r="5" fill="var(--sp-yellow)" />
                  {/* stay hidden (and off the origin) until the motion starts */}
                  <set attributeName="opacity" to="1" begin={begin} fill="freeze" />
                  <animateMotion
                    dur="2.8s"
                    begin={begin}
                    repeatCount="indefinite"
                    calcMode="spline"
                    keyPoints="0;1"
                    keyTimes="0;1"
                    keySplines="0.45 0 0.2 1"
                  >
                    <mpath href={`#flow-${i}`} />
                  </animateMotion>
                </g>
              )
            })}

            {/* user node */}
            <motion.g
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.15, duration: 0.6, ease: EASE }}
            >
              <circle cx="1004" cy="200" r="54" fill="var(--sp-paper)" stroke="var(--sp-green)" strokeWidth="2.5" />
              {/* person glyph */}
              <g transform="translate(1004 184) scale(1.4)" fill="var(--sp-green)">
                <circle cx="0" cy="-6" r="4.2" />
                <path d="M-7 7 a7 7 0 0 1 14 0 Z" />
              </g>
              <text x="1004" y="230" textAnchor="middle" fontSize="19" fontWeight="700" fill="var(--sp-green)" style={{ fontFamily: 'var(--font-sans)' }}>
                User
              </text>
            </motion.g>

            {/* source pills */}
            {sources.map((s, i) => (
              <motion.g
                key={s.label}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.15, duration: 0.6, ease: EASE }}
              >
                <rect x="20" y={s.cy - 29} width="236" height="58" rx="15" fill="var(--sp-paper)" stroke="var(--sp-line)" strokeWidth="1.5" />
                <circle cx="52" cy={s.cy} r="7" fill="var(--sp-green)" />
                <text x="74" y={s.cy + 7} fontSize="23" fontWeight="600" fill="var(--sp-green)" style={{ fontFamily: 'var(--font-sans)' }}>
                  {s.label}
                </text>
              </motion.g>
            ))}

            {/* visibility-layer label chip (on top) */}
            <motion.g
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5.5, duration: 0.6, ease: EASE }}
            >
              <rect x="556" y="6" width="170" height="34" rx="12" fill="var(--sp-green)" />
              <text x="641" y="28" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff" letterSpacing="0.08em" style={{ fontFamily: 'var(--font-sans)' }}>
                VISIBILITY LAYER?
              </text>
            </motion.g>
          </svg>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5.9, duration: 0.7, ease: EASE }}
          style={{ fontSize: 30, fontWeight: 600, marginTop: 4 }}
        >
          So how do we <span className="mark mark--yellow">see them all</span> in one place?
        </motion.p>
      </div>
    </SlideShell>
  )
}
