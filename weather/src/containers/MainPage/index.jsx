import React from 'react'

import CityList from '../CityList'
import CurrentCity from '../CurrentCity'
import Map from '../Map'

class MainPage extends React.Component {
  render () {
    return (
      <div>
        <CityList />
        <CurrentCity />
        <Map />
      </div>)
  }
}

export default MainPage
