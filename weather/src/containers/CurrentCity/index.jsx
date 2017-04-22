import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { createStructuredSelector } from 'reselect'

import {
  cityInfosSelector
} from '../../modules/CityList/selector'

import InfoBox from '../../components/InfoBox'

class CurrentCity extends React.Component {
  render () {
    const { cityInfos } = this.props
    return (
      <div>
        已添加的城市信息：
        {
          _.map(cityInfos, cityInfo => {
            return <div key={cityInfo.id}>
              <InfoBox cityInfo={cityInfo} />
            </div>
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
