import React, {useState, useEffect} from 'react';
import Letter from './Letter';
import { checkWord } from '../util/helpers';
import '../style/Board.css';

const WORD_LENGTH = 5
function Board ({currentGuess, setCurrentGuess, attempts, setAttempts, guessed, word}){
    const handleKeys = (e) => {
        if (e === 'Enter') {
          if (currentGuess.length === WORD_LENGTH) {
            setAttempts([...attempts, currentGuess]);
            console.log(checkWord(currentGuess, word));
            setCurrentGuess('');
          }
        } else if (e === 'Backspace') {
          setCurrentGuess(currentGuess.slice(0, -1));
        } else if (currentGuess.length < WORD_LENGTH) {
          setCurrentGuess(currentGuess + e);
        }
      };

    useEffect(()=>{
        const handleKeyUp = (e) =>{
          handleKeys(e.key);
        }
        window.addEventListener('keyup', handleKeyUp);
        return ()=>{
          window.removeEventListener('keyup', handleKeyUp)
        };
      }, [currentGuess, attempts])

  return (
    <div className="board">
      {guessed ? "You Did It" : attempts.map((guess, index) => (
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