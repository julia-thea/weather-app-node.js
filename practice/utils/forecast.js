const request = require('postman-request')

const forecast = (address, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=7db4a9628da1809e8f221d2e4a95a84d&query=' + encodeURIComponent(address) + '&units=f'
  request( {url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to display weather stats for chosen location. Try something else', undefined)
    } else {
      callback(undefined,
        `Weather for ${body.location.name} is ${body.current.temperature}, ${body.current.weather_descriptions}`
      )
    }
  })
}

module.exports = forecast
