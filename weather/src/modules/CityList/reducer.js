import {
  UPDATE_NEW_CITY_INFO,
  FETCH_CITY_WEATHER,
  FETCH_CITY_WEATHER_SUCCESS,
  FETCH_CITY_WEATHER_FAIL
} from './action'

const cityList = (state = {
  cityTree: {},
  loading: false
}, action) => {
  switch (action.type) {
    case FETCH_CITY_WEATHER_SUCCESS: {
      return {
        ...state,
        cityTree: action.payload
      }
    }
    case FETCH_CITY_WEATHER_FAIL: {
      return {
        ...state,
        error: action.payload
      }
    }
    case UPDATE_NEW_CITY_INFO:
    case FETCH_CITY_WEATHER:
    default:
      return state
  }
}

export default cityList
