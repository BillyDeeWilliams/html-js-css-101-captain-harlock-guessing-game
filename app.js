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

// var ynquestions = [];
// var ynanswers = [];
// var userguesses = [];
//
//
var randmNum = '';
var guessRandm = '';
//
//
// var numCorrect = '0';
// var numWrong = '0';
//var numOfGuesses = '0';

//var score = '';
function numberGame () {
  //guess a number game!
  randmNum = Math.floor(Math.random() * 10); //generates a random number between 0-9
  console.log('randmNum is ' + randmNum );
  alert('welcome to the Guess a Number Game! \n Im Thinking of a number between 0-10... \nYou\'ll get three attempts to guess.\n click OK when ready.') ;
  for ( var dtt = 0 ; dtt < 3; dtt++){ //do three times dtt //
    guessRandm = parseInt(prompt('What is your guess?'));
    if(guessRandm < randmNum){
      console.log('guessRandm is: ' + guessRandm + ' and randmNum is: ' + randmNum );
      alert('Sorry that\'s too low \n you have ' + (3 - (dtt + 1)) + ' guesses left');
    }else if(guessRandm > randmNum){
      alert('Sorry, that\'s too high \n you have ' + (3 - (dtt + 1)) + ' guesses left');
    }else if (guessRandm === randmNum){
      alert('You WIN! \n' + guessRandm + ' is correct!');
      break;
    }
    else {
      console.log('Unexpected Error. \n randmNum: ' + randmNum + '\n guessRandm: ' + guessRandm);
    }
  }
}
numberGame ();


// start with 5 yes or no QUESTIONS
// populate ynquestions with yes or no QUESTIONS
// this is not a loop because i do not want the user to ever have conrtoll of changing the questions or the answer key

ynquestions.push(' Was Captain Harlock born on Mars?');
ynquestions.push(' Has Captain Harlock ever been arrested?');
ynquestions.push(' Do any other criminals have a longer criminal record  than Harlock on Venus?');
ynquestions.push(' Is Captain Harlock a painter?');
ynquestions.push(' Has Harlock\'s bounty ever exceeded $$300,000?');

//populate answer key
ynanswers.push('no');
ynanswers.push('yes');
ynanswers.push('no');
ynanswers.push('yes');
ynanswers.push('no');


var qsremain = ynquestions.length;
console.log('yes no question array: ' + ynquestions + '\n answer key array: ' + ynanswers + '\n qsremain: ' + qsremain );
var userguesses = [ ];


function yNquestionsgen () {
  for ( var i = 0 ; i < ynquestions.length ; i++ ){ //do this for as many times as there are questions
    userguesses.push(prompt(ynquestions[i]).toLowerCase()); // toLowerCase to controll comparison
    console.log('user guesses for answer question ' + i + ': ' + userguesses[i] );
    if (userguesses[i] === 'yes' || userguesses[i] === 'y' ){
      if (userguesses[i] === ynanswers[i]){
        console.log('guess: ' + userguesses[i] + 'correct answer: ' + ynanswers[i]);
        alert(' congrats! you got ' + ynquestions[i] + ' correct!');
        numCorrect = numCorrect + 1; //incriment correcnt answer count
        qsremain = qsremain - 1; //detriment  questions reamining counter
      }
      else{
        alert('Nope! Youg got that one wrong!\n click OK and try the next question.');
        numWrong = numWrong + 1;
      }
    }
    else if (userguesses[i] === 'no' || userguesses[i] === 'n' ){
      if (userguesses[i] === ynanswers[i]){
        console.log('guess: ' + userguesses[i] + 'correct answer: ' + ynanswers[i]);
        alert(' congrats! you got ' + ynquestions[i] + ' correct!');
        numCorrect = numCorrect + 1; //incriment correcnt answer count
        qsremain = qsremain - 1; //detriment  questions reamining counter
      }
      else{
        alert('Nope! Youg got that one wrong!\n click OK and try the next question.');
        numWrong = numWrong + 1;
      }
    }
    else {
      alert('You did not answer correctly; These are yes or no questions, \n which means that "yes" and "no" are the only vaild possible inputs. \n When your input is invalid you get the question wrong.');
      console.log('user input is behaving unexpectedly. The usser entered' + userguesses[i] + ' as their guess.');
      numCorrect = numCorrect + 1; //incriment correcnt answer count
    }
}
yNquestionsgen ();
// QUESTION: i thought that console.log did not require a '+' opperand to concatinate the console output //


// }/* ask for as many answers as there are questions and store the answer in userguesses array,
//  console out userguesses array for debugging, one at a time in the loop and inits entirety right after */
// console.log('userguesses: ' + userguesses);
// alert(' you got ' + numCorrect + ' questions correct, and ' + numWrong + ' questions wrong.');
//
//
//
// //guess a number game!
// randmNum = Math.floor(Math.random() * 10); //generates a random number between 0-9
// console.log('randmNum is ' + randmNum );
// alert('welcome to the Guess a Number Game! \n Im Thinking of a number between 0-10... \nYou\'ll get three attempts to guess.\n click OK when ready.') ;
// for ( var dtt = 0 ; dtt < 3; dtt++){ //do three times dtt //
//   guessRandm = parseInt(prompt('What is your guess?'));
//   if(guessRandm < randmNum){
//     console.log('guessRandm is: ' + guessRandm + ' and randmNum is: ' + randmNum );
//     alert('Sorry that\'s too low \n you have ' + (3 - (dtt + 1)) + ' guesses left');
//   }else if(guessRandm > randmNum){
//     alert('Sorry, that\'s too high \n you have ' + (3 - (dtt + 1)) + ' guesses left');
//   }else if (guessRandm === randmNum){
//     alert('You WIN! \n' + guessRandm + ' is correct!');
//     break;
//   }
//   else {
//     console.log('Unexpected Error. \n randmNum: ' + randmNum + '\n guessRandm: ' + guessRandm);
//   }
// }
//
// question seven//
function questionSeven () {
  var isCorrect = false;
  var possibleAnswers = [ 'mars', 'europa', 'titan', 'io' , 'iss' ];
  alert('There are FIVE celestial bodies in our solar system where the bountry for Harlock is so high \n in order to avoid having to payout, Harlock has his own official Sol Law Enforcement standing Shoot-On-Sight and Shoot-To-Kill order.\n This includes moons, planets, dwarf planets, asteroids, and artificial satelites, can you guess one of them? \n You get 5 guesses, click OK to start');

  var f = 0;  //you get 6 tries
  do{
    f++;
    var guessWHere = prompt('What is your guess? \n ex: Earth, Luna, Jupiter').toLowerCase();
    for (var j = 0; j < possibleAnswers.length ; j++){
      if ( guessWHere === possibleAnswers[j] ){
        alert('THATS RIGHT! \n You Win!\n It took you' + f + 'tries');
        isCorrect = true;
        break;
      } else{
        console.log('position in array of answers: ' + j );
      }
      if (isCorrect === false){
        alert('Sorry, try again \n you have ' + (6 - f) + ' tries remining');
      }
      if( f === 6){
        isCorrect = true;
      }
    }
  }
  while ( isCorrect);

}

questionSeven ();
