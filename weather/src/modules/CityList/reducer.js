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
        cityTree: action.payload,
        loading: false
      }
    }
    case FETCH_CITY_WEATHER_FAIL: {
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    }
    case UPDATE_NEW_CITY_INFO: {
      return {
        ...state,
        loading: true
      }
    }
    case FETCH_CITY_WEATHER:
    default:
      return state
  }
}

export default cityList
