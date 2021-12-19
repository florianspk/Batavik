<template>
  <div class="cart-item" ref="cartItem">
    
    <div class="info">
      <img :src="getImg(data.img)" class="item-img" ref="cartImg" >

      <div class="item-name">
        {{data.name}}
      </div>

      <div class="item-quantity">
        X{{data.qte}}
      </div>

      <div class="item-price">
        {{data.price}} €
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
  },
  methods: {
    getImg: function (item) {
      return require('../../assets/logo.png');
    },
  },
  mounted: function () {
    this.$refs.cartItem.style.height = `${this.$refs.cartImg.clientWidth}px`;
    this.$refs.cartItem.style.marginBottom = `${this.margin}px`;
    this.$refs.cartItem.style.fontSize = this.fontSize;
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
  margin: 1% 0;
  width: 100%;
  border-radius: 1% / 5%;
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
      border-top-left-radius: 7%;
      border-bottom-left-radius: 7%;
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
