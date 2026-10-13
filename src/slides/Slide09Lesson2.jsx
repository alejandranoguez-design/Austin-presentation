import LessonLayout from './LessonLayout.jsx'

export default function Slide09Lesson2() {
  return (
    <LessonLayout
      n={2}
      accent="var(--sp-blue)"
      markClass="mark--blue"
      headline={{ key: 'work', tail: 'while you build.' }}
      example="Building in chat, then VS Code, meant I could watch it take shape — and course-correct in minutes, not weeks."
    />
  )
}
