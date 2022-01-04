<template>
  <div class="shower-page">
    <item-filter />
    <section-product :nbProduct="products.length" :type="'bestsellers'" :products="products" />
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
import ItemFilter from '../components/item_filter.vue';
import SectionProduct from '../components/global/g_section.vue';
import paginator from '../components/global/g_paginator.vue';

export default {
  name: 'douche',
  components: { ItemFilter, SectionProduct, paginator },
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
      const { data: products } = await this.$axios.get(`${this.$baseURL}:${this.$port.PRODUCT_SERVICE}/api/categ/2/products?size=${this.pageSize}&page=${this.currentPage}`);
      this.products = products.products;
      this.totalItems = products.totalItems;
      this.totalPage = products.totalPages;
      this.productLoaded = true;
      console.log(products);
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
.shower-page{ margin-top: 10vh; padding-top: 4vh; min-height: 86vh; }
</style>
