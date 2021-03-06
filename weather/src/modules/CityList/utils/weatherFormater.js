import _ from 'lodash'

export function formatCityInfos (cityInfos) {
  return _.map(cityInfos, ({ city, list }) => {
    const { id, name, coord } = city
    const currentInfo = list[0]
    const weather = currentInfo.weather[0].description
    const wind = currentInfo.wind.speed
    return {
      coord,
      currentInfo,
      id,
      name,
      weather,
      wind
    }
  })
}
