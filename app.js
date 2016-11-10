'use strict';

/*
prototype of yes no check
if(var .toLowerCase() === 'yes' || var  .toLowerCase() === 'y'){
  console.log('The User answered \"yes\"');
}else if( var .toLowerCase() === 'no' || var .toLowerCase ()=== 'n'){
  console.log('The User answered \"no\"');
}else{
  console.log('The User did not enter a valid \"yes\" or \"no\" answer');
}
*/

var ynquestions = [];
var ynanswers = [];
var usergueses = [];
var ynIsCorrect = [];

var randmNum = '';
var guessRandm = '';

var numOfGuesses = '';
var numCorrect = '';
var numWrong = '';
var qsreamin = '';
var score = '';

var guessWHere = '';
var possibleAnswers = [];

//start with 5 yes or no QUESTIONS
//populate ynquestions with yes or no QUESTIONS

ynquestions.push(' yes or no question 1');
ynquestions.push(' yes or no question 2');
ynquestions.push(' yes or no question 3');
ynquestions.push(' yes or no question 4');
ynquestions.push(' yes or no question 5');

//populate answer key
ynanswers.push(' first answer (yes or no)');
ynanswers.push(' 2nd answer (yes or no)');
ynanswers.push(' 3rd answer (yes or no)');
ynanswers.push(' 4th answer (yes or no)');
ynanswers.push(' 5th answer (yes or no)');

console.log('yes no question array: ' + ynquestions + '\n answer key array: ' + ynanswers );
// QUESTION: i thought that console.log did not require a '+' opperand to concatinate the console output //

for ( var i = 0 ; i < ynquestions.length ; i++ ){
  userguesses.push(prompt(ynquestions[i]));
  console.log('user guesses for answer question ' + i + ': ' + userguesses[i] );
  if{yes
    if yes === ynanswers[i]{

      you got question i correct!
      correct answere ++1    }
      else{
        you got it wrong
        wrong answer ++1
      }
   }
  if else  no or n{
    if() no === ynanswers[i]{
      you got it right!
      correct answer ++1
    }else{
      you got it wrong
      wrong answer ++1
    }
  }else{
    when your input is invalid you get the question wrong.
    wrong answer ++1
  }
}/* ask for as many answers as there are questions and store the answer in userguesses array,
 console out userguesses array for debugging, one at a time in the loop and inits entirety right after */
console.log('userguesses: ' + userguesses);

//guess a number game!
randmnum = x
you get 3 tries
is guess 
