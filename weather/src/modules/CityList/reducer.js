import {
  UPDATE_NEW_CITY_INFO,
  FETCH_CITY_LIST,
  FETCH_CITY_LIST_SUCCESS,
  FETCH_CITY_LIST_FAIL
} from './action'

const cityList = (state = {
  cityInfo: {
    firstLevel: 'china',
    secondLevel: '',
    thirdLevel: ''
  },
  cityTree: {}
}, action) => {
  switch (action.type) {
    case FETCH_CITY_LIST_SUCCESS: {
      return {
        ...state,
        cityTree: action.payload
      }
    }
    case FETCH_CITY_LIST_FAIL: {
      return {
        ...state,
        error: action.payload
      }
    }
    case UPDATE_NEW_CITY_INFO:
    case FETCH_CITY_LIST:
    default:
      return state
  }
}

export default cityList
