import { createAction } from 'redux-actions'
import { fetchUser as fetchUserApi } from '../api'

export const loading = createAction('loading')
export const fetchUser = createAction('compute often')
export const loaded = createAction('loaded')
export const notFound = createAction('not found')

export function computeOften(username) {
  return async dispatch => {
    dispatch(loading())
    const user = await fetchUserApi(username)
    if (user.status === 404) {
      dispatch(notFound({ username }))
    } else {
      console.log()
      dispatch(fetchUser(await user.json()))
    }
    dispatch(loaded())
  }
}
