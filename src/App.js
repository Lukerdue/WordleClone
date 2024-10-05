import './App.css';

import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import './App.css';

const WORD_LENGTH = 5;
const MAX_ATTEMPTS = 6;

const wordBank = [
  "apple", "brave", "bones", "crisp", "drive", "eager", "flame", "grape", "heart",
  "image", "jolly", "knack", "lemon", "march", "nerve", "ocean", "piano", 
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
  const [word, setWord] = useState('');

  function pickWord () {
    setWord(wordBank[Math.floor(Math.random() * wordBank.length)]);
    console.log(word);
  }

  useEffect(()=>{pickWord();},[])

  return (
    <div className="App">
      <h1>Wordle Clone</h1>
      <Board word={word} attempts={attempts} currentGuess={currentGuess} setAttempts={setAttempts} setCurrentGuess={setCurrentGuess}/>
    </div>
  );
};

export default App;
