<style src="./style" scoped></style>

<template>
  <input type="text" class="input" v-model="username" placeholder="GitHub username" @keyup.enter="handleEnter">
  <div class="result" v-if="often">
    You create a repo every {{ often }} days.
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        user: {}
      }
    },
    computed: {
      often () {
        if (this.user.created_at && this.user.public_repos) {
          let duration = Date.now() - new Date(this.user.created_at).getTime()
          duration = duration / 1000 / 86400 / this.user.public_repos
          return duration.toFixed(2)
        }
        return null
      }
    },
    methods: {
      handleEnter() {
        this.$http.get(`https://api.github.com/users/${this.username}`)
          .then(data => data.data)
          .then(data => {
            this.user = data
          })
      }
    }
  }
</script>
