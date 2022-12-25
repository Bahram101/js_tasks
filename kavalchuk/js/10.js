// hasOwnProperty,
// in - Также проверяет в прототип
// const obj = new Object()
// obj.prop = 'test'

// console.log(obj.hasOwnProperty('toString'))
// console.log('toString' in obj) //

/****************************************************************************/
// copy Object
// const car = {name: 'Togg'}

// const car2 = Object.assign({}, car) // {...car}
// car2.year = 2023

// console.log(JSON.parse(JSON.stringify(car2)));

/****************************************************************************/

//chaining
// const counter = {
//   count: 0,
//   plusOne() {
//     this.count++;
//     return this;
//   },
//   minusOne() {
//     this.count--;
//     return this;
//   },
//   showRes() {
//     console.log(this.count);
//     return this;
//   },
// };

// counter.plusOne().plusOne().minusOne().showRes()

/****************************************************************************/

// class Hero {
//   constructor(heroName) {
//     this.heroName = heroName;
//   }
//   logName = () => {
//     console.log(this.heroName);
//   };
// }

// function Shero(heroName) {
//   this.heroName = heroName;
//   logName = () => {
//     console.log(this.heroName);
//   };
// }

// const batman = new Hero("Batman");
// const shatman = new Shero("Shatman");
// batman.logName();
// shatman.logName();
/****************************************************************************/

//Object.freeze() - Не позволяет изменить значение
// let obj = {car: 'Togg'}

// Object.freeze(obj)
// obj.car = 'Tesla'
// console.log(obj)

/****************************************************************************/

// function* generateSequence() {
//   yield 1;
//   yield 2;
//   return 3;
// }

// let generator = generateSequence();

// for(let value of generator) {
//   alert(value); // 1, затем 2
// }
/****************************************************************************/

function findVowels(str) {
  // let vowels = ["a", "e", "i", "o", "u"];
  // let count = 0;
  // str.toLowerCase().split("").map((item) => vowels.includes(item) && count++);
  // return count
  //----------------------------------------------
  let matches = str.match(/[aeiou]/gi)
  return matches?.length || 0
  //----------------------------------------------
  // let vowels = ["a", "e", "i", "o", "u"];
  // let count = 0;
  // for(char in str.toLowerCase()){
  //   vowels.includes(str[char]) && count++
  // }
  // return count;
}
console.log(findVowels("Helle world"));
