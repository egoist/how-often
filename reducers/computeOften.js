import { handleActions } from 'redux-actions'

const initialState = {
  username: null,
  often: 0,
  found: true
}

export default handleActions({
  'not found' (state, action) {
    return {
      ...state,
      ...action.payload,
      found: false
    }
  },
  'compute often' (state, action) {
      const user = action.payload
      if (user.created_at) {
        let duration = Date.now() - new Date(user.created_at).getTime()
        duration = duration / 1000 / 86400 / user.public_repos
        const often = user.public_repos ? duration.toFixed(2) : 0
        return {
          username: user.login,
          often,
          found: true,
          repos: user.public_repos
        }
      }
      return state
  }
}, initialState)
