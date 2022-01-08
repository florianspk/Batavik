<template>
  <el-descriptions
    :column="1"
    :title="product.name"
    border
  >
    <el-descriptions-item>
      <template #label>
        <el-icon>
          <key/>
        </el-icon>
        Id
      </template>
      {{ product.id }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <el-icon>
          <box/>
        </el-icon>
        Nom
      </template>
      {{ product.name }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <el-icon>
          <picture-rounded/>
        </el-icon>
        Image
      </template>
      <el-image :src="product.image"/>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <el-icon>
          <price-tag/>
        </el-icon>
        Prix (€)
      </template>
      {{ product.price }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <el-icon>
          <tickets/>
        </el-icon>
        Description
      </template>
      {{ product.description }}
    </el-descriptions-item>
    <div v-if="product.info.length >= 1">
      <el-descriptions-item>
        <template #label>
          <el-icon>
            <setting/>
          </el-icon>
          Hauteur
        </template>
        {{ product.info[0].height }} cm
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <el-icon>
            <setting/>
          </el-icon>
          Profondeur
        </template>
        {{ product.info[0].depth }} cm
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <el-icon>
            <setting/>
          </el-icon>
          Largeur
        </template>
        {{ product.info[0].length }} cm
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <el-icon>
            <orange/>
          </el-icon>
          Couleur
        </template>
        {{ product.info[0].color }}
      </el-descriptions-item>
    </div>
    <el-descriptions-item>
      <template #label>
        <el-icon>
          <star/>
        </el-icon>
        Note
      </template>
      {{ product.rate }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <el-icon>
          <calendar/>
        </el-icon>
        Créé le
      </template>
      {{ formatDate(product.createdAt) }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <el-icon>
          <calendar/>
        </el-icon>
        Mis à jour le
      </template>
      {{ formatDate(product.updatedAt) }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
import {
  Key,
  Box,
  PictureRounded,
  Tickets,
  PriceTag, Star, Calendar, Setting, Orange,
} from '@element-plus/icons-vue';

import {
  ElDescriptions,
  ElDescriptionsItem,
  ElIcon,
  ElImage,
} from 'element-plus';

export default {
  name: 'show',
  props: ['product'],
  components: {
    Orange,
    Setting,
    Calendar,
    Star,
    PriceTag,
    ElDescriptions,
    ElDescriptionsItem,
    ElIcon,
    ElImage,
    Key,
    Box,
    PictureRounded,
    Tickets,
  },
  methods: {
    formatDate(dateToFormat) {
      const date = this.$date.fromISO(dateToFormat, { locale: 'fr-FR' });
      return date.setZone('Europe/Paris').toFormat('dd MMMM yyyy HH:mm');
    },
  },
};
</script>

<style scoped>

</style>
