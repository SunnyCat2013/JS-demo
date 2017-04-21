import { call, put, takeEvery } from 'redux-saga/effects'

import * as actions from './action'

function fetchCityWeatherApi (action) {
  const { payload: cityName } = action
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName},CN&appid=cef4d411da7f41e4a7055a64851c4212`
  return fetch(url)
          .then(res => res.json())
}

function * fetchCityWeather (action) {
  try {
    const cityList = yield call(fetchCityWeatherApi, action)
    yield put(actions.fetchCityWeatherSuccess(cityList))
  } catch (e) {
    yield put(actions.fetchCityWeatherFail(e))
  }
}

function * watchFetchCityListSaga () {
  yield takeEvery(actions.FETCH_CITY_WEATHER, fetchCityWeather)
}

export default watchFetchCityListSaga
