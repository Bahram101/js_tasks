// let inputs = [
//   ["4", ".", "1", "."],
//   [".", "2", ".", "."],
//   [".", ".", "3", "."],
//   [".", ".", "2", "."],
// ];

// let solveSudoku = (board) => {
//   const size = 4;

//   const findEmpty = (board) => {
//     for (let r = 0; r < size; r++) {
//       for (let c = 0; c < size; c++) {
//         if (board[r][c] === ".") {
//           return [r, c];
//         }
//       }
//     }
//   };

//   findEmpty(board);
// };

// console.log(solveSudoku(inputs));

/**************************************************************/

//Полиндром

// const isPalindrome = (str) => {
// let res;
// let reversed = str.split("").reverse().join("");
// if (reversed === str) {
//   res = "Palindrome";
// } else {
//   res = "Not Palindrome";
// }
// return res;

//-------------------------------------------------

// str = str.toLowerCase().replace(/\s/g,'')
// return str === str.split("").reverse().join("")
//   ? "Palindrome"
//   : "Not Palindrome";

//-------------------------------------------------

//   const len = Math.floor(str.length / 2);
//   for (let i = 0; i < len; i++) {
//     if (str[i] !== str[str.length - i - 1]) {
//       return "Not Palindrome";
//     }
//   }
//   return "Palindrome";
// };

// console.log(isPalindrome("racedcar"));
 