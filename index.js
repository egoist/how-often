import Vue from 'vue'
import app from './components/app'

Vue.use(require('vue-resource'))
Vue.use(require('revue'), {
  store
})

if (__DEV__) {
  Vue.config.debug = true
}

new Vue({
  el: 'body',
  components: {
    app
  }
})
