//Прогрессивный рендеринг

/****************************************************************************/

// //Объектная обертка
// 'str'.toUpperCase()//STR

/**************************************************************/

//Есть 3 способа создать объекта
//1 Object literal

// let obj = {
//   name: "Bahram",
// };

// // 2 Function Constructor

// function Person(name) {
//   this.name = name;
// }

// let person1 = new Person("Mustafa");
// let person2 = new Person("Safiya");
// console.log(person1);
// console.log(person2);

// //3 Object.create

// let person3 = Object.create(person1)
// person3.name = 'Hilal'
// console.log(person3);

/**************************************************************/

// const func = (a, b, ...c) => {
//   console.log(a,b,c);
// };
// func('Merc', 'BMW', 'Tesla', 'Audi', 'Toyota') //Merc BMW ['Tesla', 'Audi', 'Toyota']

/**************************************************************/

// let obj = {
//   name: "Bahram",
//   age: 35,
//   job: "programmer",
// };

// const { name, age, job } = obj;
// console.log(name, age, job);

/**************************************************************/

//CORS

/**************************************************************/

//HTTP - Это протокол для передачи гипертекстового документов по типу HTML.
//Создан для связи между браузерами и серверами
//http запрос состоит из
//методы - get, post, put, delete
//версии http protocol -  http/1.1
//headers - дополнительные информации
//body - data (key:val)

/**************************************************************/

// Основные принципы ООП
// Абстракция - Это отделение концепции от реализации.
// Насследование - При наследовании класса получает все своиства и методы из род. класса.
// Инкапсуляция - Это размешение одного объекта или класса внутри другого для закрытия доступа к ним.
// Полиморфизм - Это реализация задачу одно и тоже идею разными способами.

/**************************************************************/

// Babel - Это transpiler, конвертирует новый js на старый

/**************************************************************/

const fooBar = (number) => {
  let res = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res.push("foobar");
    } else if (i % 3 === 0) {
      res.push("foo");
    } else if (i % 5 === 0) {
      res.push("bar");
    } else {
      res.push(i);
    }
  }
  return res;
};

console.log(fooBar(15));