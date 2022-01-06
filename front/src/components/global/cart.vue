<template>
  <div id="cart">
    <div id="triangle"></div>
    <div id="title">{{"Panier"}}</div>
    
    <div id="cart-item">
      <cartItem v-for="(item, i) in cartList" :key="i" :data="item" />
    </div>

    <div id="cost">
      Coût total de la commande: <span id="cost-price">{{cost}} €</span>
    </div>

    <div id="button">
      <button id="clear">Vider le panier</button>
      <button id="validate" @click="navigateToCartPage">Voir le panier et passer la commande</button>
    </div>

  </div>
</template>

<script>
import cartItem from './cart_item.vue';

export default {
  name: 'cart',
  components: {
    cartItem,
  },
  data() {
    return {
      cartList: [{
        name: 'Produit 1 | 207cm x 100cm',
        img: 'img3.jpg',
        qte: 2,
        price: 115.99,
      }, {
        name: 'Produit 3 | Coloris 2',
        img: 'img1.jpg',
        qte: 1,
        price: 16.99,
      }, {
        name: 'Produit 2 | 39cm x 25cm',
        img: 'img2.jpg',
        qte: 5,
        price: 19.99,
      }],
      cost: 0,
    };
  },
  methods: {
    calcCost() {
      for (let i = 0; i < this.cartList.length; i++) {
        const product = this.cartList[i];
        this.cost += (product.price * product.qte);
      }
      this.cost = Math.round(this.cost * 100) / 100;
    },
    async getCartProducts() {
      const { data: products } = await this.$axios.get(`${this.$baseURL}:${this.$port.PRODUCT_SERVICE}/api/best/products?size=${this.nbSlide}`);
    },
    navigateToCartPage() {
      this.$router.push('/cart');
      this.$emit('close');
    },
  },
  mounted: function () {
    this.calcCost();
  },
};
</script>

<style scoped lang="scss">
#cart{
  position: absolute;
  width: 27vw;
  right: 2vw;
  top: 5vh;
  background: white;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
  z-index: 150;
  #triangle{
    position: absolute;
    top: -5%;
    right: 17%;
    width: 0;
    height: 0;
    border-left: 2vh solid transparent; 
    border-bottom: 2vh solid white;
    border-right: 2vh solid transparent;
  }
  #title{
    width: 93%;
    font-size: 1.3em;
    margin-left: 3%;
    margin-top: 2.5%;
    padding-bottom: 0.7%;
    border-bottom: 1px solid black;
  }
  #cart-item{
    width: 93%;
    margin-left: 3%;
    margin-top: 3%;
  }
  #cost{
    width: 93%;
    margin: 1vh 0vh 1vh 3%;
    padding-top: 2%;
    border-top: 1px solid black;
    #cost-price{
      position: absolute;
      right: 5%;
    }
  }
  #button{
    display: flex;
    justify-content: space-between;
    width: 93%;
    margin-left: 3%;
    height: 5vh;
    margin-top: 1vh;
    margin-bottom: 1vh;
    button{
      background: none;
      border: none;
      cursor: pointer;
      padding: 0 1rem;
      border-radius: 2rem;
    }
    #clear{
      background: #e1e1e1;
    }
    #validate{
      background: rgb(167, 209, 167);
    }
  }
}
@media screen and (orientation: portrait) {
  #cart{
    position: absolute;
    width: 95vw;
    right: 2vw;
    top: 5vh;
    background: white;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
    z-index: 21;
    #triangle{
      position: absolute;
      top: -5%;
      right: 12%;
      width: 0;
      height: 0;
      border-left: 2vh solid transparent; 
      border-bottom: 2vh solid white;
      border-right: 2vh solid transparent;
    }
    #title{
      width: 93%;
      font-size: 1.3em;
      margin-left: 3%;
      margin-top: 2.5%;
      padding-bottom: 0.7%;
      border-bottom: 1px solid black;
    }
    #cart-item{
      width: 93%;
      margin-left: 3%;
      margin-top: 3%;
    }
    #cost{
      width: 93%;
      margin: 1vh 0vh 1vh 3%;
      padding-top: 2%;
      border-top: 1px solid black;
      #cost-price{
        position: absolute;
        right: 5%;
      }
    }
    #button{
      display: flex;
      justify-content: space-between;
      width: 93%;
      margin-left: 3%;
      height: 5vh;
      margin-top: 1vh;
      margin-bottom: 1vh;
      button{
        background: none;
        border: none;
        cursor: pointer;
      }
      #clear{
        background: #e1e1e1;
      }
      #validate{
        background: rgb(167, 209, 167);
      }
    }
  }
}
</style>
