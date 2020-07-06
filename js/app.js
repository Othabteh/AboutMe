'use strict';
var userName = prompt('What is your name?');
alert('Hello ' + userName + ' welcome to my website');

alert('Now you will have five questions for you to answer. The questions are facts and basic information about me. ');
alert('Please answer the following question by typing yes or no');



var question1 = prompt('Do you think that I like watching movies?');
question1 = question1.toLowerCase();
if (question1 === 'yes') {
  // console.log('you are right i like waching movies');
  alert('you are right i like waching movies');
} else if (question1 === 'no') {
  // console.log('Nop... you are wrong ');
  alert('Nop... you are wrong ');
} else {
  // console.log('please answer by yes or no ');
  alert('please answer by yes or no ');
}




var question2 = prompt('Do you think that I like drinking coffe?');
question2 = question2.toLowerCase();
if (question2 === 'yes') {
  // console.log('you are right i like drinking coffe');
  alert('you are right i like drinking coffe');
} else if (question2 === 'no') {
  // console.log('Nop... you are wrong ');
  alert('Nop... you are wrong ');
} else {
  // console.log('please answer by yes or no ');
  alert('please answer by yes or no ');
}





var question3 = prompt('Do you think that I like swimming?');
question3 = question3.toLowerCase();
if (question3 === 'yes') {
  // console.log('you are right i like swimming');
  alert('you are right i like swimming');
} else if (question3 === 'no') {
  // console.log('Nop... you are wrong');
  alert('Nop... you are wrong ');
} else {
  // console.log('please answer by yes or no');
  alert('please answer by yes or no ');
}





var question4 = prompt('Do you think that I like noddle?');
question4 = question4.toLowerCase();
if (question4 === 'yes') {
  // console.log('Nop... you are wrong');
  alert('Nop... you are wrong');
} else if (question4 === 'no') {
  // console.log('you are right i do not like noddle ');
  alert('you are right i do not like noddle ');
} else {
  // console.log('please answer by yes or no ');
  alert('please answer by yes or no ');
}


var question5 = prompt('Do you think that I like playing football?');
question5 = question5.toLowerCase();
if (question5 === 'yes') {
  // console.log('Nop... you are wrong');
  alert('Nop... you are wrong');
} else if (question5 === 'no') {
  // console.log('you are right i do not like playing football');
  alert('you are right i do not like playing football');
} else {
  // console.log('please answer by yes or no ');
  alert('please answer by yes or no ');
}

