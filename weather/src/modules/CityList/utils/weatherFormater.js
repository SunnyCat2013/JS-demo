import _ from 'lodash'

export function formatCityInfos (cityInfos) {
  return _.map(cityInfos, ({ city, list }) => {
    const { id, name } = city
    const currentInfo = list[0]
    return {
      id,
      name,
      currentInfo
    }
  })
}
