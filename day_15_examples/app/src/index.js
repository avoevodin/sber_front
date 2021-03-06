/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App'
import getInitState, { LOCAL_STORAGE_KEY } from './redux/store'
import rootReducer from './redux/reducers/rootReducer'

const store = createStore(rootReducer, getInitState(), composeWithDevTools())
store.subscribe(() => {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(store.getState()))
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
