<template>
  <div id="cart-view">

    <h1 id="title">Panier</h1>

    <div id="cart-items" v-if="haveProduct">
      <cart-item v-for="(item, i) in cartList.productCarts" :key="i" :data="item" :fontSize="itemFontSize" :forcedHeight="12" />
    </div>

    <div id="total" v-if="haveProduct">
      <h2 id="line">Total du panier: {{cartList.cartPrice}}€</h2>
    </div>

    <div id="buttons">
      <button class="btn" id="validate" @click="validate()">Valider</button>
      <button class="btn" id="clear" @click="cleanCart()">Vider le panier</button>
    </div>
  </div>
</template>

<script>
import cartItem from '../components/global/cart_item.vue';

export default {
  name: 'Cart View',
  components: { cartItem },
  data() {
    return {
      user: null,
      cartList: null,
      haveProduct: false,
    };
  },
  methods: {
    setFontSize() {
      this.itemFontSize = window.innerHeight > window.innerWidth ? 1.1 : 1.7;
    },
    setConfig() {
      return {
        headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
      };
    },
    async getIdentity() {
      try {
        const { data: user } = await this.$axios.get(`${this.$baseURL}:${this.$port.AUTH_SERVICE}/api/auth/validateToken`, this.setConfig());
        this.user = user;
        this.getCartContent();
      } catch (error) {
        console.log(error);
        this.haveError = true;
      }
    },
    async getCartContent() {
      try {
        const { data: cartContent } = await this.$axios.get(`${this.$baseURL}:${this.$port.CART_SERVICE}/api/cart/${this.user.id}`, this.setConfig());
        if (cartContent.length !== 0) {
          this.cartList = cartContent;
          this.haveProduct = true;
        }
      } catch (error) {
        console.log(error);
        this.haveError = true;
      }
    },
    async cleanCart() {
      try {
        const response = await this.$axios.delete(`${this.$baseURL}:${this.$port.CART_SERVICE}/api/cart/clean/${this.cartList.id}`, this.setConfig());
        this.getCartContent();
      } catch (error) {
        console.log(error);
        this.haveError = true;
      }
    },
  },
  mounted() {
    window.addEventListener('resize', () => this.setFontSize());
    this.setFontSize();
    this.getIdentity();
    // TODO Ajouter les appels Axios
  },
};
</script>

<style scoped lang="scss">
#cart-view {
  position: relative;
  margin: auto;
  margin-top: 4vh;
  width: 80%;
  background: #fff;
  border-radius: 2rem;
  padding: 2rem;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);

  #title {
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(
      to right, 
      black, 
      rgba(0, 0, 0, 0)
    ) 0 0 1 0;
  }
  #cart-items {
    display: flex;
    flex-direction: column;
    margin-bottom: 5vh;
  }

  #total {
    position: relative;
    bottom: 5vh;
    display: flex;
    justify-content: flex-end;
    padding-top: 1vh;
    width: 90%;
    right: 2vw;
    position: absolute;
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(
      to left, 
      black, 
      rgba(0, 0, 0, 0)
    ) 1 0 0 0;
  }

  #validate{
    background: #a7d1a7;
    &:hover{
      background: #94b894;
    }
  }

  #buttons{
    position: relative;
    bottom: 1vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 25%;
    .btn{
      width: 45%;
      border-radius: 2rem;
    }
    #clear{
      background: #e1e1e1;
      &:hover{
        background: #d2d2d2;
      }
    }
  }
}

@media screen and (orientation: portrait) {
  #cart-view {
    margin-top: 8vh;
  }
}
</style>
