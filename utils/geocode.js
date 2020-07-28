const request = require('postman-request')

// const { request } = require("http")

// const url = 'http://api.weatherstack.com/current?access_key=7db4a9628da1809e8f221d2e4a95a84d&query=30.2672,-97.7431°&units=f'

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service')
//   } else {
//     console.log(`It is currently ${response.body.current.temperature} degrees out. It is ${String(response.body.current.weather_descriptions).toLowerCase()}`)
//   }
// })

// Geocoding
// Address -> long/lat -> weather

// const mapURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/usa.json?access_token=pk.eyJ1IjoieXUtYm95YWRqYW4iLCJhIjoiY2tkMHZ3dmZrMGV2ODJycDBrdHB0M3l4ZiJ9.PvSy4htMUC3VPZkKXItvgQ'

// request({ url: mapURL, json: true }, (error, response) => {
//   console.log(response.body.features[0].center[0], "\n", response.body.features[0].center[1])
// })

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoieXUtYm95YWRqYW4iLCJhIjoiY2tkMHZ3dmZrMGV2ODJycDBrdHB0M3l4ZiJ9.PvSy4htMUC3VPZkKXItvgQ'
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services!', undefined)
    } else if (response.body.features.length === 0) {
      callback('Unable to find location. Try to find another search', undefined)
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longtitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
      })
    }
  })
}

module.exports = geocode