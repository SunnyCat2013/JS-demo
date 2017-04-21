import { call, put, takeEvery } from 'redux-saga/effects'

import * as actions from './action'

function fetchCityListApi (action) {
  const { cityInfo } = action
  console.log('action in saga', {action})
  // return fetch()
  const url = 'http://api.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=cef4d411da7f41e4a7055a64851c4212'
  return fetch(url)
          .then(res => res.json())
}


function * fetchCityList (action) {
  try {
    const cityList = yield call(fetchCityListApi, action)
    console.log('cityList json', {cityList})
    yield put(actions.fetchCityListSuccess(cityList))
  } catch (e) {
    yield put(actions.fetchCityListFail(e))
  }
}

function * watchFetchCityListSaga () {
  yield takeEvery(actions.FETCH_CITY_LIST, fetchCityList)
}

export default watchFetchCityListSaga
