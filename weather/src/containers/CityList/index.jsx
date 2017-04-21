import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Input, Select } from 'antd'

// import cityiesList from '../../constants/cityCode'

import {
  updateNewCityInfo,
  fetchCityList
} from '../../modules/CityList/action'

const InputGroup = Input.Group
const Option = Select.Option


import { Cascader } from 'antd';

const options = [{
  value: 'zhejiang',
  label: '浙江',
  // children: [{
  //   value: 'hangzhou',
  //   label: 'Hangzhou',
  //   children: [{
  //     value: 'xihu',
  //     label: 'West Lake',
  //   }],
  // }],
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
    return (
      <div>
        <Cascader options={options} onChange={this.onChange} />
      </div>
    )
  }
}

const mapDispatchToProps = ({
  updateNewCityInfo,
  fetchCityList
})

export default connect(null, mapDispatchToProps)(CityList)
