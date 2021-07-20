<template>
  <div class="shower-page">
    <section-product :nbProduct="6" :type="'bestsellers'" />
  </div>
</template>

<script>
import SectionProduct from '../components/global/g_section.vue';

export default {
  name: 'douche',
  components: { SectionProduct },
};
</script>

<style scoped lang="scss">
.shower-page{ margin-top: 10vh; padding-top: 4vh; min-height: 86vh; }
</style>
