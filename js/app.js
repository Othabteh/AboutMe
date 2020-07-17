'use strict';
var userScore = 0;
var userName = prompt('What is your name?');
alert('Hello ' + userName + ' welcome to my website');

alert('Now you will have five questions for you to answer. The questions are facts and basic information about me. ');
alert('Please answer the following question by typing yes or no');


function ques1(){
  var question1 = prompt('Do you think that I like watching movies?');
  question1 = question1.toLowerCase();
  while (question1 !=='yes'&& question1 !=='no') {
    
    alert('please answer by yes or no ');
    question1= prompt('Do you think that I like watching movies?');
    
  }
  if (question1 === 'yes') {

    alert('you are right i like waching movies');
    userScore++;
    console.log(userScore);
  } else if (question1 === 'no') {

    alert('Nop... you are wrong ');
  } 

  
}
ques1() ;

function ques2(){
  var question2 = prompt('Do you think that I like drinking coffe?');
  question2 = question2.toLowerCase();
  while (question2 !=='yes'&& question2 !=='no') {
    
    alert('please answer by yes or no ');
    question2= prompt('Do you think that I like drinking coffe?');
    
  }
  if (question2 === 'yes') {

    alert('you are right i like drinking coffe');
    userScore++;
    console.log(userScore);
  } else if (question2 === 'no') {

    alert('Nop... you are wrong ');
  } 
}
ques2 ();


function ques3 (){
  var question3 = prompt('Do you think that I like swimming?');
  question3 = question3.toLowerCase();
  while (question3 !=='yes'&& question3 !=='no') {
    
    alert('please answer by yes or no ');
    question3= prompt('Do you think that I like swimming?');
    
  }
  if (question3 === 'yes') {

    alert('you are right i like swimming');
    userScore++;
    console.log(userScore);
  } else if (question3 === 'no') {

    alert('Nop... you are wrong ');
  } 
}
ques3();



function ques4(){
  var question4 = prompt('Do you think that I like noddle?').toLowerCase();
  while (question4 !=='yes'&& question4 !=='no') {
    
    alert('please answer by yes or no ');
    question4= prompt('Do you think that I like noddle?');
    
  }
  if (question4 === 'yes') {

    alert('Nop... you are wrong');

  } else if (question4 === 'no') {

    alert('you are right i do not like noddle ');
    userScore++;
    console.log(userScore);
  } 
}
ques4();

function ques5(){
  var question5 = prompt('Do you think that I like playing football?');
  question5 = question5.toLowerCase();
  while (question5 !=='yes'&& question5 !=='no') {
    
    alert('please answer by yes or no ');
    question5= prompt('Do you think that I like playing football?');
    
  }
  if (question5 === 'yes') {

    alert('Nop... you are wrong');

  } else if (question5 === 'no') {

    alert('you are right i do not like playing football');
    userScore++;
    console.log(userScore);
  } 
}
ques5();

alert('now you have 4 attempts to answer te 6th question');

function ques6(){
  var attempts = 4;
  for (var i = 0; i < 4; i++) {
    attempts--;
    var question6 = prompt('can you guess my tall, it is a number within the range of 1.7-1.8');

    if (question6 === '1.77') {
      alert('yes you are right i am 1.77m hight');

      userScore++;
      console.log(userScore);
      break;

    }

    else if (question6 === '1.78' || question6 === '1.76' || question6 === '1.75' || question6 === '1.79') {
      alert('you answer is too close to the correct answer, you have ' + attempts + ' more chances to guess the right answer.');

    } else if (question6 === '1.8') {
      alert('you answer is too high try again, you have ' + attempts + ' more chances to guess the right answer.');

    } else if (question6 > '1.8' || question6 < '1.7') {
      alert('you answer is out of the range you have ' + attempts + ' more chances to guess the right answer.');

    } else if (question6 === '1.70' || question6 === '1.71' || question6 === '1.72' || question6 === '1.73' || question6 === '1.74') {
      alert('you answer is too low try again, you have ' + attempts + ' more chances to guess the right answer.');

    }

  }
}
ques6();





alert('now you have 6 attempts to answer te 7th question');

function ques7(){

  var Attempts = 6;
  for (var x = 0; x < 6; x++) {
    Attempts--;
    var question7 = prompt('Try to guess a one of my favourite series').toLowerCase();
    var seriesList = ['got', 'suits', 'lucifer', 'narcos', 'elchapo'];

    var flage = true;
    for (var i = 0; i < seriesList.length; i++) {
      if (question7 === seriesList[i]) {
        alert('yes you are right ' + seriesList[i] + ' is one of my fav series and here is my full fav series list : ' + seriesList);
        flage = false;

        userScore++;
        console.log(seriesList);
        break;
      }

    } if (flage) {

      alert('you have ' + Attempts + ' more chances to guess the right answer try again');

    } else { break; }

  }
}
ques7();


alert('your scour is ' + userScore + ' out of 7 ');
