export const FETCH_CITY_WEATHER = 'FETCH_CITY_WEATHER'
export const FETCH_CITY_WEATHER_SUCCESS = 'FETCH_CITY_WEATHER_SUCCESS'
export const FETCH_CITY_WEATHER_FAIL = 'FETCH_CITY_WEATHER_FAIL'

export const REMOVE_CITY = 'REMOVE_CITY'

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

export function removeCity (cityId) {
  return {
    type: REMOVE_CITY,
    payload: cityId
  }
}
