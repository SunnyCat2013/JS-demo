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

export function fetchCityList () {
  return {
    type: FETCH_CITY_WEATHER
  }
}

export function fetchCityListSuccess (cityList) {
  return {
    type: FETCH_CITY_WEATHER_SUCCESS,
    payload: cityList
  }
}

export function fetchCityListFail (e) {
  return {
    type: FETCH_CITY_WEATHER_FAIL,
    payload: e
  }
}
