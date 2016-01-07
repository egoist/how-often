import { createAction } from 'redux-actions'
import { fetchUser as fetchUserApi } from '../api'

export const loading = createAction('loading')
export const fetchUser = createAction('compute often')
export const loaded = createAction('loaded')

export function computeOften(username) {
  return async dispatch => {
    dispatch(loading())
    dispatch(fetchUser(await fetchUserApi(username)))
    dispatch(loaded())
  }
}
