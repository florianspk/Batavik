<template>
  <div id="product-page" v-if=dataLoaded>
    <product-description :data="productData" />
    <same-product :products="simiProduct" v-if="simiProduct.length >= 1" />
    <comment-section :commentList="comments" />
  </div>
  
  <div v-else id="spinner">
    <spinner />

  </div>
</template>

<script>
import { ElNotification } from 'element-plus';
import productDescription from '../components/product_components/product_description.vue';
import sameProduct from '../components/product_components/same_product.vue';
import commentSection from '../components/product_components/comment_section.vue';
import spinner from '../components/global/spinner.vue';
import ProductService from '../services/ProductService';
import CommService from '../services/CommService';

export default {
  components: { 
    productDescription, 
    sameProduct, 
    commentSection, 
    spinner,
  },
  data() {
    return {
      productData: null,
      simiProduct: [],
      comments: [],
      dataLoaded: false,
    };
  },
  methods: {
    async getProductInfo() {
      try {
        const { data: product } = await ProductService.get(`/product/${this.$route.params.id}`);
        this.productData = product;
        if (product != null) this.dataLoaded = true;
        else this.notify();
      } catch (err) {
        this.notify();
      }
    },
    async getSimilaire() {
      const { data: products } = await ProductService.get('/products/best');
      this.simiProduct = products.products;
    },
    async getComments() {
      const { data: comments } = await CommService.get(`/comment/product/${this.$route.params.id}`);
      this.comments = comments;
    },
    notify() {
      ElNotification({
        title: 'Erreur',
        message: 'Impossible de récupéré le produit demandé',
        position: 'bottom-right',
        type: 'warning',
      });
    },
  },
  mounted() {
    this.getProductInfo();
    this.getSimilaire();
    this.getComments();
  },
};
</script>

<style scoped lang="scss">
#product-page {
  position: relative;
  top: 20%;
  margin: 0 5% 0 5%;
  height: min-content;
}
#spinner {
  margin: auto;
  margin-top: 30vh;
  margin-bottom: 30vh;
  height: 20vh;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ddd;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
  border-radius: 2rem;
}
</style>
