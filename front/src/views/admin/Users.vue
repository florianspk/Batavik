<template>
  <el-table style="width: 100%">
    <div v-for="user in users" :key="user.id">
      <el-table-column label="name" width="180">
          <span style="margin-left: 10px">{{ user.name }}</span>
      </el-table-column>
<!--      <el-table-column label="age" width="180">
        <template #default="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="count" width="180">
        <template #default="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Operations">
        <template #default="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >Edit</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
          >
        </template>
      </el-table-column>-->
    </div>
  </el-table>
</template>

<script>
import { ElTable, ElTableColumn } from 'element-plus';

import axios from 'axios';

export default {
  name: 'Users',
  components: { ElTable, ElTableColumn },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async getUsers() {
      try {
        const users = await axios.get(
          'https://jsonplaceholder.typicode.com/users',
        );

        this.users = users.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>

</style>
