<template>
  <div class="section">
    <h1 class="title" v-if="title"> {{title}} </h1>
    <div class="product-list">
      <products v-for="(product, i) in nbProduct" :key="i" :index="i" />
    </div>
  </div>
</template>

<script>
import Products from './g_products.vue';

export default {
  name: 'section-product',
  props: ['title', 'type', 'nbProduct'],
  components: { Products },
};
</script>

<style scoped lang="scss">
.section{
  display: flex;
  width: 83vw;
  margin: 1% auto 0 auto;
  padding: 1%;
  flex-wrap: wrap;
  flex: 1 1 30%;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
  background: #ffffff;
  overflow: hidden;
  .title {
    flex: 1 1 70%;
    margin-left: 2%;
    margin-right: 2.2%;
    margin-bottom: 1%;
    font-size: 2.5em;
    border-bottom: 0.3vh solid black;
  }
  .product-list{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    row-gap: 5vh;
  }
}

@media screen and (orientation: portrait) {
  .section{
    margin-top: 3vh;
    width: 90%;
    .title{ font-size: 1.7em; margin-bottom: 2vh; }
    .product-list { flex-direction: column; }
  }
}
</style>
