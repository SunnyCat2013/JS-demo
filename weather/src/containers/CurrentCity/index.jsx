import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'


import { createStructuredSelector } from 'reselect'

import {
  cityInfosSelector
} from '../../modules/CityList/selector'

import * as styles from './CurrentCity.css'

import InfoBox from '../../components/InfoBox'

class CurrentCity extends React.Component {

  render () {
    const { cityInfos } = this.props
    console.log({cityInfos})
    return (
      <div>
        已添加的城市信息：
        {
          _.map(cityInfos, cityInfo => {
            return <InfoBox cityInfo />
          })
        }
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  cityInfos: cityInfosSelector
})

export default connect(mapStateToProps, null)(CurrentCity)
