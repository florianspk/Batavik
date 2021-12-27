<template>
  <div id="similaire">
    <h1 id="title">Nos produits similaires</h1>
    <div id="container-simi">
      <gProduct class="product-item" :productInfo="product" :index="0" />
      <gProduct class="product-item" :productInfo="product2" :index="1" />
      <gProduct class="product-item" :productInfo="product" :index="2" />
    </div>
  </div>
</template>

<script>
import gProduct from '../global/g_products.vue';

export default {
  name: 'similaire',
  components: {
    gProduct,
  },
  data() {
    return {
      product: {
        name: 'Produit 2',
        id: 0,
        img: 'img2.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum turpis et.',
        price: '120€',
      },
      product2: {
        name: 'Produit 3',
        id: 0,
        img: 'img3.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum turpis et.',
        price: '350€',
      },
    };
  },
};
</script>

<style scoped lang="scss">
@media screen and (orientation: landscape) {
  #title {
    margin: 10vh 0;
    font-size: 3rem;
  }
  #similaire {
    #container-simi {
      display: flex;
      gap: 1%;
    }
  }
}

@media screen and (orientation: portrait) {
  #title {
    margin: 10vh 0;
    font-size: 3rem;
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
