// Shared, intentionally restrained motion presets.
// Slow, soft, no bounce — appropriate for a senior/director audience.

export const EASE = [0.22, 1, 0.36, 1]

export const stagger = (staggerChildren = 0.12, delayChildren = 0.15) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
})

export const riseItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
}

export const fadeItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
}

export const scaleItem = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: EASE },
  },
}
