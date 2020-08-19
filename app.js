const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const args = process.argv;

if (args.length > 2) {
  geocode(args[2], (error, data) => {
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
} else {
  console.log("Please provide your location")
}
