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
    this.map = L.map(styles.map).setView({ lat: 39.9075, lon: 116.3972 }, 4)
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map)
  }
  componentWillReceiveProps (nextProps) {
    // console.log('current city infos', this.props.cityInfos);
    const { cityInfos } = nextProps
    console.log({cityInfos});
    // console.log('next city infos', cityInfos);
    // const newCityInfos = _.differenceBy(cityInfos, this.props.cityInfos, 'name')
    // console.log({newCityInfos});
    _.forEach(cityInfos, ({ coord, name, weather }) => {
    // const { coord, name, weather } = newCityInfos[0]
      console.log('in popup function',{ coord, name, weather })
      const popupLayer = L.popup()
                           .setLatLng(coord)
                           .setContent(`${name}: ${weather}`)
                           .openOn(this.map)
      this.map.setView(coord, 7)
    // // // popupLayer
    // // //  .openOn(this.map)
    // // this.map.setView(coord, 7)
    //   this.map.addLayer(popupLayer).openPopup()
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
