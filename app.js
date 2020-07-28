const geocode = require('./utils/geocode')

geocode('Minsk', (error, data) => {
  console.log('Error: ', error)
  console.log('Data: ', data)
})