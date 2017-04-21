import {
  UPDATE_NEW_CITY_INFO
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
    case UPDATE_NEW_CITY_INFO:
    default:
      return state
  }
}

export default cityList
