export const UPDATE_NEW_CITY_INFO = 'UPDATE_NEW_CITY_INFO'

export function updateNewCityInfo (cityInfo) {
  return {
    type: UPDATE_NEW_CITY_INFO,
    text:cityInfo 
  }
}
