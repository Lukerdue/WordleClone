import React from 'react';

export const checkWord = (guess, targetWord) =>{
    let correct = [false, false, false, false, false]
    let guessLetters = guess.split('');
    let targetLetters = targetWord.split('')
    for(let i = 0; i < targetLetters.length; i++){
        if(targetLetters[i] === guessLetters[i]){
            correct[i] = true;
        }
    }

    return correct
}   