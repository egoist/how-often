import { handleActions } from 'redux-actions'

const initialState = {
  username: null,
  often: 0
}

export default handleActions({
    'compute often' (state, action) {
        const user = action.payload
        if (user.created_at && user.public_repos) {
          let duration = Date.now() - new Date(user.created_at).getTime()
          duration = duration / 1000 / 86400 / user.public_repos
          return {
            username: user.login,
            often: duration.toFixed(2)
          }
        }
        return state
    }
}, initialState)
