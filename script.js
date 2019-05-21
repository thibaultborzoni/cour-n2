'use strict';



let myVar=1;
if (myVar>5){
  console.log('Vrai');
}else if(4<6) {
  console.log('4<6 est Vrai');
}else {
  console.log('Faux');
}

let myVar2=20/2;
if (myVar2 >=10||myVar2 <15) {
  console.log('yes');
}else {
  console.log('no');
}

let myVar3=5;
let myVar4=8;
if (myVar3<myVar4) {
  console.log(`The grater numbers of ${myVar3} and ${myVar4} is ${myVar4}`);
}else  {
  console.log(`The grater numbers of ${myVar4} and ${myVar3} is ${myVar3}`);
}

let myVar5=55;
if(myVar5>=90){
  console.log(`A`)
}else if(myVar5>=80&&myVar5<91 ) {
  console.log(`B`);
}else if(myVar5>=70&&myVar5<81 ) {
  console.log(`C`);
}else if(myVar5>=60&&myVar5<71 ) {
  console.log(`D`);
}else if(myVar5<60 ) {
  console.log(`F`);
}

function myFunction(){
  console.log('myVar7 is'+ myVar7);
}
//nouvelle facon de declarer une fonction//
const myFunc=()=>{
  let myVar7=1;
  console.log('myVar7 is + myVar7');
}
//appeler une fonction //
myFunction();

//déclarer une fonction//
function myFunction(){
  let myVar7=1;
  console.log('myVar7 is' + myVar7)
}


function SumTwoNum(num1,num2){
  console.log(num1);
  console.log(num2);
const result = num1 + num2;
console.log('result',result);
return result;
}

let a =SumTwoNum(2,5);
console.log('a',a);

myFunction1(12);
function myFunction1(num12){
  console.log(num12);
  const result= num12;
  return result;
}

planMyTrip('I want to visit city1,city2,city3,city4');
function planMyTrip(city1,city2,city3,city4){
  console.log(city1,city2,city3,city4);
const result = city1+city2+city3+city4;
return result
}
let num78=4;
let Human_Age=num78*7

calculatedogage(`this dog is ${Human_Age} yers old`);
function calculatedogage(num78){
  console.log(num78);
  const result = num78*7;

}
calculatesupply(20,'sucre',3);
function calculatesupply(age,snack,quantité){
  const day=365;
  let age2=83-age;
  let NN=quantité*day*age2;
  console.log(NN,age2);
  const result=` you will need ${NN} to last you until the ripe old age of ${age2}`
  console.log(result)

}

// execice de debuguing//
'use strict';

let myCharacter = 'Luna Lovegood';

 myCharacterHouse = 'Ravenclaw';

isMyCharacterRich = checkMyGringottAccount()

function useSortngHat(char) {
  let choice = ''}

  if (ch = 'Harry Potter') {
    let choice = 'Gryffindor';
  } else if (ch = 'Draco Malfoy') {
    let choice = 'Ravenclaw';
  } else if (ch = 'Luna Lovegood') {
    choice = 'Ravenclaw';
  } else  {
    ch = 'Gryffindor'
  }

  result (`${char} goes to ${ch}`);{
}

const checkMyGringottAccount = (12); {
  myMoney = Math.random() * 100

  if (myMoney > 0 || myMoney < 30) {
    console.log( 'Hello Weasley');
  } else if ( myMoney > 30 ||  myMoney < 75 ) {
    console.log( `Hey, that's cool`);
  } else  {
    `You're reach!`
  }
}
