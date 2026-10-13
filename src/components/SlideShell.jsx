import { motion } from 'framer-motion'
import BrandMark from './BrandMark.jsx'

/**
 * Wraps every slide. Provides the themed surface, optional brand mark,
 * and a shared content-entrance animation. `variant` picks the surface:
 * 'paper' | 'soft' | 'green' | 'yellow'.
 */
export default function SlideShell({
  variant = 'paper',
  showBrand = true,
  brandLabel = '',
  children,
}) {
  return (
    <div className={`slide slide--${variant}`}>
      {showBrand && (
        <BrandMark showWordmark={Boolean(brandLabel)} label={brandLabel} />
      )}
      <motion.div
        style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}
