import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { AutoComplete } from 'antd'

import cityiesInfo from '../../constants/ChinaCity.json'

import {
  updateNewCityInfo,
  fetchCityList
} from '../../modules/CityList/action'

function getCityNames () {
  return _(cityiesInfo)
          .map('name')
          .uniq()
          .value()
}

// const CityList = () => {
class CityList extends React.Component {
  onChange = (value) => {
    const { updateNewCityInfo } = this.props
    updateNewCityInfo(value)
  }
  componentDidMount () {
    const {
      updateNewCityInfo,
      fetchCityList
    } = this.props
    updateNewCityInfo('hha')
    fetchCityList()
  }
  render () {
    const cityNames = getCityNames()
    return (
      <div>
        <AutoComplete
          style={{ width: 200 }}
          dataSource={cityNames}
          placeholder='Try input Chinese Pinyin'
          filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
        />
      </div>
    )
  }
}

const mapDispatchToProps = ({
  updateNewCityInfo,
  fetchCityList
})

export default connect(null, mapDispatchToProps)(CityList)
