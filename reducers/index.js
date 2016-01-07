import { combineReducers } from 'redux'
import computeOften from './computeOften'
import loadStatus from './loadStatus'

export default combineReducers({
  computeOften,
  loadStatus
})
