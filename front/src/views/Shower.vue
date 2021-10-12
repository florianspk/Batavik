<template>
  <div class="shower-page">
    <item-filter />
    <section-product :nbProduct="6" :type="'bestsellers'" />
  </div>
</template>

<script>
import ItemFilter from '../components/item_filter.vue';
import SectionProduct from '../components/global/g_section.vue';

export default {
  name: 'douche',
  components: { ItemFilter, SectionProduct },
};
</script>

<style scoped lang="scss">
.shower-page{ margin-top: 10vh; padding-top: 4vh; min-height: 86vh; }
</style>
