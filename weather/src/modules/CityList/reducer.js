import {
  GET_CHILD_CITY_LIST
} from './action'

const cityList = (state = {
  cityCode: 'china',
  cityTree: {}
}, action) => {
  switch (action.type) {
    case GET_CHILD_CITY_LIST:
    default:
      return state
  }
}
