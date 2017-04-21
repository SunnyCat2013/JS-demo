import {
  GET_CHILD_CITY_LIST
} from './action'

const cityList = (state = {
  cityCode: 'china',
  cityTree: {}
}, action) => {
  console.log('in reducer');
  console.log({action,GET_CHILD_CITY_LIST});
  switch (action.type) {
    case GET_CHILD_CITY_LIST:
    default:
      return state
  }
}

export default cityList
