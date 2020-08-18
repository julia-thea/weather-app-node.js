const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Minsk', (error, data) => {
  console.log('Error: ', error)
  console.log('Data: ', data)
  forecast(data.location, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  }) 
})
