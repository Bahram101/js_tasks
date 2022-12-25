//Вендорные префиксы
// Это приставка к css свойству. Используется для кроссбраузерность.

/******************************************************************************/

//Progressive Enhancement && Graceful Degradation
// Оба подход используется для кроссбраузерных приложении
//PE - from Mobile to Desktop
//GD - from Desktop to Mobile

/******************************************************************************/

//this - Это ссылка на объект который вызывает код в данный момент.
//или вызывает функцию

/******************************************************************************/

// call, apply, bind - Используетсья для привязки функции с объектом
// function f1(p1,p2) {
//   console.log(this);
//   console.log(this[p1], this[p2])
// }

// const user = {
//   firstName: "Bahram",
//   lastName: "Atahanov",
// };

// // f1.call(user, 'firstName', 'lastName'); // Передается аргумент с запятой
// // f2.apply(user, ['firstName', 'lastName']); // в виде массив
// const f4 = f1.bind(user, 'firstName', 'lastName'); 
// f4()

/******************************************************************************/
// const arr = ["a", "b", "c"];

// arr.splice(1, 1, "d");
// console.log(arr);
// arr.splice(0, 1);
// console.log(arr);
/******************************************************************************/

// const minMax = (arr) => {
//   // let sorted = arr.sort((a, b) => a - b);
//   // return [sorted[0], sorted[sorted.length - 1]];
//   //--------------------------------------------------
//   return [Math.min(...arr), Math.max(...arr)]
// };

// console.log(minMax([10, 8, 5, 7, 12, 9, 1, 23, 6, 4, 3, 2]));


