import React from 'react'
import { connect } from 'react-redux'

import _ from 'lodash'

import { Button } from 'antd'

import * as styles from './InfoBox.css'

class InfoBox extends React.Component {
  onClick = (cityId) => {
    console.log('hah', cityId);
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

export default InfoBox
