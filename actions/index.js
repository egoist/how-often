import createAction from 'redux-actions'
import Vue from 'vue'

export computedOftenAction = createAction('compute often', async username => {
  const user = await Vue.$http.get(`https://api.github.com/users/${username}`)
    .then(data => data.data)
})
