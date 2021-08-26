<template>
  <div class="product">
    <div class="img"></div>
    <div class="infos">
      <h1 class="title">Nom du produit {{index + 1}}</h1>
      <p class="descr">Description rapide</p>
      <a href="/product/2" class="link">Voir plus</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product',
  props: ['index'],
};
</script>

<style scoped lang="scss">
.product {
  position: relative;
  height: 550px;
  width: 30%;
  background: red;
  overflow: hidden;
  &:hover{
    .infos {
      bottom: 0%;
      padding: 2%;
      width: 96%;
    }
  }
  .img {
    position: relative;
    width: 100%;
    height: 100%;
    background: yellow;
  }
  .infos {
    position: absolute;
    width: 100%;
    height: 33%;
    bottom: -33%;
    background: red;
    transition-duration: 0.5s;
    .title {
      text-align: center;
      border-bottom: 0.3vh solid black;
      margin-bottom: 2%;
    }
    .descr {
      text-align: center;
      font-size: 1.2rem;
      margin-bottom: 2%;
    }
    .link {
      display: block;
      text-align: center;
      text-decoration: none;
      color: black;
    }
  }
}

@media screen and (orientation: portrait) {
  .product{
    height: 400px;
    width: 95%;
    margin-bottom: 1vh;
  }
}
</style>
