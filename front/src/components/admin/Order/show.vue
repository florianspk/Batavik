<template>
  <el-descriptions
    :column="1"
    :title="'Commande n-' + order.id"
    border
  >
    <el-descriptions-item>
      <template #label>
        <el-icon>
          <key/>
        </el-icon>
        Id
      </template>
      {{ order.id }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <el-icon>
          <tickets/>
        </el-icon>
        Information
      </template>
      {{ order.tradeInformation }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <el-icon>
          <price-tag/>
        </el-icon>
        Prix (€)
      </template>
      {{ order.orderPrice }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <el-icon>
          <calendar/>
        </el-icon>
        Date limite le
      </template>
      {{ formatDate(order.deadLineOrder) }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <el-icon>
          <calendar/>
        </el-icon>
        Date limite le
      </template>
      {{ formatDate(order.createdAt) }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <el-icon>
          <calendar/>
        </el-icon>
        Créé le
      </template>
      {{ formatDate(order.updatedAt) }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
import {
  Key,
  Tickets,
  PriceTag,
  Calendar,
} from '@element-plus/icons-vue';

import {
  ElDescriptions,
  ElDescriptionsItem,
  ElIcon,
} from 'element-plus';

export default {
  name: 'show',
  props: ['order'],
  components: {
    Calendar,
    PriceTag,
    ElDescriptions,
    ElDescriptionsItem,
    ElIcon,
    Key,
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
