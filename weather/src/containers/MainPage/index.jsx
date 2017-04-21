import React from 'react'

import CityList from '../CityList'
import CurrentCity from '../CurrentCity'

class MainPage extends React.Component {
  render () {
    return (
      <div>
        <CityList />
        <CurrentCity />
      </div>)
  }
}

export default MainPage
