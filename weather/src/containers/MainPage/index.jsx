import React from 'react'

import CityList from '../CityList'
import CurrentCity from '../CurrentCity'
import Map from '../Map'

import * as styles from './MainPage.css'

class MainPage extends React.Component {
  render () {
    return (
      <div className={styles.main}>
        <div className={styles.left}>
          <CityList />
          <CurrentCity />
        </div>
        <div className={styles.right}>
          <Map />
        </div>
      </div>)
  }
}

export default MainPage
