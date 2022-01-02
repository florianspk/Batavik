<template>
  <div class="product">
    <div class="img">
      <img :src="data.image" alt="" :class="loadImage ? 'hide' : ''"  @load="loadImage = false" @error="loadImage = false">
      <spinner v-if="loadImage" class="center"></spinner>
    </div>
    <div class="infos">
      <h1 class="title">{{data.name}}</h1>
      <p class="descr">{{data.description}}</p>
      <a :href="'/product/' + data.id" class="link">
        Voir plus 
        <span>
          <img src="@/assets/icons/chevron-forward.svg">
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import spinner from './spinner.vue';

export default {
  name: 'product',
  props: ['index', 'data'],
  components: { spinner },
  data() {
    return {
      loadImage: false,
    };
  },
  watch: {
    data() {
      this.loadImage = true;
    },
  },
};
</script>

<style scoped lang="scss">
.hide {
  display: none;
}
.center{
  margin: 50%;
  transform: translate(-60%, -60%);
}
.product {
  position: relative;
  height: 550px;
  width: 30%;
  overflow: hidden;
  background: #ccc;
  &:hover{
    .infos {
      bottom: 0%;
      padding: 2%;
      width: 100%;
    }
  }
  .img {
    position: relative;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .infos {
    position: absolute;
    width: 100%;
    height: 40%;
    bottom: -40%;
    background: #eee;
    transition-duration: 0.5s;
    .title {
      text-align: center;
      border-bottom: 0.3vh solid black;
      margin-bottom: 2%;
      font-size: 2rem;
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
      font-size: 1.1rem;
      font-weight: bold;
      img {
        width: 7%
      }
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
