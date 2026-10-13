import LessonLayout from './LessonLayout.jsx'

export default function Slide10Lesson3() {
  return (
    <LessonLayout
      n={3}
      accent="var(--sp-coral)"
      markClass="mark--coral"
      headline={{ pre: '', key: 'Ask', tail: 'for feedback early.' }}
      example="I shared it rough and early. It didn’t need to be perfect — putting the work in front of people is what turned my guesses into real feedback. Build in the open."
    />
  )
}
