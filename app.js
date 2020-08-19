const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const address = process.argv[2];

if (address) {
  geocode(address, (error, { location }) => {
    if(error) {
      return console.log(error)
    } 
  
    forecast(location, (error, forecastData) => {
      if (error) {
        return console.log(error)
      }
  
  
      console.log(location)
      console.log(forecastData)
    }) 
  })
} else {
  console.log("Please provide your location")
}
