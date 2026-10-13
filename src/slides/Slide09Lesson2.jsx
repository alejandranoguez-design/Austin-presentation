import LessonLayout from './LessonLayout.jsx'

export default function Slide09Lesson2() {
  return (
    <LessonLayout
      n={2}
      accent="var(--sp-blue)"
      markClass="mark--blue"
      headline={{ pre: '', key: 'Iterate', tail: 'as you build.' }}
      example="Seeing it take shape as I built meant I adjusted as I went, instead of discovering problems at the end."
    />
  )
}
