# Assembly: Endgame

Assembly: Endgame is a word-guessing game built with React. Players guess a hidden programming-related word one letter at a time while trying to avoid running out of attempts.

## How to Play

1. A programming-related word is selected.
2. Choose letters using the on-screen keyboard.
3. Correct guesses reveal matching letters.
4. Incorrect guesses count against the remaining attempts.
5. Guess the complete word before the game ends.

## Features

- Random programming-themed words
- Interactive on-screen alphabet keyboard
- Correct and incorrect guess feedback
- Programming-language chips that reflect missed guesses
- Win and game-over states

## Tech Stack

- React 19
- JavaScript (JSX)
- Vite
- clsx for conditional class names
- Oxlint

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/shahan-8/Assemble-Game.git
cd Assemble-Game
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production Build

```bash
npm run build
npm run preview
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the production app |
| `npm run lint` | Run Oxlint |
| `npm run preview` | Preview the production build |

## What This Project Practices

- React state with `useState`
- Rendering lists with `map()`
- Conditional rendering
- Derived state and array methods
- Event handling
- Conditional CSS class names

## Author

Built by [Shahan](https://github.com/shahan-8).