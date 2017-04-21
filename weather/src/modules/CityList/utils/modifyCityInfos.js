import _ from 'lodash'

export function removeCityInfoById (state, id) {
  return _.omit(state, `cityInfos.${id}`)
}
