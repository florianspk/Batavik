<template>
  <div id="app">

    <navbar />
    <router-view />

    
  </div>
</template>

<script>
import navbar from './components/global/g_navbar'

export default {
  name: "App",
  components: {
    navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--font-color-main);
}
</style>
