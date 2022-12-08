// INTERVIEW - 1

//Arry.pop() - Удаляет последный элемент и вернет этот элемент

// var myFish = ['ангел', 'клоун', 'мандарин', 'хирург'];
// console.log(myFish.pop()) //Вернет удаленный элемент

/*************************************************************/

//Тернарный оператор - укороченная запись if else

/*************************************************************/

//Разница между map и foreach
//Map вернет результат в виде массиве. А форич не вернет. Через индекс можно изменить элементы, но через item невозможно изменить

// let arr = [1, 2, 3];
//console.log("Initial arr", arr);

// arr.forEach((item, index) => {
//   item = item + 1;
// });

// let res2 = arr.map((item) => item + 1);

//console.log("arr2", arr);
// console.log("res1", res1);
// console.log("res2", res2);

/*************************************************************/

// Псевдо массив arguments

// function foo(a, ...rest) {
//   console.log("a", a);
//   console.log("rest", rest);
//   console.log("arguments", arguments);
// }
// foo(1, 2, 3);

/*************************************************************/

//typeof
// function foo() {
//   return 2;
// }

// console.log(typeof foo);
// console.log(typeof {}); //object
// console.log(typeof []); //object

/*************************************************************/

// let number = "12.123123";
// let number2 = "12.923123";
// console.log(parseFloat(number));
// console.log(parseInt(number2));

/*************************************************************/
//spread
// console.log("string".split(""));
// console.log([..."string"]);
// let arr = [1, 2, 4];
// let arr2 = [...arr];
// let arr3 = arr;
// arr3[0] = 5;
// console.log(arr);

// function getTotal(...args) {
//   const res = args.reduce((total, current) => total + current, 5);
//   console.log("res", res);
// }
// getTotal(1, 2, 3, 4, 5);

/*************************************************************/
//Найти максимальное счастливое число

// let numbers = 122423335555566;

// function findLuckyNum(arg) {
//   // splitArr = [...String(arg)];
//   splitArr = String(arg).split("");
//   let res = {};
//   for (let i = 0; i < splitArr.length; i++) {
//     if (res[splitArr[i]]) {
//       res[splitArr[i]]++;
//     } else {
//       res[splitArr[i]] = 1;
//     }
//   }
//   console.log('res',res)
//   let result = 0;
//   for (let key in res) {
//     if (res[key] == key) {
//       result = Math.max(result, key);
//     }
//   }
//   return result;
// }
// console.log(findLuckyNum(numbers));

/*************************************************************/
// Преобразовать стринг в объект

// const inData =
//   "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue&experiments.theme=dark";

// function queryObjectify(str) {
//   let res = {};
//   splitted = str.split("&"); // ['user','name','firstname=Bob',...]
//   splitted = splitted.map((item) => item.split(".")); //[['user','name','firstname=Bob']]

//   for (let i = 0; i < splitted.length; i++) {
//     let current = res;
//     for (let k = 0; k < splitted[i].length; k++) {
//       let name = splitted[i][k];
//       if (k == splitted[i].length - 1) {
//         name = name.split("=");
//         current[name[0]] = decodeURIComponent(name[1]);
//         break;
//       }
//       if (current[name]) {
//         current = current[name];
//       } else {
//         current[name] = {};
//         current = current[name];
//       }
//     }
//   }
//   console.log(splitted);
//   return res;
// }
// console.log(queryObjectify(inData));
