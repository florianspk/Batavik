<template>
  <div class="shower-page">
    <item-filter v-model:filter="filter" />
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
import ProductService from '../services/ProductService';

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
      filter: {
        q: null,
        minPrice: null,
        maxPrice: null,  
      },

    };
  },
  watch: {
    filter: {
      handler() { this.getProducts() },
      deep: true,
    },
  },
  methods: {
    async getProducts() {
      const params = {
        ...this.filter,
        size: this.pageSize,
        page: this.currentPage,
      }
      const query = Object
        .keys(params)
        .map((key) => (params[key] != null ? `${key}=${params[key]}` : null))
        .filter((a) => a != null)
        .join('&')
      const { data: products } = await ProductService.get(`/categ/3/products?${query}`);
      this.products = products.products;
      this.totalItems = products.totalItems;
      this.totalPage = products.totalPages;
      this.productLoaded = true;
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
.shower-page{ margin-top: 1vh; padding-top: 4vh; min-height: 86vh; }
</style>
