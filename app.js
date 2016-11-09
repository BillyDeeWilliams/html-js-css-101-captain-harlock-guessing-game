'use strict';

var seeMyArt = ' ';
var likeMyArt = ' ';
var musicToo = '';
var listenToChance = '';

var nameQuestionAnsw = prompt('What is your namne?');
console.log('First questions answered with: ' + nameQuestionAnsw + ', and stored in variable \'nameQuestionAnsw\'');
alert('Hey ' + nameQuestionAnsw + '! You Win at being awesome!\n And now its time for some yes or no QUESTIONS!!!!! \n \(please answer each question yes or no\)');
alert('The left says \"yes\" and the right says \"no\" \nI\'m in between and the more I learn Well the less that I know.\n --Dennis DeYoung (Styx). Borrowed Time');

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

var likeArt = prompt('Do you like art?');

if( likeArt.toLowerCase() === 'yes' || likeArt.toLowerCase() === 'y'){
  console.log('likeArt is currently: ' + likeArt );
  seeMyArt = prompt('Scienists have linked intelligence with enjoying art! \n Would you like to visit my Tumblr portfolio ' + nameQuestionAnsw + '?');
}else if( likeArt.toLowerCase() === 'no' || likeArt.toLowerCase() === 'n'){
  console.log('likeArt is currently: ' + likeArt );
  musicToo = prompt('What about music? Do you like music?');
}else{
  console.log('The User did not enter a valid \"yes\" or \"no\" answer; likeArt is currently: ' + likeArt );
  alert('That is not a yes or no answer');
  seeMyArt = prompt('Scienists have linked intelligence with enjoying art! \n Would you like to visit my Tumblr portfolio ' + nameQuestionAnsw + '?');
};

if( seeMyArt.toLowerCase() === 'yes' || seeMyArt.toLowerCase() === 'y'){
  console.log('seeMyArt is currently: ' + seeMyArt );
  alert('Awesome! \n Here is a link to my Tumblr portfolio:  http://williamsportfolio.tumblr.com');
  likeMyArt = prompt('So ' + nameQuestionAnsw + ', whataya think?\n did you like my Arts?');
}else if( seeMyArt.toLowerCase() === 'no' || seeMyArt.toLowerCase() === 'n'){
  console.log('seeMyArt is currently: ' + seeMyArt );
  alert('Well you know what they say, \n If at first you dont fricassee, \n fry, fry a hen.');
}else{
  console.log('The User did not enter a valid \"yes\" or \"no\" answer. \n The variable seeMyArt currently holds the value: ' + seeMyArt);
  alert(' Your input was invalid but I\'m pretty sure you want to see my portfolio:  http://williamsportfolio.tumblr.com');
};

if( musicToo.toLowerCase() === 'yes' || musicToo.toLowerCase() === 'y'){
  console.log('musicToo is currently: ' + musicToo);
  listenToChance = prompt('Yep, music is the best. Would you like to listen to Chance the Rapper?');
}else if( musicToo.toLowerCase() === 'no' || musicToo.toLowerCase() === 'n'){
  console.log('musicToo is currently: ' + musicToo);
  alert('You dont like art or music? I\'m so sorry\n You probably don\'t need to spend any more time one this particular web page.');
}else{
  console.log('The User did not enter a valid \"yes\" or \"no\" answer.\n The variable musicToo currently holds the value: ' + musicToo);
  alert(' unfortunatly that was invalid input, why dont you try this:  http://williamsportfolio.tumblr.com');
};

if( likeMyArt.toLowerCase() === 'yes' || likeMyArt.toLowerCase() === 'y'){
  console.log('likeMyArt is currently: ' + likeMyArt);
  alert('Thanks ' + nameQuestionAnsw + '! You have immaculate taste');
}else if( likeMyArt.toLowerCase() === 'no' || likeMyArt.toLowerCase () === 'n'){
  console.log('likeMyArt is currently: ' + likeMyArt);
  alert(' Ohhhh..... I don\'t know ' + nameQuestionAnsw + ', I think you might be wrong.');
}else{
  console.log('The User did not enter a valid \"yes\" or \"no\" answer.\n likeMyArt is currently: ' + likeMyArt);
  alert('It\'s very common for people to be SO impressed by my artwork that they misspell the word y-e-s.');
};

if( listenToChance.toLowerCase() === 'yes' || listenToChance.toLowerCase() === 'y'){
  console.log('listenToChance is currently: ' + listenToChance);
  alert('Chance the Rapper posts all of his work for free on his Soundcloud page at: https://soundcloud.com/chancetherapper');
}else if( listenToChance.toLowerCase() === 'no' || listenToChance.toLowerCase () === 'n'){
  console.log('listenToChance is currently: ' + listenToChance);
  alert('More of an OddNosdam sort of day?\n That\'s cool, I got you: https://soundcloud.com/odd-nosdam');
}else{
  console.log('The User did not enter a valid \"yes\" or \"no\" answer.\n listenToChance is currently: ' + listenToChance);
  alert('look, ' + nameQuestionAnsw + ', by now you should have figured out how to answer \'yes\' or \'no\' correctly \n I am a little disapointed in you...');
};
