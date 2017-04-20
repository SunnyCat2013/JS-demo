import React from 'react'
import _ from 'lodash'
import { Input, Select } from 'antd'
import 'antd/dist/antd.css'

import cityiesList from '../../constants/cityCode'

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
    console.log(value)
  }
  render () {
    return (
      <div>
        <Cascader options={options} onChange={this.onChange} />
      </div>
    )
  }
}

export default CityList
