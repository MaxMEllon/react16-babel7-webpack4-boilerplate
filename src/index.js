import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import reducer, { INITIAL_STATE } from './modules/redux/reducer'
import createStore from './store'
import App from './containers/App'

const store = createStore(reducer, INITIAL_STATE)

const initalRender = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  )

document.addEventListener('DOMContentLoaded', initalRender)
