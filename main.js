'use strict';
let yourName = prompt('What is your name ?');
console.log('don’t delete ' + yourName);
alert( 'Welcom '+yourName + ' in my site :)' );

let myName = prompt ('Please answer yes \'y or no \'n......My name is Amna :)');
 switch (myName.toLowerCase()) {
   case 'yes':
   case 'y':
console.log('don’t delete ' +myName);
     alert ('You are good, my name is Amna');
    
     break;
     case 'no':
     case 'n':
      console.log('don’t delete ' + myName);
       alert ('NoOoOOo ,,,, my name is Amna');
       break;
   default:
     alert('don’t delete ' + myName);
     break;
 }

let myAge = prompt ('Please answer yes \'y or no \'n ......I am 22 years old??)');
switch (myAge.toLowerCase()) {
  case 'yes':
  case 'y':
console.log('don’t delete ' + myAge);
    alert ('Oh NoOo ,,,,,I am 26 years old ');
   
    break;
    case 'no':
    case 'n':
     console.log('don’t delete ' + myAge);
      alert ('You are good, I am 26 years old');
      break;
  default:
    alert(myAge);
    break;
}

let myMajor = prompt ('Please answer yes \'y or no \'n ...... I studied computer science??)');
switch (myMajor.toUpperCase()) {
  case 'YES':
    case 'Y':
console.log('don’t delete ' + myMajor);
    alert ('YES ..... I am studied computer science');
   
    break;
    case 'NO':
      case 'N':
     console.log('don’t delete ' + myMajor);
      alert ('NOOO ..... I am studied computer science');
      break;
  default:
    alert(myMajor);
    break;
}

let myDrink = prompt ('Please answer yes  \'y or no \'n ...... My favorite drink is tea??)');
switch (myDrink.toUpperCase()) {
  case 'YES':
 case 'Y':
console.log('don’t delete ' + myDrink);
    alert ('NoOOoOo ..... My favorite drink is coffee');
   
    break;
    case 'NO':
    case 'N':
    console.log('don’t delete ' + myDrink);
    alert ('Yesssss ..... My favorite drink is coffeee');
    break;
  default:
    alert(myDrink);
    break;
}


let myGol = prompt ('Please answer yes \'y or no \'n...... I strive to be a teacher ?)');
switch (myGol.toUpperCase()) {
  case 'YES':
    case 'Y':
console.log('don’t delete ' + myGol);
    alert ('NoOOoOo ..... I strive to be the best programmer');
   
    break;
    case 'NO':
      case 'N':
     console.log('don’t delete ' + myGol);
      alert ('You are good...... I strive to be the best programmer');
      break;
  default:
    alert(myGol);
    break;
}

alert ('Thank ' +  yourName  +' for visiting my site and answering some questions about me :) :) :) ')
