<template>
  <div class="shower-page">
    <item-filter v-model:filter="filter" />
    <div v-if="productLoaded">
      <template v-if="products.length">
        <section-product :nbProduct="products.length" :type="'bestsellers'" :products="products" />
        <paginator 
          :totalPage="totalPage" 
          :currentPage="currentPage" 
          @change-page="changeCurentPage"
          @next-page="nextPage"
          @previous-page="previousPage"
        />
      </template>
      <template v-else>
        <div class="section">
          Aucun produit trouvé
        </div>
      </template>
    </div>
    <div v-else id="spinner">
      <spinner />
    </div>
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
      await ProductService.get(`/categ/3/products?${query}`)
        .then(({ data: products }) => {
          this.products = products.products;
          this.totalItems = products.totalItems;
          this.totalPage = products.totalPages;
          this.productLoaded = true
        })
        .catch((err) => {
          this.notify();
          console.error(err)
          return { data: { products: [] } }
        })
    },
    notify() {
      ElNotification({
        title: 'Erreur',
        message: 'Impossible de récupéré les produits',
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
.shower-page{ margin-top: 1vh; padding-top: 4vh; min-height: 73vh; }
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
.section{
  display: flex;
  width: 85vw;
  margin: 1% auto 0 auto;
  padding: 2% 1%;
  flex-wrap: wrap;
  flex: 1 1 30%;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
  background: #ffffff;
  border-radius: 1rem;
  overflow: hidden;
  font-size: 1.5rem;
}
</style>
