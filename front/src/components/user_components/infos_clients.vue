<template>
  <div id=info-client>
    <side-client :user="user" />
    <history-client :history="userHistory" />
  </div>
</template>

<script>
import sideClient from './side_client.vue';
import historyClient from './history_client.vue';
import AuthService from '../../services/AuthService';
import OrderService from '../../services/OrderService';

export default {
  name: 'clientinfo',
  components: {
    sideClient,
    historyClient,
  },
  data() {
    return {
      idUser: this.$route.params.id,
      user: {},
      userHistory: [],
    };
  },
  methods: {
    getUser() {
      AuthService.get('/auth/user')
        .then(({ data: user }) => {
          this.user = user;
          this.getUserHistory();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getUserHistory() {
      OrderService.get(`/order/allByUser/${this.user.id}`)
        .then(({ data: userHistory }) => {
          this.userHistory = userHistory;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getUser();
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
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
  border-radius: 2rem;
}
</style>
