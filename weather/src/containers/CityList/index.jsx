import React from 'react'
import _ from 'lodash'
import { Input, Select } from 'antd'
import 'antd/dist/antd.css'

import cityiesList from '../../constants/cityCode'

const InputGroup = Input.Group
const Option = Select.Option

const CityList = () => {
  return (
    <div>
      <InputGroup>
        {
          _.map(cityiesList, (city, code) => (
            <Option key={code} value={city}>
              {city}
            </Option>
          ))
        }
      </InputGroup>
    </div>
  )
}

// console.log({cityiesList})

// class CityList extends React.Component {
//   render () {
//     return (
//       <div>
//       haha
//           {
//             _.map(cityiesList, (city, code) => {
//               return <div key={code} >
//                 {city}
//               </div>
//             })
//           }
//       </div>
//     )
//   }
// }



export default CityList
