<template>
  <div class="shower-page">
    <item-filter />
    <section-product v-if="productLoaded" :nbProduct="products.length" :type="'bestsellers'" :products="products" />
    <div v-else id="spinner">
      <spinner />
    </div>
    <paginator 
      v-if="productLoaded"
      :totalPage="totalPage" 
      :currentPage="currentPage" 
      @change-page="changeCurentPage"
      @next-page="nextPage"
      @previous-page="previousPage"
    />
  </div>
</template>

<script>
import { ElNotification } from 'element-plus';
import ItemFilter from '../components/item_filter.vue';
import SectionProduct from '../components/global/g_section.vue';
import paginator from '../components/global/g_paginator.vue';
import spinner from '../components/global/spinner.vue';
import ProductService from '../services/ProductService';

export default {
  name: 'douche',
  components: { 
    ItemFilter,
    SectionProduct,
    paginator,
    spinner,
  },
  data() {
    return {
      // Pagination settings
      totalItems: 0,
      currentPage: 1,
      totalPage: 0,
      products: [],
      productLoaded: false,

      // Filter settings
      pageSize: 6,

    };
  },
  methods: {
    async getProducts() {
      try {
        const { data: products, status } = await ProductService.get(`/categ/2/products?size=${this.pageSize}&page=${this.currentPage}`);
        if (status === 200) {
          this.products = products.products;
          this.totalItems = products.totalItems;
          this.totalPage = products.totalPages;
          this.productLoaded = true;
        } else this.notify();
      } catch (err) {
        this.notify();
      }
    },
    notify() {
      ElNotification({
        title: 'Erreur',
        message: 'Impossible de récupérer les produits',
        position: 'bottom-right',
        type: 'warning',
      });
    },
    changeCurentPage(page) {
      this.currentPage = page;
      this.getProducts();
    },
    nextPage() {
      if (this.currentPage < this.totalPage) {
        this.currentPage++;
        this.getProducts();
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getProducts();
      }
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped lang="scss">
.shower-page{ margin-top: 1vh; padding-top: 4vh; min-height: 74vh; }
#spinner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  margin-left: 50%;
  margin-top: 15vh;
  transform: translate(-50%);
  background: #ddd;
  border-radius: 5rem;
  padding: 5rem;
}
</style>
