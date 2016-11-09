'use strict';



var nameQuestionAnsw = prompt('What is your namne?');
console.log('First questions answered with: ' + nameQuestionAnsw + ', and stored in variable \'nameQuestionAnsw\'');
alert('Hey ' + nameQuestionAnsw + '! You Win at being awesome!\n And now its time for some QUESTIONS!!!!!');
alert('The left says \"yes\" and the right says \"no\" \nI\'m in between and the more I learn Well the less that I know.\n --Dennis DeYoung (Styx). Borrowed Time');

var likeArt = prompt('Do you like art?');

/*
prototype of yes no check
if(var .toLowerCase() === 'yes' || var  .toLowerCase() === 'y'){
  console.log('The User answered \"yes\"');
}else if( var .toLowerCase() === 'no' || var .toLowerCase === 'n'){
  console.log('The User answered \"no\"');
}else{
    console.log('The User did not enter a valid \"yes\" or \"no\" answer');
}
*/

prompt('Where are you from ' + nameQuestionAnsw + '? ');
console.log(nameQuestionAnsw + ' is from ' + whereYouFrom);
alert('Howdy ' + nameQuestionAnsw + ' from ' + whereYouFrom);
var ageAnsw = prompt('hey, ' + nameQuestionAnsw + ' from ' + whereYouFrom + ', how old are you?');
console.log(nameQuestionAnsw + ' from ' + whereYouFrom + ' is ' + ageAnsw + ' years old.');
alert('Wow! ' + nameQuestionAnsw + ' from ' + whereYouFrom + ageAnsw + 'is really old!');
var whereToNow = prompt('So, ' + nameQuestionAnsw + ' from ' + whereYouFrom + ', after ' + ageAnsw + ' years, where are you headed to now?');
console.log ( nameQuestionAnsw + ' from ' + whereYouFrom + ' is ' + ageAnsw + ' years young, and heading to ' + whereToNow);
alert( nameQuestionAnsw + ' from ' + whereYouFrom + ' is ' + ageAnsw + ' years young, and heading to ' + whereToNow);
