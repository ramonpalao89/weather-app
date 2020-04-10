export class UI{

    constructor(){
        this.location = document.getElementById('weather-location')
        this.description = document.getElementById('weather-description')
        this.temperature = document.getElementById('weather-degree')
        this.icon = document.getElementById('weather-icon')
        this.humidity = document.getElementById('weather-humidity')
        this.wind = document.getElementById('weather-wind')
    }

    render(weather){
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
}