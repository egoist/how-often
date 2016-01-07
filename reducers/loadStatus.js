import { handleActions } from 'redux-actions'

export default handleActions({
  'loading' () {
    return 'loading'
  },
  'loaded' () {
    return 'loaded'
  }
}, '')
