import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { createStructuredSelector } from 'reselect'

import {
  cityInfosSelector
} from '../../modules/CityList/selector'

import * as styles from './CurrentCity.css'

class CurrentCity extends React.Component {
  render () {
    const { cityInfos } = this.props
    console.log({cityInfos})
    return (
      <div>
        已添加的城市信息：
        {
          _.map(cityInfos, ({ id, name, weather, wind }) => {
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
                  删除
                </div>
              </div>
            )
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
