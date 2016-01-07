import Vue from 'vue'
import Revue from 'revue'
import app from './components/app'
import store from './store'

Vue.use(Revue, {
  store
})

if (__DEV__) {
  Vue.config.debug = true
  window.Vue = Vue
  window.store = store
}

new Vue({
  el: 'body',
  components: {
    app
  }
})
