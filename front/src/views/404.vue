<template>
<div id="container">
  <div class="error-page">404</div>
  <div class="text">Page non trouvée</div>
  <div class="btn-lst">
    <button class="home-btn" @click="redirect()">Revenir à l'acueil</button>
    <button class="home-btn" @click="redirect()">Reporter le problème</button>
  </div>
</div>
</template>

<script>
import router from '../router/index';

export default {
  name: '404',
  setup() {
    function redirect() {
      router.push('/');
    }

    return { redirect };
  },
};
</script>

<style scoped lang="scss">
#container{ width: 100vw; padding-top: 20vh; }
.error-page{ margin: auto; font-size: 8em; text-align: center; }
.text{ font-size: 2em; text-align: center; }
.btn-lst{ justify-content: center; top: 10vh; position: relative; gap: 2%; display: flex; }
.home-btn{ 
  padding: 1% 2%; 
  border: none; 
  background: var(--background); 
  cursor: pointer; 
  font-size: 1em;
  border-radius: var(--btn-corner);
  transition-duration: 0.2s;
  &:hover{
    background: var(--green-accent);
  }
}
</style>
