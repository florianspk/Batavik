<template>
  <div class="home-page">
    <carrousel />
    <section-product :products="bestSales" :title="'NOS MEILLEURES VENTES'" :type="'bestsellers'" />
    <section-product :products="topProducts" :title="'NOS PRODUITS PHARES'" :type="'highlight'" />
  </div>
</template>

<script>
import Carrousel from '../components/home_components/h_carousel.vue';
import SectionProduct from '../components/global/g_section.vue';

export default {
  name: 'Home',
  components: { Carrousel, SectionProduct },
  data() {
    return {
      bestSales: [],
      topProducts: [],
      sizeProduct: 6,
    };
  },
  methods: {
    async getBestSales() {
      const { data: products } = await this.$axios.get(`${this.$baseURL}:${this.$port.PRODUCT_SERVICE}/api/products/best?size=${this.sizeProduct}`);
      this.bestSales = products.products;
    },
    async getTopProducts() {
      const { data: products } = await this.$axios.get(`${this.$baseURL}:${this.$port.PRODUCT_SERVICE}/api/products/top?size=${this.sizeProduct}`);
      this.topProducts = products.products;
    },
  },
  mounted() {
    this.getBestSales();
    this.getTopProducts();
  },
};
</script>

<style lang="scss" scoped>
.home-page{ margin-top: 0vh; padding-top: 4vh; min-height: 86vh; }
</style>
