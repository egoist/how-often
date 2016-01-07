<style src="./style"></style>

<template>
  <div class="compute-often" v-if="computeOften.username">
    <a href="https://github.com/{{ computeOften.username }}">{{ computeOften.username }}</a>
    creates a repo every {{ computeOften.often }} days.
  </div>
</template>

<script>
  export default {
    data() {
      return {
        computeOften: this.$store.state.computeOften
      }
    },
    ready() {
      this.$subscribe('computeOften')
    }
  }
</script>
