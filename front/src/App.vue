<template>
  <div id="app" class="">

    <navbar v-if="isAdmin" />
    <router-view />
    <v-footer v-if="isAdmin" />

  </div>
</template>

<script>
import navbar from './components/global/g_navbar.vue';
import vFooter from './components/global/g_footer.vue';

export default {
  name: 'App',
  components: {
    navbar,
    vFooter,
  },
  computed: {
    isAdmin() {
      return !(this.$route.name === 'Admin');
    },
  },
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  min-height: 100vh;
}
#app {
  font-family: 'Roboto', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--font-color-main);
  overflow-x: hidden;
  background: #eee;
  height: 100vh;
}

@media screen and (orientation: portrait) {
  *{
    scrollbar-color: #eee transparent;
    scrollbar-width: thin;
  }

  /* Scrollbar style */
  *::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #eee;
    border-radius: 2rem;
    opacity: 0;
    transition: background-color 0.5s ease;
    -webkit-transition: background-color 0.5s ease-out;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: #ccc;
  }
}
</style>
