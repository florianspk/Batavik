<template>
  <div id="client">

    <div id="title">{{"Espace client"}}</div>
    <infoClient />
    
  </div>
</template>

<script>
import infoClient from '../components/user_components/infos_clients.vue';

export default {
  name: 'user',
  components: {
    infoClient,
  },
};
</script>

<style scoped lang="scss">
#client{
  position: relative;
  margin: 0 auto;
  #title{
    position: absolute;
    width: 80%;
    font-size: 4em;
    font-weight: lighter;
    margin-left: 5%;
    margin-bottom: 2%;
    padding-top: 2%;
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(
      to right, 
      black, 
      rgba(0, 0, 0, 0)
    ) 0 0 1 0;
    color: #222222;
    z-index: 1;
  }
}
</style>
