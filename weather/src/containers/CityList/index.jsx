import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Input, Select } from 'antd'

import cityiesList from '../../constants/cityCode'

import {
  getChildCityList
} from '../../modules/CityList/action'

const InputGroup = Input.Group
const Option = Select.Option


import { Cascader } from 'antd';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  disabled: true,
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}]

// const CityList = () => {
class CityList extends React.Component {
  onChange = (value) => {
  }
  componentDidMount () {
    const { getChildCityList } = this.props
    getChildCityList('hha')
  }
  render () {
    return (
      <div>
        <Cascader options={options} onChange={this.onChange} />
      </div>
    )
  }
}

const mapDispatchToProps = ({
  getChildCityList
})

export default connect(null, mapDispatchToProps)(CityList)
