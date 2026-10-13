/**
 * SimplePractice-style sprout/leaf mark.
 * Uses currentColor for the leaf and the brand yellow for the seed dot,
 * so it adapts to whatever slide theme it sits on.
 */
export default function BrandMark({ size = 26, showWordmark = true, label = 'OVERVIEW' }) {
  return (
    <div className="brand-mark">
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M7 24C7 15.2 13.9 8.4 24 8c.3 6.2-1.6 11-5.3 14-3 2.4-7 2.9-11.7 2z"
          fill="currentColor"
        />
        <circle cx="22.5" cy="9.5" r="3.2" fill="var(--sp-yellow)" />
      </svg>
      {showWordmark && <span className="wordmark">{label}</span>}
    </div>
  )
}
