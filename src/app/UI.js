export class UI{

    constructor(){
        this.location = document.getElementById('weather-location')
        this.description = document.getElementById('weather-description')
        this.temperature = document.getElementById('weather-degree')
        this.humidity = document.getElementById('weather-humidity')
        this.wind = document.getElementById('weather-wind')
    }

    render(weather){
        this.location.textContent = weather.name + ' / ' + weather.sys.country
        this.description.textContent = weather.weather[0].description
        this.temperature.textContent = weather.main.temp + ' ºC'
        this.humidity.textContent = 'Humidity: ' + weather.main.humidity + ' %'
        this.wind.textContent = 'Wind: ' + weather.wind.speed + ' m/s'
    }
}