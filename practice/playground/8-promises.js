const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([5, 6, 7])
    reject('Things went wrong!')
  }, 2000)
})

doWorkPromise.then((result) => {
  console.log('Success!', result)
}).catch((error) => {
  console.log('Error!', error)
})