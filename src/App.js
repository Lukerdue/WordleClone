import './App.css';

import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import './App.css';
import { useLocalStorage } from './util/custom hooks/useLocalStorage';

const WORD_LENGTH = 5;
const MAX_ATTEMPTS = 6;

const wordBank = [
  "apple", "brave", "bones", "crisp", "drive", "eager", "flame", "grape", "heart",
  "image", "jolly", "knack", "lemon", "march", "nerve", "ocean", "piano", "break",
  "queen", "robot", "shine", "toast", "umbra", "vivid", "whale", "xerox", 
  "yacht", "zebra", "bliss", "charm", "depth", "eagle", "frost", "globe", 
  "haste", "infer", "joint", "kneel", "liver", "maple", "noble", "opera", 
  "pride", "quill", "raven", "slate", "tease", "ultra", "valor", "wheat",
  "yummy", "zesty", "brick", "climb", "dream", "flash", "grove", "hound",
  "index", "jumps", "knots", "lucky", "minds", "north", "pluck", "quack",
  "round", "sweep", "trick", "unity", "vapor", "wings", "yield", "zones"
];

const App = () => {
  const [attempts, setAttempts] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [word, setWord] = useLocalStorage('target', 'blank');
  const [guessed, setGuessed] =useState(false);

  useEffect(()=>{
    setWord(wordBank[Math.floor(Math.random() * wordBank.length)]);
  },[])

  return (
    <div className="App">
      <h1>Wordle Clone</h1>
      <Board setGuessed={setGuessed} word={word} attempts={attempts} currentGuess={currentGuess} setAttempts={setAttempts} setCurrentGuess={setCurrentGuess} guessed={guessed}/>
    </div>
  );
};

export default App;
