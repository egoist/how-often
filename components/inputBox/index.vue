<style src="./style"></style>

<template>
  <input type="text" class="input" placeholder="GitHub username"
    v-model="username"
    @input="refreshHash"
    @keyup.enter="handleEnter">
  <span class="loading" v-if="loadStatus === 'loading'">Loading...</span>
</template>

<script>
  import { computeOften } from '../../actions/user'
  const username = location.hash ? location.hash.substring(1) : ''

  export default {
    data() {
      return {
        username,
        loadStatus: this.$store.state.loadStatus
      }
    },
    ready() {
      this.$subscribe('loadStatus')
      if (username) {
        this.$store.dispatch(computeOften(username))
      }
    },
    methods: {
      handleEnter() {
        this.$store.dispatch(computeOften(this.username))
        this.username = ''
      },
      refreshHash(e) {
        location.hash = e.currentTarget.value
      }
    }
  }
</script>
