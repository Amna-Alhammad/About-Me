'use strict';
let score = 0;
let yourName = prompt('What is your name ?');
console.log('don’t delete ' + yourName);
alert( 'Welcom '+yourName + ' in my site :)' );



function myname(){
  let myName = prompt ('Please answer yes \'y or no \'n......My name is Amna :)');
  switch (myName.toLowerCase()) {
  case 'yes':
  case 'y':
    alert ('You are good, my name is Amna');
    score += 1;
    break;
  case 'no':
  case 'n':
    alert ('NoOoOOo ,,,, my name is Amna');
    break;
  default:
    alert('don’t delete ' + myName);
    break;
  }

}
myname();


function myage(){
  let myAge = prompt ('Please answer yes \'y or no \'n ......I am 22 years old??)');
  switch (myAge.toLowerCase()) {
  case 'yes':
  case 'y':
    alert ('Oh NoOo ,,,,,I am 26 years old ');
    break;
  case 'no':
  case 'n':
    alert ('You are good, I am 26 years old');
    score += 1;
    break;
  default:
    alert(myAge);
    break;
  }
}

myage();


function mymajor(){
  let myMajor = prompt ('Please answer yes \'y or no \'n ...... I studied computer science??)');
  switch (myMajor.toUpperCase()) {
  case 'YES':
  case 'Y':
    alert ('YES ..... I am studied computer science');
    score += 1;
    break;
  case 'NO':
  case 'N':
    alert ('NOOO ..... I am studied computer science');
    break;
  default:
    alert(myMajor);
    break;
  }
}

mymajor();


function mydrink(){
  let myDrink = prompt ('Please answer yes  \'y or no \'n ...... My favorite drink is tea??)');
  switch (myDrink.toUpperCase()) {
  case 'YES':
  case 'Y':
    alert ('NoOOoOo ..... My favorite drink is coffee');

    break;
  case 'NO':
  case 'N':
    alert ('Yesssss ..... My favorite drink is coffeee');
    score += 1;
    break;
  default:
    alert(myDrink);
    break;
  }
}

mydrink();

function mygol(){
  let myGol = prompt ('Please answer yes \'y or no \'n...... I strive to be a teacher ?)');
  switch (myGol.toUpperCase()) {
  case 'YES':
  case 'Y':
    alert ('NoOOoOo ..... I strive to be the best programmer');
    break;
  case 'NO':
  case 'N':
    alert ('You are good...... I strive to be the best programmer');
    score += 1;
    break;
  default:
    alert(myGol);
    break;
  }
}

mygol();

function places(){
  let places =['turkey' , 'canada' , 'italy' , 'australia' ,'brazil' ,'japan' , 'egypt' , 'ksa' , 'palestine', 'lebanon'];
  let favoritePlace = prompt('What country do you think I hope to visit in 2021?');
  console.log(favoritePlace);
  for(let i =0; i<5 ; i++){
    if(favoritePlace.toLocaleLowerCase() === places[0] || favoritePlace.toLocaleLowerCase() === places[6]){
      alert('correct answer!');
      score += 1;
      break;
    }else{
      alert('Please try again');
      favoritePlace = prompt('What country do you think I hope to visit in 2021?');
    }
  }
  alert('The countries that I hope to visit this year are Egypt and Turkey :) :) <3');
}

places();


function favorit(){
  let favoriteNum = prompt('What is my favorite number between numbers from 1 to 50?');
  for (let i =0; i < 4 ; i++){
    if(favoriteNum == 31){
      alert('correct answer! my favorite number is 31');
      score += 1;
      break;}
    else if(favoriteNum <31){
      alert(' Please try again ,guess higher than' + favoriteNum );
      favoriteNum = prompt('What is my favorite number between numbers from 1 to 50?');
    }
    else if(31 < favoriteNum ){
      alert(' Please try again ,guess lower than'+ favoriteNum );
      favoriteNum = prompt('What is my favorite number between numbers from 1 to 50?');
    }
  }
  alert('my favorite number is 31');
}

favorit();
alert('You got  ' + score + 'correct answers out of 7');
alert ('Thank ' + yourName +' for visiting my site and answering some questions about me :) :) :) ');
