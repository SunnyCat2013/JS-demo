export const UPDATE_NEW_CITY_INFO = 'UPDATE_NEW_CITY_INFO'

export const FETCH_CITY_LIST = 'FETCH_CITY_LIST'
export const FETCH_CITY_LIST_SUCCESS = 'FETCH_CITY_LIST_SUCCESS'
export const FETCH_CITY_LIST_FAIL = 'FETCH_CITY_LIST_FAIL'

export function updateNewCityInfo (cityInfo) {
  return {
    type: UPDATE_NEW_CITY_INFO,
    text: cityInfo
  }
}


export function fetchCityList () {
  return {
    type: FETCH_CITY_LIST
  }
}


export function fetchCityListSuccess (cityList) {
  return {
    type: FETCH_CITY_LIST_SUCCESS,
    payload: cityList
  }
}

export function fetchCityListFail (e) {
  return {
    type: FETCH_CITY_LIST_FAIL,
    payload: e
  }
}
