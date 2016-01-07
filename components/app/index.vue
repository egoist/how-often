<style src="./style"></style>

<template>
  <div class="app">
    <corner></corner>
    <section class="section-a">
      <h1 class="sitename">
        <a href="/">How often do you create a repo on GitHub?</a>
      </h1>
      <input-box></input-box>
    </section>
    <section class="section-b">
      <compute-often></compute-often>
    </section>
  </div>
</template>

<script>
  export default {
    components: {
      inputBox: require('../inputBox'),
      computeOften: require('../computeOften'),
      corner: require('./corner')
    }
  }
</script>
