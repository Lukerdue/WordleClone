import React from 'react';
import Letter from './Letter';
import '../style/Board.css';

const WORD_LENGTH = 5
const Board = ({ attempts, currentGuess }) => {
  return (
    <div className="board">
      {attempts.map((guess, index) => (
        <div className="row" key={index}>
          {guess.split('').map((letter, idx) => (
            <Letter letter={letter} key={idx} />
          ))}
        </div>
      ))}
      <div className="row">
        {currentGuess.split('').map((letter, idx) => (
          <Letter letter={letter} key={idx} />
        ))}
        {Array(WORD_LENGTH - currentGuess.length).fill('').map((_, idx) => (
          <Letter letter="" key={idx + currentGuess.length} />
        ))}
      </div>
    </div>
  );
};

export default Board;