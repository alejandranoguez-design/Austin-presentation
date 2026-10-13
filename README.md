# See What You're Building — keynote deck

An interactive, browser-based presentation deck. Built with React + Vite +
Framer Motion. Brand look follows SimplePractice (deep pine green, signature
yellow, blue/coral highlights, generous white space). Animations are kept
subtle and slow — appropriate for a senior / director audience.

## Run it

```bash
npm install
npm run dev      # dev server
npm run build    # production build into dist/
npm run preview  # preview the build
```

## Present it

- **→ / Space / PageDown** — next slide
- **← / PageUp** — previous slide
- **Home / End** — jump to first / last slide
- **F** — toggle fullscreen
- Click the left / right thirds of the screen to step (good with a clicker)
- The URL hash tracks the slide (`#7`), so you can deep-link / refresh in place

## Structure — one file per slide

Everything lives in `src/`.

```
src/
  App.jsx                  entry
  components/
    Deck.jsx               navigation, scaling, progress, transitions
    SlideShell.jsx         themed surface + shared entrance animation
    BrandMark.jsx          the sprout/leaf logo mark
    motion.js              shared (restrained) animation presets
  slides/
    index.js               << slide order lives here — reorder/add here
    Slide01Title.jsx       1  Title
    Slide02Week.jsx        2  The user's week (stacking notifications)
    Slide03Mess.jsx        3  The mess (scattered tools, broken lines)
    Slide04Idea.jsx        4  The idea (one line, unifying mark)
    Slide05Process.jsx     5  How I built it (Chat → VS Code)
    Slide06WrongTurn.jsx   6  The wrong turn (Linear → Snowflake)
    Slide07Demo.jsx        7  The dashboard (mock / screenshot / live)
    Slide08Lesson1.jsx     8  "See the problem before you build."
    Slide09Lesson2.jsx     9  "See the work while you build."
    Slide10Lesson3.jsx    10  "See what it shows you."
    Slide11Closing.jsx    11  The closing (dark, one line)
    LessonLayout.jsx       shared layout for slides 8–10
  styles/
    theme.css              brand tokens (colors, fonts, motion)
    global.css             deck chrome + shared slide typography
```

### Editing

- **Copy / text:** open the matching `SlideXX*.jsx` and edit the strings.
- **Placeholders to replace:** `Your Name` / `Your Role` on slides 1 and 11.
- **Slide 7 (demo):** it renders a clean mock dashboard by default. To use a
  real screenshot, drop an image in `src/assets/` and set `SCREENSHOT` at the
  top of `Slide07Demo.jsx`. For a true live demo, present the real app in this
  slide's place — the mock stays as your backup.
- **Reorder / add / remove slides:** edit the `slides` array in
  `src/slides/index.js`. Order in that array = order in the deck.
- **Brand colors & fonts:** `src/styles/theme.css`.
- **Highlight marker:** wrap text in `<span className="mark mark--yellow">` (or
  `--blue` / `--coral`) to get the brand highlighter effect.
