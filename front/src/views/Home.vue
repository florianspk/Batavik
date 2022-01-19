<template>
  <div class="home-page">
    <carrousel />
    <section-product :products="bestSales" :title="'NOS MEILLEURES VENTES'" :type="'bestsellers'" />
    <section-product :products="topProducts" :title="'NOS PRODUITS PHARES'" :type="'highlight'" />
  </div>
</template>

<script>
import { ElNotification } from 'element-plus';
import Carrousel from '../components/home_components/h_carousel.vue';
import SectionProduct from '../components/global/g_section.vue';
import ProductService from '../services/ProductService';

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
      try {
        const { data: products } = await ProductService.get(`/products/best?size=${this.sizeProduct}`);
        this.bestSales = products.products;
      } catch (err) {
        this.notify('La catégorie "Nos meilleures ventes" n\'est pas disponible');
        console.error(err);
      }
    },
    async getTopProducts() {
      try {
        const { data: products } = await ProductService.get(`/products/top?size=${this.sizeProduct}`);
        this.topProducts = products.products;
      } catch (err) {
        this.notify('La catégorie "Nos produits phares" n\'est pas disponible');
        console.error(err);
      }
    },
    notify(message = '') {
      ElNotification({
        title: 'Erreur',
        message: message !== '' ? message : 'Impossible de récupérer les produits',
        position: 'bottom-right',
        type: 'warning',
      });
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
