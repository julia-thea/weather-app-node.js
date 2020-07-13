const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=7db4a9628da1809e8f221d2e4a95a84d&query=37.8267,-122.4233'

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body)
  console.log(data.current)
})