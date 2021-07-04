<template>
  <div class="home-page">
    <carrousel />
    <section-product :title="'NOS MEILLEURS VENTES'" :type="'bestsellers'" />
  </div>
</template>

<script>
import Carrousel from '../components/home_components/h_carousel.vue'
import SectionProduct from '../components/global/g_section.vue'

export default {
  name: 'Home',
  components: { Carrousel, SectionProduct }
}
</script>

<style lang="scss" scoped>
.home-page{ margin-top: 10vh; padding-top: 4vh; min-height: 86vh; }
</style>
