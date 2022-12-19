// const sumDigits = (digits) => {
//   return Math.abs(digits)
//     .toString()
//     .split("")
//     .reduce((sum, cur) => +sum + +cur, 0);
// };

// console.log(sumDigits(88));
// console.log(sumDigits(-56));

/******************************************************************************/

// Препроцессор - это программа которая имеет свой собственный синтаксис и сгенерирует css код

/******************************************************************************/

//Замыкание

function createStep() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
let res = createStep();
res(); //1
res(); //2
res(); //3

let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); // что будет показано: "John" или "Pete"?
/******************************************************************************/

// const accum = (str) => {
//   // var arr = str.toUpperCase().split('')
//   // var repeatArr = arr.map(function(item,i){
//   //   return item += item.repeat(i).toLowerCase()
//   // })
//   // return repeatArr.join('-')

//   return str
//     .toUpperCase()
//     .split("")
//     .map((item, i) => `${item}${item.repeat(i).toLowerCase()}`).join('-');
// };

// console.log(accum("abcd"));
