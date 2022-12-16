// const app = document.getElementById("app");
// const button1 = document.querySelector(".button1");

// const clickHandler = () => {
//   app.removeChild(button1)
//   let button2 = document.createElement('button')
//   let button3 = document.createElement('button')
//   button2.innerHTML = "Button2"
//   button3.innerHTML = 'Button3'
//   app.appendChild(button2)
//   app.appendChild(button3)
// };

// button1.addEventListener("click", clickHandler);

/***************************************************************/

// let arr = [1,2,3,4,5]
// for(let i = 0; i < arr.length; i++){
//   if(i == 3){
//     console.log(i)
//     break;
//   }
// }

// arr.forEach((item,i)=>{
//   if(item == 4){
//     console.log(item)
//     break;  // Не работает
//   }
// })

/***************************************************************/

// let arr = [1, 2, 3, 4];
// arr[10] = 0;
// // delete arr[1];
// delete arr[10];
// console.log(arr);

/***************************************************************/

// function Person() {
//   return "hello";
// }

// let person1 = Person();

// let person2 = new Person();

// console.log(person1);
// console.log(person2);

/***************************************************************/

// const add = (a, b) => {
//   if (b !== undefined) return a + b;
//   return (c) => a + c;
// };

// console.log(add(2, 5));
// console.log(add(2)(0));

// function outside(x){
//   function inside(y){
//     return x+y;
//   }
//   return inside
// }

// console.log(outside(3)(4))
/***************************************************************/

// const getExtension = (str)=>{
//   if(typeof str !== 'string'){
//     throw new Error('Invalid type of parameter!')
//   }
//   const splitted = str.split('.');
//   return splitted[splitted.length - 1]
// }

// console.log(getExtension('asdf.filename.exe'))

/***************************************************************/
