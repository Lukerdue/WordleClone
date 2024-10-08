import React, { useState } from 'react';

const initialLetterObj = {letter: '', spaces: null}

export const checkWord = (guess, targetWord) =>{
    const [correct, setCorrect] = useState([])
    let [targetLetters, setTargetLetters] = useState(targetWord.split(''))
    let guessLetters = guess.split('');
    let [tempArray, setTempArray] = useState([])
/* 
TODO:
    - track letters and their spots in the target word
    - compare guessed letters against target word
        - track if guessed letter appears in target word, but in the wrong spot
        - track how many of each letter is in target word, and let the repeat letters that aren't in the target word be wrong
    -return something (probably an object) allows me to show which letters are correct and partially correct on the board
*/

    //1. track letters and spots in target word
    for(let i = 0; i < targetLetters.length; i++){
        if(targetLetters[i] in tempArray){
            setTempArray(tempArray.map(lett => {if(lett.letter === targetLetters[i]){return {...initialLetterObj, letter: targetLetters[i], spaces: [...lett.spaces, i]}} else {return lett}}));
        } else {
            setTempArray([...tempArray, {...initialLetterObj, letter: targetLetters[i], spaces: [i]}]);
        }
    }
    setTargetLetters(tempArray);

    /* 2. Compare Guessed Letters Against Target Word
    correct array should hold every letter in a different obj*/
        const initObj = {guessLetter: '', isInWord: false, isCorrect: false, id: null}
    for(let i = 0; i<guessLetters.length; i++){
        let tempObj = {...initObj, guessLetter: guessLetters[i], id: i}
            if(targetLetters.som(obj=>obj.letter === tempObj.guessLetter)){
                if(targetLetters.find(obj => obj.letter === tempObj.guessLetter).spaces.length < 1){
                    tempObj = {...initObj, isInWord: true};
                    if(targetLetters.find(tempObj.guessLetter in targetLetters).spaces[0] === i){
                        tempObj = {...tempObj, isCorrect: true};
                    }
                    setCorrect([...correct, tempObj]);
                    tempObj = {...initObj}
                } else if(correct.some(obj => obj.guessLetter === tempObj.guessLetter)){
                    if(targetLetters.find(obj=> obj.letter === tempObj.guessLetter).spaces.length < correct.filter(obj=> obj.guessLetter === tempObj.guessLetter)){
                        //check if letter is in correct space if letter appears more than once in the target word <------- YOU ARE HERE
                    }
                }
            } else {
                setCorrect([...correct, tempObj]);
                tempObj = {...initObj};
            }
        }

    return correct;
}   