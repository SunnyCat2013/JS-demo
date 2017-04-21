import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { AutoComplete, Button } from 'antd'

import cityiesInfo from '../../constants/ChinaCity.json'

import {
  updateNewCityInfo,
  fetchCityWeather
} from '../../modules/CityList/action'

function getCityNames () {
  return _(cityiesInfo)
          .map('name')
          .uniq()
          .value()
}

class CityList extends React.Component {
  onChange = (value) => {
    const { updateNewCityInfo } = this.props
    updateNewCityInfo(value)
  }
  componentDidMount () {
    const {
      updateNewCityInfo,
      fetchCityWeather
    } = this.props
    updateNewCityInfo('hha')
    fetchCityWeather()
  }

  onSelect = (value) => {
    console.log('selected value:', value);
  }
  onClick = (value) => {
    console.log('on click', value);
  }
  render () {
    const cityNames = getCityNames()
    return (
      <div>
        <div>
          <AutoComplete
            style={{ width: 300 }}
            dataSource={cityNames}
            placeholder='由于使用的国外 API，所以请输入城市拼音'
            filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
            onSelect={this.onSelect}
          />
        <Button
          type="primary"
          onClick={this.onClick}
          loading={false}>
          添加城市
        </Button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = ({
  updateNewCityInfo,
  fetchCityWeather
})

export default connect(null, mapDispatchToProps)(CityList)
