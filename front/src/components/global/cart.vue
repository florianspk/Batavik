<template>
  <div id="cart">
    <div id="triangle"></div>
    <div id="title">{{"Panier"}}</div>
    
    <div id="content" v-if="haveProduct">
      <div id="cart-item">
        <cartItem v-for="(item, i) in cartList.productCarts" :key="i" :data="item" @cost="calculatePrice" />
      </div>

      <div id="cost">
        Coût total de la commande: <span id="cost-price">{{ new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price) }}</span>
      </div>

      <div id="button">
        <button id="clear" @click="cleanCart">Vider le panier</button>
        <button id="validate" @click="navigateToCartPage">Voir le panier et passer la commande</button>
      </div>
    </div>

    <div id="no-product" class="msg" v-else-if="!haveProduct">
      Pas de produit dans le panier
    </div>

    <div id="error" class="msg" v-else>
      Erreur lors de la récupération des données
    </div>

  </div>
</template>

<script>
import cartItem from './cart_item.vue';
import AuthService from '../../services/AuthService';
import CartService from '../../services/CartService';

export default {
  name: 'cart',
  components: {
    cartItem,
  },
  data() {
    return {
      user: null,
      cartList: null,
      haveError: false,
      haveProduct: false,
      price: 0,
    };
  },
  methods: {
    navigateToCartPage() {
      this.$router.push('/cart');
      this.$emit('close');
    },
    async getIdentity() {
      try {
        const { data: user } = await AuthService.get('/auth/validateToken');
        this.user = user;
        this.getCartContent();
      } catch (error) {
        console.log(error);
        this.haveError = true;
      }
    },
    async getCartContent() {
      try {
        this.price = 0;
        const { data: cartContent } = await CartService.get(`/cart/${this.user.id}`);
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
        await CartService.delete(`/cart/clean/${this.cartList.id}`);
        this.getCartContent();
        this.haveProduct = false;
      } catch (error) {
        console.log(error);
        this.haveError = true;
      }
    },
    calculatePrice(price) {
      this.price += price;
    },
  },
  mounted: function () {
    this.getIdentity();
    window.addEventListener('updateCart', () => this.getCartContent());
  },
};
</script>

<style scoped lang="scss">
.msg {
  height: 20vh;
  padding: 2rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
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
