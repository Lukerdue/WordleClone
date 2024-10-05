import './App.css';

import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import './App.css';

const WORD_LENGTH = 5;
const MAX_ATTEMPTS = 6;

const App = () => {
  const [attempts, setAttempts] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');

  const handleKeys = (e) => {
    console.log(e)
    if (e === 'Enter') {
      if (currentGuess.length === WORD_LENGTH) {
        setAttempts([...attempts, currentGuess]);
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
    <div className="App">
      <h1>Wordle Clone</h1>
      <Board attempts={attempts} currentGuess={currentGuess} />
    </div>
  );
};

export default App;
