<template>
  <div class="carousel">
    <div v-for="i in nbSlide" :key="i" class="slide-container">
    <transition tag="div" name="fade" class="slides-group">
      <slide 
        :content="'slide ' + i" 
        :key="i" 
        v-if="itemToShow == i" 
        @back="navigate(-1)"
        @next="navigate(1)"
      />
    </transition>
    </div>
  </div>
</template>

<script>
import Slide from './h_slide.vue';

export default {
  name: 'carrousel',
  components: { Slide },
  data() {
    return {
      itemToShow: 1,
    };
  },
  methods: {
    navigate(effect) {
      if (this.itemToShow + effect <= this.nbSlide && this.itemToShow + effect !== 0) {
        this.itemToShow += effect;
      } else if (this.itemToShow === this.nbSlide) {
        this.itemToShow = 1;
      } else if (this.itemToShow + effect === 0) {
        this.itemToShow = this.nbSlide;
      }
    },
  },
  setup() {
    const nbSlide = 5;

    return {
      nbSlide,
    };
  },
};
</script>

<style scoped lang="scss">
.carousel{
  position: relative;
  width: 85vw;
  height: 50vh;
  margin: auto;
  background: red;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

@media screen and (max-width: 720px) {
  .carousel{ width: 100%; height: 40vh; margin: -0vh 0; }
}

.fade-enter-active { transition: opacity 1s; }
.fade-enter { opacity: 0; }
</style>
