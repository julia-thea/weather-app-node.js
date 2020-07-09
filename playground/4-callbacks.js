// setTimeout(() => {
//   console.log('Two seconds are up')
// }, 2000)

const { callbackify } = require("util");

// const names = ['Julia', 'Izzy', 'John']
// const shortNames = names.filter((name) => {
//   return name.length <= 4
// })

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longtitude: 0
//     }
//     callback(data)
//   }, 2000)
// }

// geocode('NYC', (dataN) => {
//   console.log(dataN)
// })

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!


const add = (first, second, callback) => {
  setTimeout(() => {
    sum = first + second
    callback(sum)
  }, 2000)
}

add(7, 8, (sum) => {
  console.log(sum)
})
