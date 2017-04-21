export const GET_CHILD_CITY_LIST = 'GET_CHILD_CITY_LIST'

export function getChildCityList (cityCode) {
  console.log('in action')
  return {
    type: GET_CHILD_CITY_LIST,
    text: cityCode
  }
}
