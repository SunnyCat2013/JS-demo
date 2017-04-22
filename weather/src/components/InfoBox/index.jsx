import React from 'react'
import { connect } from 'react-redux'

import { Button } from 'antd'


import {
  removeCity
} from '../../modules/CityList/action'

import * as styles from './InfoBox.css'

class InfoBox extends React.Component {
  onClick = (cityId) => {
    const { cityInfo: { id, name } } = this.props
    const { removeCity } = this.props
    removeCity(`${name}-${id}`)
  }
  render () {
    const { cityInfo: { id, name, weather, wind } } = this.props
    return (
      <div
        key={id}
        className={styles.infoBox}
      >
        <div className={styles.info}>
          <div>
            城市名：{name}
          </div>
          <div>
            天气： {weather}
          </div>
          <div>
            风速： {wind}
          </div>
        </div>
        <div className={styles.remove}>
          <Button
            type='primary'
            icon='delete'
            onClick={(id) => this.onClick(id)}
          >
            删除
          </Button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = ({
  removeCity
})
export default connect(null, mapDispatchToProps)(InfoBox)
