export class Weather {

    constructor(city, countryCode) {
        this.apikey = 'e446342c344c4a9546e89a432253f06a'
        this.city = city
        this.countryCode = countryCode
    }

    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`
        const response = await fetch(URI)
        const { status } = response

        if (status === 200) {
            const data = await response.json()
            return data
        } else if (status === 404) {
            throw new Error(`${this.city} not found`)
        }
    }

    async getForecast() {
        const URI = `https://api.openweathermap.org/data/2.5/forecast?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`
        const response = await fetch(URI)
        const { status } = response

        if (status === 200) {
            const data = await response.json()
            return data
        } else if (status === 404) {
            throw new Error(`${this.city} not found`)
        }
    }

    changeLocation(city, countryCode) {
        this.city = city
        this.countryCode = countryCode
    }
}