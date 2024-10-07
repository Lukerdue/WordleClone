import React from 'react';

export const checkWord = (guess, targetWord) =>{
    let gotIt = false;
    let correctArray = [false, false, false, false, false]
    let guessLetters = guess.split('');
    let targetLetters = targetWord.split('')
    for(let i = 0; i < targetLetters.length; i++){
        if(targetLetters[i] === guessLetters[i]){
            correctArray[i] = true;
        }
    }

    for(let i=0; i<correctArray.length; i++){
        if(correctArray[i] === true ){
            gotIt = true;
        }
        if(correctArray[i] === false){
            gotIt = false;
            return [gotIt, correctArray];
        }
    }

    return [gotIt, correctArray];
}   