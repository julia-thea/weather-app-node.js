console.log("Hello js file")

fetch('http://puzzle.mead.io/puzzle').then((response) => {
  response.json().then((data) => {
    console.log(data)
  })
})

fetch('http://api.weatherstack.com/current?access_key=7db4a9628da1809e8f221d2e4a95a84d&query=texas').then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log(data.error)
    } else {
      console.log(data.location.name, data.current.temperature, data.current.weather_descriptions)
    }
  })
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const location = search.value
  console.log(location)
})