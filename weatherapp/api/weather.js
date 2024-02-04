import axios from 'axios'
import { REACT_APP_WEATHER_API_KEY } from '@env';

const apiKey = REACT_APP_WEATHER_API_KEY

const forecastEndpoint = params => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`
const locationEndpoint = params => `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`

const apiCall = async (endpoint) => {

    console.log(endpoint)

    const options = {
        method: 'GET',
        url: endpoint,
    }

    try {
        const response = await axios.request(options)
        return response.data
    } catch (error) {
        console.error(error)
        return null
    }
}

export const fetchWeatherForecast = params => {
    console.log("fetch weather forecast")
    return apiCall(forecastEndpoint(params))
}

export const fetchLocations = params => {
    console.log("fetch locations")
    return apiCall(locationEndpoint(params))
}
