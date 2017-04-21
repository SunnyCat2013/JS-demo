import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { AutoComplete, Button } from 'antd'

import cityiesInfo from '../../constants/ChinaCity.json'

import {
  fetchCityWeather
} from '../../modules/CityList/action'

function getCityNames () {
  return _(cityiesInfo)
          .map('name')
          .uniq()
          .value()
}

class CityList extends React.Component {
  state = {
    selectedCity: ''
  }

  onSelect = (value) => {
    this.setState({
      selectedCity: value
    })
  }
  onClick = () => {
    const { selectedCity } = this.state
    const {
      fetchCityWeather
    } = this.props
    fetchCityWeather(selectedCity)
    this.setState({
      selectedCity: ''
    })
  }
  render () {
    const cityNames = getCityNames()
    const { selectedCity } = this.state
    return (
      <div>
        <div>
          <AutoComplete
            style={{ width: 300 }}
            dataSource={cityNames}
            placeholder='由于使用的国外 API，所以请输入城市拼音'
            value={selectedCity}
            filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
            onSelect={this.onSelect}
          />
          <Button
            type='primary'
            onClick={this.onClick}
            loading={false}>
          添加城市
        </Button>
        </div>
        <div>
          已添加的城市信息：
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = ({
  fetchCityWeather
})

export default connect(null, mapDispatchToProps)(CityList)
