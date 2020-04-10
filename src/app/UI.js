export class UI{

    constructor(){
        this.location = document.getElementById('weather-location')
        this.description = document.getElementById('weather-description')
        this.temperature = document.getElementById('weather-degree')
        this.icon = document.getElementById('weather-icon')
        this.humidity = document.getElementById('weather-humidity')
        this.wind = document.getElementById('weather-wind')
        this.forecastDate = document.getElementById('forecast-date')
        this.forecastTemperature = document.getElementById('forecast-degree')
        this.forecastIcon = document.getElementById('forecast-icon')
        this.forecastDateTwo = document.getElementById('forecast-date-two')
        this.forecastTemperatureTwo = document.getElementById('forecast-degree-two')
        this.forecastIconTwo = document.getElementById('forecast-icon-two')
        this.forecastDateThree = document.getElementById('forecast-date-three')
        this.forecastTemperatureThree = document.getElementById('forecast-degree-three')
        this.forecastIconThree = document.getElementById('forecast-icon-three')
    }

    renderWeather(weather){
        if(weather instanceof Error){
            this.location.textContent = ''
            this.description.textContent = weather.message
            this.temperature.textContent = ''
            this.icon.src = ''
            this.humidity.textContent = ''
            this.wind.textContent = ''
        } else {
            this.location.textContent = weather.name + ' / ' + weather.sys.country
            this.description.textContent = weather.weather[0].description
            this.temperature.textContent = parseFloat(weather.main.temp).toFixed(1) + ' ºC'
            this.icon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
            this.humidity.textContent = 'Humidity: ' + weather.main.humidity + ' %'
            this.wind.textContent = 'Wind: ' + weather.wind.speed + ' m/s'
        }
    }

    renderForecast(forecast){
        const { list } = forecast

        if(forecast instanceof Error){
            this.forecastDate = ''
            this.forecastTemperature = ''
            this.forecastIcon.src = ''
        } else {

            this.forecastDate.textContent = list[8].dt_txt
            this.forecastTemperature.textContent = parseFloat(list[8].main.temp).toFixed(1) + ' ºC'
            this.forecastIcon.src = `http://openweathermap.org/img/wn/${list[8].weather[0].icon}@2x.png`
            this.forecastDateTwo.textContent = list[16].dt_txt
            this.forecastTemperatureTwo.textContent = parseFloat(list[16].main.temp).toFixed(1) + ' ºC'
            this.forecastIconTwo.src = `http://openweathermap.org/img/wn/${list[16].weather[0].icon}@2x.png`
            this.forecastDateThree.textContent = list[24].dt_txt
            this.forecastTemperatureThree.textContent = parseFloat(list[24].main.temp).toFixed(1) + ' ºC'
            this.forecastIconThree.src = `http://openweathermap.org/img/wn/${list[24].weather[0].icon}@2x.png`

        }
    }
}