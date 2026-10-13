import LessonLayout from './LessonLayout.jsx'

export default function Slide08Lesson1() {
  return (
    <LessonLayout
      n={1}
      accent="var(--sp-yellow)"
      markClass="mark--yellow"
      headline={{ key: 'problem', tail: 'before you build.' }}
      example="The detour proved it — I started in Linear, but the truth lived in Snowflake. Finding that early changed everything downstream."
    />
  )
}
