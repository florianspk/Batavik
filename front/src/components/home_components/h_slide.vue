<template>
  <div class="slide">
    <div class="background">
      <img :src="image" alt="" :class="!imgLoaded ? 'hide' : ''" @load="imgLoaded = true">
      <spinner v-if="!imgLoaded" />
    </div>
    <div class="banner"> {{content}} </div> 

    <img src="@/assets/icons/chevron-back.svg" class="btn btn-back" @click="$emit('back')">
    <img src="@/assets/icons/chevron-forward.svg" class="btn btn-next" @click="$emit('next')">
  </div>
</template>

<script>
import spinner from '../global/spinner.vue';

export default {
  name: 'slide',
  props: ['content', 'image'],
  data() {
    return {
      imgLoaded: false,
    };
  },
  components: { spinner },
};
</script>

<style scoped lang="scss">
.hide {
  display: none;
}
.slide{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  .background {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: #ddd;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &:hover .banner {
    bottom: 0;
  }
  &:hover .btn { opacity: 1; cursor: pointer; }
  .banner{
    position: absolute;
    display: flex;
    bottom: -33%;
    left: 0;
    height: 33%;
    width: 100%;
    background: rgba(255, 255, 255, 0.85);
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    user-select: none;
    transition: 0.5s;
  }
  .btn {
    position: absolute;
    top: 0;
    height: 100%;
    width: 7%;
    opacity: 0;
    transition: 0.5s;
  }
  .btn-next{ right: 0;}
}

@media screen and (max-width: 720px) {
  .slide{
    .btn{ width: 5%; }
    .banner { bottom: 0%; }
    .btn {
      opacity: 1;
      width: 20%;
    }
    .btn-next{ right: -3%; }
    .btn-back{ left: -3%; }
  }
}
</style>
