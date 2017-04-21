export const UPDATE_NEW_CITY_INFO = 'UPDATE_NEW_CITY_INFO'

export const FETCH_CITY_WEATHER = 'FETCH_CITY_WEATHER'
export const FETCH_CITY_WEATHER_SUCCESS = 'FETCH_CITY_WEATHER_SUCCESS'
export const FETCH_CITY_WEATHER_FAIL = 'FETCH_CITY_WEATHER_FAIL'

export function updateNewCityInfo (cityInfo) {
  return {
    type: UPDATE_NEW_CITY_INFO,
    text: cityInfo
  }
}

export function fetchCityWeather () {
  return {
    type: FETCH_CITY_WEATHER
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
