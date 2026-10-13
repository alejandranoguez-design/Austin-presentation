import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { slides } from '../slides/index.js'

const BASE_W = 1280
const BASE_H = 720

export default function Deck() {
  const [index, setIndex] = useState(() => {
    const fromHash = Number(window.location.hash.replace('#', ''))
    return Number.isFinite(fromHash) && fromHash > 0 ? Math.min(fromHash - 1, slides.length - 1) : 0
  })
  const [scale, setScale] = useState(1)
  const [showHint, setShowHint] = useState(true)
  const stageRef = useRef(null)

  const go = useCallback((next) => {
    setIndex((i) => {
      const clamped = Math.max(0, Math.min(slides.length - 1, next))
      window.history.replaceState(null, '', `#${clamped + 1}`)
      return clamped
    })
  }, [])

  const next = useCallback(() => go(indexRef.current + 1), [go])
  const prev = useCallback(() => go(indexRef.current - 1), [go])

  // keep a ref so keyboard handlers always see the latest index
  const indexRef = useRef(index)
  useEffect(() => {
    indexRef.current = index
  }, [index])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          e.preventDefault()
          next()
          break
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault()
          prev()
          break
        case 'Home':
          e.preventDefault()
          go(0)
          break
        case 'End':
          e.preventDefault()
          go(slides.length - 1)
          break
        case 'f':
        case 'F':
          if (document.fullscreenElement) document.exitFullscreen()
          else document.documentElement.requestFullscreen?.()
          break
        default:
          break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, go])

  // Fit the 1280x720 stage into the viewport, preserving aspect ratio
  useLayoutEffect(() => {
    const fit = () => {
      const pad = 0.92 // leave a little breathing room around the deck
      const s = Math.min(
        (window.innerWidth * pad) / BASE_W,
        (window.innerHeight * pad) / BASE_H,
      )
      setScale(s)
    }
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [])

  // Auto-hide the nav hint
  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 4200)
    return () => clearTimeout(t)
  }, [])

  const Current = slides[index].Component
  const progress = ((index + 1) / slides.length) * 100

  return (
    <div className="deck">
      <div
        ref={stageRef}
        className="stage"
        style={{ transform: `scale(${scale})` }}
      >
        <div className="slide-frame">
          <div className="chrome-top">
            <div className="progress" style={{ width: `${progress}%` }} />
          </div>

          <AnimatePresence mode="wait">
            <Current key={index} />
          </AnimatePresence>

          <div className="slide-no">
            {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Invisible click zones for presenting with a mouse / clicker */}
      <button className="click-zone click-zone--prev" aria-label="Previous slide" onClick={prev} />
      <button className="click-zone click-zone--next" aria-label="Next slide" onClick={next} />

      <div className="nav-hint" style={{ opacity: showHint ? 1 : 0 }}>
        <span className="kbd">←</span>
        <span className="kbd">→</span>
        <span>to navigate</span>
        <span style={{ margin: '0 6px', opacity: 0.4 }}>·</span>
        <span className="kbd">F</span>
        <span>fullscreen</span>
      </div>
    </div>
  )
}
