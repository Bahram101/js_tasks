// function foo() {
//   let name = "asdf";
//   log(name)
// }
// log(foo())

// if (true) {
//   var name = "Bahram";// Можем использовать извне блока
//   let surname = "Atahanov";// Не можем использовать извне блока
// }

// console.log(name);
// console.log(surame);

// var a = 5;
// function foo(){
//   //var a;
//   if(a){ // тут а undefined и if не выполниться
//     console.log(a)
//     var a = 10
//   }
// }
// foo()

/*******************************************************************/

// console.log(a); // undefined
// var a = 7;

// console.log(b); // not access
// let b = 6;
/*******************************************************************/

// let inc = (function() {
//   let counter = 0;
//   return function (){
//     counter + 1
//   };
// })()
// inc();
// inc();
/*******************************************************************/

// const obj = {
//   a: 42,
//   say: function (){
//     setTimeout(()=>{
//       console.log(this.a)
//     }, 1000)
//   }
// }
// obj.say()

/*******************************************************************/

// let words = [
//   "orange",
//   "grapefruit",
//   "banana",
//   "grapefruit",
//   "banana",
//   "orange",
//   "orange",
// ];

// function sortFewToLittle(arr) {
//   let obj = arr.reduce((acc, cur) => {
//     acc[cur] = (acc[cur] || 0) + 1;
//     return acc;
//   }, {});

//   let keys = Object.keys(obj);

//   return keys.sort((a, b) => obj[b] - obj[a]);
// }

// console.log(sortFewToLittle(words));

/*******************************************************************/

// function multiplyByTwo(...args) {
//   let res = args.map((item) => item * 2);
//   return res;
// }
// console.log(multiplyByTwo(1, 2, 3, 4, 5, 6,8,10));

/*******************************************************************/

// function sum(a, b) {
//   return a + b;
// }
// function mul(a, b) {
//   return a * b;
// }
// function calculate(callBack) {
//   return function (a) {
//     return function (b) {
//       return callBack(a, b);
//     };
//   };
// }

// console.log(calculate(sum)(4)(5));
// console.log(calculate(mul)(4)(5));
/*******************************************************************/

// console.log(1)
// setTimeout(function(){console.log(2)}, 1000)
// setTimeout(function(){console.log(3)}, 0)
// console.log(4)