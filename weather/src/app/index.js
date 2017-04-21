import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

import createSagaMiddleware from 'redux-saga'

import MainPage from '../containers/MainPage'
import rootReducer from '../modules/rootReducer'
import rootSaga from '../modules/rootSaga'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(
  rootReducer,
  applyMiddleware(logger),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById('weather-app')
)
