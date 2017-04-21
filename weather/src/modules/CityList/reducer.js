import {
  FETCH_CITY_WEATHER,
  FETCH_CITY_WEATHER_SUCCESS,
  FETCH_CITY_WEATHER_FAIL,
  REMOVE_CITY
} from './action'

import {
  removeCityInfoById
} from './utils/modifyCityInfos'

const cityList = (state = {
  cityInfos: {},
  loading: false
}, action) => {
  switch (action.type) {
    case FETCH_CITY_WEATHER_SUCCESS: {
      const { payload: { city, list } } = action
      const { id } = city
      return {
        ...state,
        cityInfos: {
          ...state.cityInfos,
          [id]: {
            city,
            list
          }
        },
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
    case FETCH_CITY_WEATHER: {
      return {
        ...state,
        loading: true
      }
    }
    case REMOVE_CITY: {
      const { payload } = action
      return {
        ...removeCityInfoById(state, payload)
      }
    }
    default:
      return state
  }
}

export default cityList
