export const FETCH_CITY_WEATHER = 'FETCH_CITY_WEATHER'
export const FETCH_CITY_WEATHER_SUCCESS = 'FETCH_CITY_WEATHER_SUCCESS'
export const FETCH_CITY_WEATHER_FAIL = 'FETCH_CITY_WEATHER_FAIL'

export function fetchCityWeather (cityName) {
  return {
    type: FETCH_CITY_WEATHER,
    payload: cityName
  }
}

export function fetchCityWeatherSuccess (cityList) {
  return {
    type: FETCH_CITY_WEATHER_SUCCESS,
    payload: cityList
  }
}

export function fetchCityWeatherFail (e) {
  return {
    type: FETCH_CITY_WEATHER_FAIL,
    payload: e
  }
}
