import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import MainPage from '../containers/MainPage'

import rootReducer from '../modules/rootReducer'

let store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById('weather-app')
)
