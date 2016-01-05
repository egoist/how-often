import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/index'
import promiseMiddleware from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware
)(createStore)

export default createStoreWithMiddleware(reducer)
