<template>
  <el-breadcrumb separator=">" class="fs-6">
    <el-breadcrumb-item :to="{ path: '/admin' }">Tableau de bord</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus';

export default {
  name: 'breadcrumb',
  components: { ElBreadcrumb, ElBreadcrumbItem },
};
</script>

<style scoped>
</style>
