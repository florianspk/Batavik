<template>
  <div id="similaire">
    <h1 id="title">Nos produits similaires</h1>
    <div id="container-simi">
      <gProduct class="product-item" v-for="(product, i) in products" :key="i" :data="product" :index="0" />
    </div>
  </div>
</template>

<script>
import gProduct from '../global/g_products.vue';

export default {
  name: 'similaire',
  props: ['products'],
  components: {
    gProduct,
  },
};
</script>

<style scoped lang="scss">
@media screen and (orientation: landscape) {
  #title {
    margin: 2% 0 2% 0;
    font-size: 3rem;
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient(
      to right, 
      black, 
      rgba(0, 0, 0, 0)
    ) 0 0 1 0;
  }
  #similaire {
    background: #fff;
    border-radius: 2rem;
    padding: 0.5rem 2rem 2rem 2rem;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
    margin: 2% 0;
    #container-simi {
      display: flex;
      justify-content: space-between;
      gap: 1%;
    }
  }
}

@media screen and (orientation: portrait) {
  #title {
    margin: 10vh 0 2% 0;
    font-size: 3rem;
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(
      to right, 
      black, 
      rgba(0, 0, 0, 0)
    ) 1 0 0 0;
  }
  #similaire {
    #container-simi {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5%;
    }
  }
}
</style>
