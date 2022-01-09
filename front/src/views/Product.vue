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
import productDescription from '../components/product_components/product_description.vue';
import sameProduct from '../components/product_components/same_product.vue';
import commentSection from '../components/product_components/comment_section.vue';
import spinner from '../components/global/spinner.vue';

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
      const { data: product } = await this.$axios.get(`${this.$baseURL}:${this.$port.PRODUCT_SERVICE}/api/product/${this.$route.params.id}`);
      this.productData = product;
      if (product != null) this.dataLoaded = true;
    },
    async getSimilaire() {
      const { data: products } = await this.$axios.get(`${this.$baseURL}:${this.$port.PRODUCT_SERVICE}/api/products/best`);
      this.simiProduct = products.products;
    },
    async getComments() {
      const { data: comments } = await this.$axios.get(`${this.$baseURL}:${this.$port.COMM_SERVICE}/api/comment/product/${this.$route.params.id}`);
      this.comments = comments;
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
