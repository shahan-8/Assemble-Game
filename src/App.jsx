import { useState } from "react";
import { clsx } from "clsx";
import { languages } from "./languages";

export default function AssemblyEndgame() {
  const languageData = [
    "javaScript",
    "python",
    "string",
    "function",
    "tailwind",
    "bootstrap",
    "django",
    "nodeJs",
  ];

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [currentWord, setCurrentWord] = useState(
    languageData[Math.floor(Math.random() * languages.length)],
  );

  const wrongGuessCount = guessedLetters.filter(
    (latter) => !currentWord.includes(latter)).length;

  const isGameLost = wrongGuessCount >= languages.length - 1;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameOver = isGameLost || isGameWon;
  

  const addGuessedLetter = (letter) => {
    setGuessedLetters((prev) =>
      prev.includes(letter) ? prev : [...prev, letter],
    );
  };

  //letterElements
  const letterElements = currentWord.split("").map((word, index) => {
    const isGuessed = guessedLetters.includes(word);

    return (
      isGuessed && (
        <span key={index}>
          {guessedLetters.includes(word) ? word.toUpperCase() : ""}
        </span>
      )
    );
  });

  //letterElementsEnd

  //keyboardElements

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const keyboardElements = alphabet.split("").map((letter, index) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);

    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        className={className}
        key={index}
        onClick={() => addGuessedLetter(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  //keyboardElementsEND

  //languageElements
  const languageElements = languages.map((lang, index) => {
    const isLanguageLost = index < wrongGuessCount;

    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    const className = clsx("chip", isLanguageLost && "lost");

    return (
      <span className={className} key={lang.name} style={styles}>
        {lang.name}
      </span>
    );
  });
  //languageElementsEND

  //renderGameStatus
  const gameStatusClass = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
  });

  const renderGameStatus = () => {
    if (!isGameOver) {
      return null;
    }
    if (isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      );
    } else {
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      );
    }
  };
  //renderGameStatusEND
  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className={gameStatusClass}>{renderGameStatus()}</section>

      <section className="language-chips">{languageElements}</section>
      <section className="word">{letterElements}</section>
      <section className="keyboard">{keyboardElements}</section>
      {isGameOver && <button className="new-game">New Game</button>}
    </main>
  );
}
