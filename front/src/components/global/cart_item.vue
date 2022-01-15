<template>
  <div class="cart-item" ref="cartItem">
    
    <div class="info">
      <img :src="productList.image" class="item-img" ref="cartImg" >

      <div class="item-name">
        {{productList.name}}
      </div>

      <div class="item-quantity" v-if="!canEditQte">
        X{{data.quantity}}
      </div>

      <div v-else>
        <select name="qte" id="qte" v-model="qte" @change="changeQte">
          <option v-for="i in maxqte" :key="i" :value="i">{{i}}</option>
        </select>
      </div>

      <div class="item-price">
        {{ new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(calculatedPrice) }}
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'cart-item',
  props: {
    data: Object,
    fontSize: Number,
    background: Boolean,
    margin: Number,
    forcedHeight: Number,
    canEditQte: Boolean,
  },
  data() {
    return {
      productList: {},
      calculatedPrice: 0,
      user: null,
      maxqte: 10,
      qte: 1,
    };
  },
  methods: {
    setConfig() {
      return {
        headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
      };
    },

    calculatePrice(price, qte) { return price * qte; },

    async getProductInformations() {
      try {
        const { data: product } = await this.$axios.get(`${this.$baseURL}:${this.$port.PRODUCT_SERVICE}/api/product/${this.data.idProduct}`);
        this.productList = product;
        this.calculateCost();
        this.qte = this.data.quantity;
      } catch (error) {
        console.log(error);
        this.haveError = true;
      }
    },

    async getIdentity() {
      try {
        const { data: user } = await this.$axios.get(`${this.$baseURL}:${this.$port.AUTH_SERVICE}/api/auth/validateToken`, this.setConfig());
        this.user = user;
      } catch (error) {
        console.log(error);
        this.haveError = true;
      }
    },

    async changeQte() {
      await this.getIdentity();

      const postData = {
        idUser: this.user.id,
        idProduct: this.data.idProduct,
        quantity: this.qte,
      };

      this.calculatedPrice = 0;
      this.calculateCost();
      await this.$axios.post(`${this.$baseURL}:${this.$port.CART_SERVICE}/api/cart/quantityProduct`, postData, this.setConfig());
      window.dispatchEvent(new Event('updateCart'));
      this.$emit('qteChange');
    },

    calculateCost() {
      this.calculatedPrice = this.productList.price * this.qte;
      this.$emit('cost', this.calculatedPrice);
    },

  },
  watch: {
    fontSize() {
      this.$refs.cartItem.style.fontSize = `${this.fontSize}rem`;
    },
  },
  mounted() {
    this.getProductInformations();
    if (this.forcedHeight) this.$refs.cartItem.style.height = `${this.forcedHeight}vh`;
    else this.$refs.cartItem.style.height = `${this.$refs.cartImg.clientWidth}px`;

    this.$refs.cartItem.style.marginBottom = `${this.margin}px`;
    this.$refs.cartItem.style.fontSize = `${this.fontSize}rem`;

    if (this.background) {
      this.$refs.cartItem.style.background = '#';
      this.$refs.cartItem.style.boxShadow = '#aaa 0.5vh 0.5vh 1vh';
    }
  },
};
</script>

<style scoped lang="scss">
.cart-item{
  position: relative;
  height: 5vh;
  margin: 1rem 0;
  padding: 0 2rem 0 0;
  width: 100%;
  border-radius: 1rem;
  background: #eee;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  .info{
    height: 100%;
    display: flex;
    align-items: center;
    .item-img{
      height: 100%;
      width: 15%;
      object-fit: cover;
      margin-right: 2%;
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
    }
    #qte {
      width: 125%;
      text-align: center;
      border-radius: 2rem;
      border:#a1a1a1 1px solid;
      padding: 0.5% 2%;
      option {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        z-index: 99;
        border:#a1a1a1 1px solid;
        border-radius: 2rem;
        box-sizing: border-box;
      }
    }
    .item-name{
      width: 55%;
    }
    .item-quantity{
      width: 7%
    }
    .item-price{
      width: 20%;
      text-align: right;
    }
  }
}
</style>
