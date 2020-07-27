const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=7db4a9628da1809e8f221d2e4a95a84d&query=30.2672,-97.7431°&units=f'

request({ url: url, json: true }, (error, response) => {
  if (error) {
    consople.log('Unable to connect to weather service')
  } else {
    console.log(`It is currently ${response.body.current.temperature} degrees out. It is ${String(response.body.current.weather_descriptions).toLowerCase()}`)
  }
})

// Geocoding
// Address -> long/lat -> weather

// const mapURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/usa.json?access_token=pk.eyJ1IjoieXUtYm95YWRqYW4iLCJhIjoiY2tkMHZ3dmZrMGV2ODJycDBrdHB0M3l4ZiJ9.PvSy4htMUC3VPZkKXItvgQ'

// request({ url: mapURL, json: true }, (error, response) => {
//   console.log(response.body.features[0].center[0], "\n", response.body.features[0].center[1])
// })