const { log } = console;
// let a;
// console.log(a)

/***************************************************************/

// console.log(2 && 5 || 3) // && returns last true, || return first true

/***************************************************************/

// Immediatly invoke function expression

// console.log(
//   (function () {
//     return "Hello";
//   })()
// );

/***************************************************************/

// function duplicate(arr){
//   let arr2 = [...arr,...arr]
//   return arr2
// }

// const duplicate = (arr) => [...arr, ...arr]
// console.log(duplicate([1,2,3,4,5]))

/***************************************************************/

// const li = document.querySelectorAll('li')
// const content = document.getElementById('content')

// li.forEach(item=>{
//   item.addEventListener('click', function(){
//     content.innerHTML = this.innerText
//   })
// })

/***************************************************************/

// let b = {}
// let c;

// b.b = 1
// c = b;
// c.b = 2

// log(b.b)
// log(c.b)

/***************************************************************/

// const arr = [1,2,3,4,5]
// const res = arr.filter(item=> item % 2)
// log(res)

/***************************************************************/

// log(0.1 == 0.1) // false

/***************************************************************/

// let a = {name: 'Bahram'}
// let b = {name: 'Bahram'}

// log(a===b) // не равно

/***************************************************************/
// "use strict";

// let user = {
//   firstName: "Вася"
// };

// function func() {
//   log(this.firstName);
// }

// let funcUser = func.bind(user);
// log(funcUser()); // Вася

//----------------------------------

// function f1(a,b){
//   log(a,b)
// }

// let f2 = f1.bind(null, 'foo')

// log(f2('bar', 'baz'))
