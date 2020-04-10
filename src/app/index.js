const { Store } = require('./Store')
const { UI } = require('./UI')
const { Weather } = require('./Weather')
require('../style.css')

const store = new Store()
const { city, countryCode } = store.getLocation()
const ui = new UI()
const weather = new Weather(city, countryCode)

async function fetchWeather() {
    try {
        const data = await weather.getWeather()
        const forecast = await weather.getForecast()
        ui.renderWeather(data)
        ui.renderForecast(forecast)
    } catch (error) {
        ui.renderWeather(error)
    }
}

document.getElementById('weather-btn').addEventListener('click', (event) => {
    event.preventDefault()

    const city = document.getElementById('city').value
    const countryCode = document.getElementById('countryCode').value
    store.setLocation(city, countryCode)

    weather.changeLocation(city, countryCode)
    fetchWeather()

})

document.addEventListener('DOMContentLoaded', fetchWeather) //se ejecuta cuando el documento HTML ha sido cargado