// const isPolindrome = (str) => {
//   return str.toLowerCase() === str.toLowerCase().split("").reverse().join("")
//     ? "Polindrome"
//     : "Not Polindrome";
// };
// console.log(isPolindrome("Anna"));

/******************************************************************************/

// function findShort(str){
//   return str.split(' ').sort((a,b)=> a.length-b.length)[0]
// }

// // console.log(findShort('The smallest word in the sentence'));
// console.log(findShort('My name is Bahram'));

/******************************************************************************/

// const toInitials = (str) => {
//   // return str.split(" ").map((item, i) => item[0].toUpperCase() + ".").join('');
//   return str.split(" ").map((item) => `${item.slice(0,1).toUpperCase()}.`).join('');
// };

// console.log(toInitials("bahram Atahanov"));

/******************************************************************************/

// const arr = ["a", "b", "c"];

// arr.splice(1, 1, "d");
// console.log(arr);
// arr.splice(0, 1);
// console.log(arr);
/******************************************************************************/

// const sumDigits = (digits) => {
//   return Math.abs(digits)
//     .toString()
//     .split("")
//     .reduce((sum, cur) => +sum + +cur, 0);
// };

// console.log(sumDigits(88));
// console.log(sumDigits(-56));
