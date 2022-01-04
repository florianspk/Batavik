<template>
  <el-descriptions
    :column="1"
    :title="user.username"
    border
  >
    <el-descriptions-item>
      <template #label>
        <el-icon>
          <user/>
        </el-icon>
        Username
      </template>
      {{ user.name }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <el-icon>
          <iphone/>
        </el-icon>
        Telephone
      </template>
      {{ user.phone }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <el-icon>
          <location/>
        </el-icon>
        Place
      </template>
      Suzhou
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <el-icon>
          <tickets/>
        </el-icon>
        Remarks
      </template>
      <el-tag size="small">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <el-icon>
          <office-building/>
        </el-icon>
        Address
      </template>
      {{ user.address.street }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
import {
  User,
  Iphone,
  Location,
  Tickets,
  OfficeBuilding,
} from '@element-plus/icons-vue';

import {
  ElDescriptions,
  ElDescriptionsItem,
  ElIcon,
} from 'element-plus';

export default {
  name: 'show',
  props: ['user'],
  components: {
    ElDescriptions,
    ElDescriptionsItem,
    ElIcon,
    User,
    Iphone,
    Location,
    Tickets,
    OfficeBuilding,
  },
  mounted() {
    console.log(this.user);
  },
};
</script>

<style scoped>

</style>
