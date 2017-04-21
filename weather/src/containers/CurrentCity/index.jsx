import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { createStructuredSelector } from 'reselect'

import {
  cityInfosSelector
} from '../../modules/CityList/selector'

class CurrentCity extends React.Component {
  render () {
    console.log(this.props.cityInfos);
    console.log('this.props in current city', this.props);
    return (
      <div>
        已添加的城市信息：
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  cityInfos: cityInfosSelector
})

export default connect(mapStateToProps, null)(CurrentCity)
