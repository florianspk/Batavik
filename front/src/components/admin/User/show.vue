<template>
  <el-descriptions
    :column="1"
    :title="user.username"
    border
  >
    <el-descriptions-item>
      <template #label>
        <el-icon>
          <key/>
        </el-icon>
        Id
      </template>
      {{ user.id }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <el-icon>
          <user/>
        </el-icon>
        Prénom - Nom
      </template>
      {{ user.firstname }} {{ user.lastname }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <el-icon>
          <message/>
        </el-icon>
        Email
      </template>
      {{ user.email }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <el-icon>
          <location/>
        </el-icon>
        Actif
      </template>
      <div v-if="user.enabled">Actif</div>
      <div v-else>Inactif</div>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
import {
  User,
  Location,
  Message,
} from '@element-plus/icons-vue';

import {
  ElDescriptions,
  ElDescriptionsItem,
  ElIcon,
} from 'element-plus';
import { Key } from '@element-plus/icons';

export default {
  name: 'show',
  props: ['user'],
  components: {
    Message,
    Key,
    ElDescriptions,
    ElDescriptionsItem,
    ElIcon,
    User,
    Location,
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
