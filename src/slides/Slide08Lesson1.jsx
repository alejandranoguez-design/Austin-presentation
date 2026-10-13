import LessonLayout from './LessonLayout.jsx'

export default function Slide08Lesson1() {
  return (
    <LessonLayout
      n={1}
      accent="var(--sp-yellow)"
      markClass="mark--yellow"
      headline={{ pre: '', key: 'Understand', tail: 'the problem first.' }}
      example="Don’t let AI come up with a solution if you don’t understand the real problem."
    />
  )
}
