import { createSelector } from 'reselect'

import {
  formatCityInfos
} from './utils/weatherFormater'

export const loadingSelector = state => state.cityList.loading

// export const cityInfos = state => state.cityList.cityInfos
export const cityInfos = state => state.cityList.cityInfos

export const cityInfosSelector = createSelector(
  cityInfos,
  formatCityInfos
)
