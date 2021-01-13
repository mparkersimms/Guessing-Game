'use strict'
var rightAnswers = 0
var wrongAnswers = 0

var userName = prompt('What is your name?');
alert('Welcome ' + userName + '! Hopefully you have time to make a few guesses about me!');

var response1 = prompt('Is my name Matt? Yes or No?').toLowerCase();
if(response1 === 'y'|| response1 === 'yes'){
    //console.log ('Great job! My name sure is Matt!');
    alert('Great job! My name sure is Matt!')
    var rightAnswers = rightAnswers + 1;
}
else if(response1 != 'y' || response1 != 'yes' || response1 != 'n' ||response1 != 'no'){
    alert("It's either 'yes' or 'no'! Try again");
    var response1 = prompt('Is my name Matt? Yes or No?').toLowerCase();
}
else{ 
    //console.log('Sorry, my name actually is Matt..')
    alert('Sorry, my name actually is Matt..');
    wrongAnswers = (wrongAnswers + 1);
};

var response2 = prompt ('Am I still in the U.S.Army? Yes or No?').toLowerCase();
if(response2 === 'y' || response2 ==='yes'){
    //console.log('You got it! I sure am still in the U.S.Army');
    alert('You got it! I sure am still in the U.S.Army');
    rightAnswers = (rightAnswers + 1);
}
else{
    //console.log('You should have guessed better.. ')
    alert('You should have guessed better.. ')
    wrongAnswers = (wrongAnswers + 1);
};

var response3 = prompt('Do I like to play golf? Yes or No?').toLowerCase();
if( response3 === 'y' || response3 ==='yes'){
    //console.log( 'Wrong! Honestly, I REALLY dont like playing golf');
    alert('Wrong! Honestly, I REALLY dont like playing golf')
    wrongAnswers = (wrongAnswers + 1);
}
else{
    //console.log(" Right! You're a genius!")
    alert(" Right! You're a genius!")
    rightAnswers = (rightAnswers + 1);
};

var response4 = prompt('Do I like to go snowboarding? yes or no?').toLowerCase();
if(response4 === 'y' || response4 === 'Yes'){
    //console.log("Yep, you guessed it!");
    alert("Yep, you guessed it!")
    rightAnswers = (rightAnswers + 1);
}
else{
    //console.log('Seriously? Of course I do!')
    alert('Seriously? Of course I do!')
    wrongAnswers = (wrongAnswers + 1);
};
var response5 = prompt('Did I go to High School in Hawaii? Yes or No').toLowerCase();
if( response5 === 'y' || response5 === 'yes'){
    //console.log('Right again!!');
    alert('Right again!!')
    rightAnswers = (rightAnswers + 1);
}
else{
    //console.log('Wrong!')
    alert('Wrong!')
    wrongAnswers = (wrongAnswers + 1);
};
alert( userName + ', thanks for playing my guessing game! You got' + rightAnswers + ' answers right and' + wrongAnswers + ' answers wrong!')



/*
var name = ('Hey there ');

var color = ('Your favorite color is ');
var response3 = prompt('What is your favorite place in the world?');
var place = (' You would really like to live in ');
var place2 = (' wouldnt you..?');
var response4 = prompt (' Pick a number.. any number');
var number = ('you would like to have ');
var banana = (' is a banana lover.. maybe. lol and you probably wish it was ');
alert(name + response1 + '!' + place + response3 + place2 +
' And ' + number + 'a/an ' + response2 + ' llama, and ' + response4 + ' acres of land there. Am I right?!');

console.log ('The users name is ' + response1);
console.log (' The users favorite color is ' + response2);console.log ( 'The Users favorite place to live is ' + response3);
console.log ('The users nubmer choice is ' + response4);
*/
