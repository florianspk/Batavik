<template>
  <div id="cart-view">

    <h1 id="title">Panier</h1>

    <div id="card-items">
      <cart-item :data="item" :fontSize="itemFontSize" forcedHeight=10 />
      <cart-item :data="item" :fontSize="itemFontSize" forcedHeight=10 />
      <cart-item :data="item" :fontSize="itemFontSize" forcedHeight=10 />
      <cart-item :data="item" :fontSize="itemFontSize" forcedHeight=10 />
    </div>

    <div id="total">
      <h2 id="line">Total du panier: {{totalPrice}}€</h2>
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
      item: {
        name: 'Produit 1 | 207cm x 100cm',
        img: 'img3.jpg',
        qte: 2,
        price: 115.99,
      },
      totalPrice: 463.96,
      itemFontSize: 1.7,
    };
  },
  methods: {
    setFontSize() {
      this.itemFontSize = window.innerHeight > window.innerWidth ? 1.1 : 1.7;
    },
  },
  mounted() {
    window.addEventListener('resize', () => this.setFontSize());
    this.setFontSize();
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
  min-height: 70vh;
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

  #total {
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
}

@media screen and (orientation: portrait) {
  #cart-view {
    margin-top: 8vh;
  }
}
</style>
