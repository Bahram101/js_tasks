//Boxing-Unboxing - Объект обертка
//'str'.toUpperCase()

/****************************************************************************/
//Template literals - Шаблонный литерал
//Новый способ создать строк `Hello ${name}`

/****************************************************************************/

//SET MAP
// let map = new Map()

// map.set('1', 'One')
// map.set('true', 'Boolean')
// console.log(map);

// let users = new Set()
// const jack = {name: 'Jack'}
// users.add(jack)
// console.log(...users);

/****************************************************************************/

// const done = ()=>{
//   console.log('done')
// }

// const error = ()=>{
//   console.log('error')
// }

// const promise = new Promise((resolve,reject) =>{
//   resolve()
//   reject()
// })
// promise.then(done).then(error)

/****************************************************************************/

//Статические методы - Можем вызвать статические методы без создание екземпляров класса.

/****************************************************************************/

// function unitUnique() {
//   // let arr2 = [];
//   // for (item of arr) {
//   //   arr2.push(...item);
//   // }
//   // let uniqArr = [];
//   // for (el of arr2) {
//   //   !uniqArr.includes(el) && uniqArr.push(el);
//   // }
//   // return uniqArr.sort((a, b) => a - b);
//   //----------------------------------------------
//   // let arr2 = [];
//   // for (item of arr) {
//   //   arr2.push(...item);
//   // }
//   // let res = new Set(arr2);
//   // return [...res].sort((a, b) => a - b);
//   //----------------------------------------------

//   return [...new Set([...arguments].flat())];
// }

// console.log(unitUnique([1, 3, 8], [1, 6, 5], [2, 3, 8]));
/****************************************************************************/
