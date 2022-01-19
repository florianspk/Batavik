<template>
  <div class="carousel">
    <div v-for="(slide, i) in slides" :key="i" class="slide-container">
    <transition tag="div" name="fade" class="slides-group">
      <slide 
        :content="slide.name"
        :image="slide.image"
        :key="i+1" 
        v-if="itemToShow == i+1" 
        @back="navigate(-1)"
        @next="navigate(1)"
      />
    </transition>
    </div>
  </div>
</template>

<script>
import { ElNotification } from 'element-plus';
import Slide from './h_slide.vue';
import ProductService from '../../services/ProductService';

export default {
  name: 'carrousel',
  components: { Slide },
  data() {
    return {
      itemToShow: 1,
      nbSlide: 5,
      slides: [],
    };
  },
  methods: {
    navigate(effect) {
      if ((this.itemToShow + effect <= this.nbSlide) && (this.itemToShow + effect !== 0)) {
        this.itemToShow += effect;
      } else if (this.itemToShow === this.nbSlide) {
        this.itemToShow = 1;
      } else if (this.itemToShow + effect === 0) {
        this.itemToShow = this.nbSlide - 1;
      }
    },
    async getSlidesProducts() {
      try {
        const { data: products } = await ProductService.get(`/products/best?size=${this.nbSlide}`);
        this.slides = products.products;
      } catch (err) {
        this.notify('Impossible de charger les produits mis en avant');
        console.error(err);
      }
    },
    notify(message = '') {
      ElNotification({
        title: 'Erreur',
        message: message !== '' ? message : 'Impossible de récupérer les produits',
        position: 'bottom-right',
        type: 'warning',
      });
    },
  },
  mounted() {
    this.getSlidesProducts();
  },
};
</script>

<style scoped lang="scss">
.carousel{
  position: relative;
  width: 85vw;
  height: 50vh;
  margin: auto;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  border-radius: 1rem;
}

@media screen and (max-width: 720px) {
  .carousel{ width: 100%; height: 40vh; margin: -0vh 0; border-radius: 0; }
}

.fade-enter-active { transition: opacity 1s; }
.fade-enter { opacity: 0; }
</style>
