import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { createStructuredSelector } from 'reselect'

import L from 'leaflet'
// import 'leaflet/dist/leaflet.css'

import {
  cityInfosSelector
} from '../../modules/CityList/selector'

import * as styles from './Map.css'

import InfoBox from '../../components/InfoBox'

class CurrentCity extends React.Component {
  componentDidMount () {
    this.map = L.map(styles.map).setView({ lat: 39.9075, lon: 116.3972 }, 7)
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map)
  }
  componentWillReceiveProps (nextProps) {
    const { cityInfos } = nextProps
    _.forEach(cityInfos, ({ coord, name, weather }) => {
      console.log({ coord, name, weather })
      L.popup()
       .setLatLng(coord)
       .setContent(`${name}: ${weather}`)
       .openOn(this.map)
    })
  }
  render () {
    return (
      <div id={styles.map} className={styles.map}></div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  cityInfos: cityInfosSelector
})

export default connect(mapStateToProps, null)(CurrentCity)
