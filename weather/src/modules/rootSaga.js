import watchFetchCityListSaga from './CityList/saga'

export default function * rootSaga () {
  yield [
    fork(watchFetchCityListSaga)
  ]
}
