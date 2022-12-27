//SUM
// const sum = (arr) => {
//   return arr.reduce((accum, current) => accum + current, 0);
// };

// console.log(sum([1, 2, 2, 4, 5, 6, 6]));

/****************************************************************/
//MAX

// const findMax = (arr) => {
//   return Math.max(...arr)
// };

// console.log(findMax([1, 2, 2, 4, 5, 6, 6]));

//----------------------------------------------------
// const arr = [8, 5, 6, 12, 4, 5];

// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   max = max > arr[i] ? max: arr[i];
// }
// console.log(max);

/****************************************************************/

//SORT

// const users = [
//   {
//     name: "John Doe",
//     age: 40,
//   },
//   {
//     name: "Sohn Doe",
//     age: 10,
//   },
//   {
//     name: "Bohn Doe",
//     age: 30,
//   },
// ];

// console.log(users.sort((a, b) => b.age - a.age)); // age
// console.log(
//   users.sort((a, b) => {
//     if (a.name > b.name) {
//       return 1;
//     }
//     if (a.name < b.name) {
//       return -1;
//     }
//     return 0;
//   })
// ); //name

//--------------------------------------------------------

// const chars = ["c", "a", "b", "w", "p", "h"];

// chars.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (a < b) {
//     return -1;
//   }
//   return 0;
// });
// console.log(chars);

/****************************************************************/

// REVERSE

// const array = [1, 2, 4, 5, 6];

// // let reversed = [];

// // for (let i = arr.length - 1; i >= 0; i--) {
// //   reversed.push(arr[i]);
// // }

// // console.log(reversed);
// //-----------------------------------------------------------

// const reversed = array.map((el, index, arr) => arr[arr.length - index - 1]);
// console.log(reversed);

/****************************************************************/

const arr = [7, "correct", 0, false, 9, NaN, ""];

const filtered = arr.filter((el) => !el);

console.log(filtered)
console.log(filtered)
