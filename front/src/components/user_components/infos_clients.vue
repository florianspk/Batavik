<template>
  <div id=info-client>
    <side-client :userID="idUser" />
    <history-client :userID="idUser" />
  </div>
</template>

<script>
import sideClient from './side_client.vue';
import historyClient from './history_client.vue';

export default {
  name: 'clientinfo',
  components: {
    sideClient,
    historyClient,
  },
  data() {
    return {
      idUser: this.$route.params.id,
    };
  },
};
</script>

<style scoped lang="scss">
#info-client{
  position: relative;
  height: 100%;
  width: 90vw;
  margin-top: 2%;
  padding: 2vw;
  padding-top: 10%;
  left: 2.5vw;
  display: flex;
  background: #FFF;
  
}
</style>
