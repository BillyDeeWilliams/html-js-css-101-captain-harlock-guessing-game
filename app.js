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

var randmnum = '';
var numquess = '';

var numguesses = '';
var numcorrect = '';
var numwrong = '';
var qsreamin = '';
var score = '';

var userguess = '';
var possibleanswers = [];

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
