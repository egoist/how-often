<style src="./style"></style>

<template>
  <div class="compute-often" v-if="computeOften.found && computeOften.username">
    <a href="https://github.com/{{ computeOften.username }}">{{ computeOften.username }}</a>
    creates a repo every {{ computeOften.often }} days.
    <div class="repos" v-if="computeOften.repos">
      <a href="https://github.com/{{ computeOften.username }}">{{ computeOften.username }}</a> owns
      {{ computeOften.repos }} repos.
    </div>
  </div>
  <div class="compute-often" v-if="!computeOften.found">
    <a href="https://github.com/{{ computeOften.username }}">{{ computeOften.username }}</a>
    is not found.
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
