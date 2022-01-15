<template>
  <div id="app">

    <div id="admin" v-if="isAdmin" class="col">
      <navbar-admin/>
      <div class="col mt-5">
        <breadcrumb/>
        <router-view class="mt-5"/>
      </div>
    </div>

    <div id="user" v-else>
      <navbar/>
      <router-view/>
      <v-footer/>
    </div>

  </div>
</template>

<script>
import navbar from './components/global/g_navbar.vue';
import navbarAdmin from './components/admin/navbar-admin.vue';
import vFooter from './components/global/g_footer.vue';
import Auth from './services/Auth'

export default {
  name: 'App',
  components: {
    navbar,
    vFooter,
    navbarAdmin,
  },
  computed: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    isAdmin() {
      return (this.$route.path.includes('/admin'));
    },
  },
  methods: {
    setConfig() {
      return {
        headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
      };
    },
    
  },
  mounted() {
    Auth.getLoggined();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
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

*{
  scrollbar-color: #eee transparent;
  scrollbar-width: thin;
}

/* Scrollbar style */
*::-webkit-scrollbar {
  width: 10px;
  height: 8px;
  background-color: transparent;
}
*::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 2rem;
  opacity: 0;
  transition: background-color 0.5s ease;
  -webkit-transition: background-color 0.5s ease-out;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #ccc;
}

#admin {
  display: flex;
}

#user {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
