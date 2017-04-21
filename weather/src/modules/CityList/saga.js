import { call, put, takeEvery } from 'redux-saga/effects'

import * as actions from './action'

function fetchCityListApi (action) {
  const { cityInfo } = action
  console.log('action in saga', {action})
  // return fetch()
  return fetch('http://www.weather.com.cn/data/city3jdata/china.html')
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
  yield takeEvery(action.FETCH_CITY_LIST, fetchCityList)
}

export default watchFetchCityListSaga
