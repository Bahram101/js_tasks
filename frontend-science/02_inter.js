//Проверить число целое или нет

// console.log(3.9 % 1) // 0.5
// console.log(9 % 1) // 0

// let a = 5.3;
// console.log(a == Math.trunc(a));

/*************************************************************/

// Разница между флекса и грида
//Флекс одномерный, а грид двухерный. То есть во флексе удобно выровнивать элементы по горизонтально. В гриде и горизонтально и вертикально.

/*************************************************************/
//Разница между function decloration and function expression
//Function decloration можем вызвать до и после объвления функции. А Function expression мы не можем вызвать до объявлении функции, только вызываем после объявлении функции.

// const sayHello = function(){
//   console.log("Hello")
// }
// sayHello()
/***************************************************************/

// Сортировка массива
// let arr = [4, 1, 7, 4,12, 2, 8, 5];
// console.log(arr.sort((a, b) => a-b));
// console.log(arr.sort((a, b) => b-a));
// console.log(arr.sort());

/***************************************************************/

// class Bike {
//   constructor(model, color) {
//     this.model = model;
//     this.color = color;
//   }
//   getDetails() {
//     return this.model + " bike has " + this.color + " color";
//   }
// }

// const bike1 = new Bike("Ural", 'green')

// console.log(bike1.getDetails())

/***************************************************************/
// Сделать заглавная буква

// function capitalizeFirstLetter(str) {
//   // let splitted = str.split("");
//   // splitted[0] = splitted[0].toUpperCase();
//   // return splitted.join('');

//   let firstLetter = str[0].toUpperCase();
//   let sliced = str.slice(1);
//   return firstLetter+sliced;
// }

// console.log(capitalizeFirstLetter("hello"));

/***************************************************************/
//Найти максимальное и минимальное значение

// const marks = [50, 70, 20, 10, 60, 45, 30];

// function findMin(arr) {
//   return Math.min(...arr)

//   // let min = arr[0];
//   // arr.forEach((number) => {
//   //   if (number < min) {
//   //     min = number;
//   //   }
//   // });
//   // return min;
// }

// function findMax(arr) {
//   return Math.max(...arr);

//   // let max = arr[0];
//   // arr.forEach((number) => {
//   //   if (number > max) {
//   //     max = number;
//   //   }
//   // });
//   // return max;
// }

// console.log(findMin(marks));
// console.log(findMax(marks));

/***************************************************************/
//Удалить повторяющий элемент
// let arr = [1,2,2,3,4]
// arr = new Set(arr)
// console.log(arr);
//Удалить SET
// console.log([...arr])

/***************************************************************/

// let obj = {
//   name: "Bahram",
//   job: "Frontend",
// };

// let arr = [];
// for (let key in obj) {
//   arr[key] = obj[key];
//   // arr.push(obj[key])
// }
// console.log(arr);

/***************************************************************/

// let obj = { name: "Bahram", job: "Frontend", experience: 5 };
// let obj = { 0: "Bahram", 1: "Frontend", 2: 5 };
// let arr = [];
// for (let key in obj) {
//   arr[key] = obj[key];
// }
// console.log(arr);

/***************************************************************/

// Удалить все элементы из массива
// let arr = [1, 2, 3, 4, 5, 6];
// arr.length = 0
// console.log(arr)

/***************************************************************/
// let arr = [21, 12, 13, 43, 7, 6];
// let obj = {};
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2) {
//     obj[arr[i]] = "Нечетный";
//   } else {
//     obj[arr[i]] = "Четный";
//   }
// }
// console.log('obj', obj)

/***************************************************************/
//Сортировать нечетные числа
// const numbers = [11, 16, 23, 14, 22, 13, 6, 5, 28, 9];

// function sortOddNumbers(arr) {
//   let oddArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2) {
//       oddArr.push(arr[i]);
//     }
//   }
//   let sortedOdds = oddArr.sort((a, b) => a - b);
//   console.log(sortedOdds);

//   // arr.forEach((item, index) => {
//   //   for (let i = 0; i < sortedOdds; i++) {
//   //     if (item % 2) {
//   //       arr[index] = sortedOdds[i];
//   //     }
//   //   }
//   // });
//   // return arr;
// }

// console.log(sortOddNumbers(numbers));

/***************************************************************/
//ERROR

// function foo() {
//   return
//   {
//     name: "Bahram",
//   };
// }
// console.log(foo());

/***************************************************************/
// let obj1 = { name: "Hello" };
// let obj2 = obj1;
// // obj1.name = "Bye";
// // obj1 = 1; //obj2 оcтанется объектом
// obj1 = { name: "Bahram" }; //Здесь сщздался новы объект. В obj2 останется старый данный

// console.log(obj1);
// console.log(obj2);

/***************************************************************/

// for (let index = 0; index < 10; index++) {
//   setTimeout(()=>{
//     console.log(index)
//   }, 0)
// }
