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

const done = ()=>{
  console.log('done')
}

const error = ()=>{
  console.log('error')
}

const promise = new Promise((resolve,reject) =>{
  resolve()
  reject()
})
promise.then(done).then(error)