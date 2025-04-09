<template>
  <div id="app">
    <router-view />
    <FeedbackButton />
  </div>
</template>

<script>
import FeedbackButton from './components/FeedbackButton.vue'

export default {
  name: 'App',
  components: {
    FeedbackButton
  }
};
</script>

<style>
</style>
