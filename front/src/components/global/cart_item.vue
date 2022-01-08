<template>
  <div class="cart-item" ref="cartItem">
    
    <div class="info">
      <img :src="productList.image" class="item-img" ref="cartImg" >

      <div class="item-name">
        {{productList.name}}
      </div>

      <div class="item-quantity">
        X{{data.quantity}}
      </div>

      <div class="item-price">
        {{ calculatePrice(data.unitPrice, data.quantity) }} €
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'cart-item',
  props: {
    data: Object,
    fontSize: String,
    background: Boolean,
    margin: Number,
    forcedHeight: Number,
  },
  data() {
    return {
      productList: {},
    };
  },
  methods: {
    calculatePrice(price, qte) {
      return price * qte;
    },
    getProductInormations() {
      this.$axios.get(`${this.$baseURL}:${this.$port.PRODUCT_SERVICE}/api/product/${this.data.idProduct}`)
        .then(({ data: product }) => {
          this.productList = product;
        });
    },
  },
  watch: {
    fontSize: function () {
      this.$refs.cartItem.style.fontSize = `${this.fontSize}rem`;
    },
  },
  mounted: function () {
    this.getProductInormations();
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
