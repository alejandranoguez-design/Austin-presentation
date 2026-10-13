import Slide01Title from './Slide01Title.jsx'
import Slide02Week from './Slide02Week.jsx'
import Slide03Mess from './Slide03Mess.jsx'
import Slide04Idea from './Slide04Idea.jsx'
import Slide05Process from './Slide05Process.jsx'
import Slide06WrongTurn from './Slide06WrongTurn.jsx'
import Slide07Demo from './Slide07Demo.jsx'
import Slide08Lesson1 from './Slide08Lesson1.jsx'
import Slide09Lesson2 from './Slide09Lesson2.jsx'
import Slide10Lesson3 from './Slide10Lesson3.jsx'
import Slide11Closing from './Slide11Closing.jsx'

// Order === presentation order. Add / reorder here.
export const slides = [
  { id: 'title', Component: Slide01Title },
  { id: 'week', Component: Slide02Week },
  { id: 'mess', Component: Slide03Mess },
  { id: 'idea', Component: Slide04Idea },
  { id: 'process', Component: Slide05Process },
  { id: 'wrong-turn', Component: Slide06WrongTurn },
  { id: 'demo', Component: Slide07Demo },
  { id: 'lesson-1', Component: Slide08Lesson1 },
  { id: 'lesson-2', Component: Slide09Lesson2 },
  { id: 'lesson-3', Component: Slide10Lesson3 },
  { id: 'closing', Component: Slide11Closing },
]
