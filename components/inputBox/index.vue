<style src="./style"></style>

<template>
  <input type="text" class="input" v-model="username" placeholder="GitHub username" @keyup.enter="handleEnter">
  <span v-if="loadStatus === 'loading'">Loading...</span>
</template>

<script>
  import { computeOften } from '../../actions/user'

  export default {
    data() {
      return {
        username: '',
        loadStatus: this.$store.state.loadStatus
      }
    },
    ready() {
      this.$subscribe('loadStatus')
    },
    methods: {
      handleEnter() {
        this.$store.dispatch(computeOften(this.username))
        this.username = ''
      }
    }
  }
</script>
