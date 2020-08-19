const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Minsk', (error, data) => {
  if(error) {
    return console.log(error)
  } 

  forecast(data.location, (error, forecastData) => {
    if (error) {
      return console.log(error)
    }


    console.log(data.location)
    console.log(forecastData)
  }) 
})
