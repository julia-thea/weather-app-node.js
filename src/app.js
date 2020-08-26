const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { send } = require('process')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast')

// Define paths for Express config
const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup public directory to serve
app.use(express.static(publicDirectoryPath))

app.get((''), (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Julia Thea'
  })
})

app.get(('/about'), (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Julia Thea'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    message: 'This is the helpful message',
    title: 'Help',
    name: 'Julia Thea'
  })
})

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'Please provide an address'
    })
  }
  if (req.query.address) {
    geocode(req.query.address, (error, { location } = {}) => { // Providing default value (object)
      if(error) {
        return res.send({error})
      } 
    
      forecast(location, (error, forecastData) => {
        if (error) {
          return res.send({error})
        }
        res.send({
          forecast: forecastData,
          location,
          address: req.query.address
        })
      }) 
    })
  } else {
    console.log("Please provide your location")
  }
})

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'Provide a search term'
    })
  }
  res.send({
    products: []
  })
})

// Requests matching specific pattern
app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    errorMessage: 'Help article not found',
    name: 'Julia Thea'
})
})

app.get('*', (req, res) => {
  res.render('404', {
    errorMessage: 'Page Not Found',
    name: 'Julia Thea'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})