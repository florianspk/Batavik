<template>
  <div id="product-page" v-if=dataLoaded>
    <product-description :data="productData" />
    <same-product />
    <comment-section />
  </div>
</template>

<script>
import productDescription from '../components/product_components/product_description.vue';
import sameProduct from '../components/product_components/same_product.vue';
import commentSection from '../components/product_components/comment_section.vue';

export default {
  components: { productDescription, sameProduct, commentSection },
  data() {
    return {
      productData: null,
      dataLoaded: false,
    };
  },
  methods: {
    async getProductInfo() {
      const { data: product } = await this.$axios.get(`${this.$baseURL}:${this.$port.PRODUCT_SERVICE}/api/product/${this.$route.params.id}`);
      this.productData = product;
      this.dataLoaded = true;
    },
  },
  mounted() {
    this.getProductInfo();
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
</style>
