<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/admin' }">Administration</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/admin/clients' }">Clients</el-breadcrumb-item>
  </el-breadcrumb>

  <div style="display: flex;justify-content: flex-end; margin-right: 20px;margin-bottom: 10px;">
    <el-button type="primary" @click="formVisible = true">Créer</el-button>
  </div>

  <el-dialog v-model="formVisible" title="Créer un utilisateur" width="60%">
    <user-form @close="formVisible = false" />
  </el-dialog>

  <el-dialog v-model="showVisible" title="Voir un utilisateur" width="60%">
    <user-show :user="userToShow" @close="showVisible = false" />
  </el-dialog>

  <el-dialog v-model="editVisible" title="Éditer un utilisateur" width="60%">
    <user-form @close="editVisible = false" :edit="true" :user-to-edit="userToEdit" />
  </el-dialog>

  <el-table stripe style="width: 100%" :data="users">
    <el-table-column prop="id" label="Id"/>
    <el-table-column prop="name" label="Nom"/>
    <el-table-column prop="username" label="Pseudo"/>
    <el-table-column prop="email" label="Email"/>
    <el-table-column prop="address.street" label="Adresse"/>
    <el-table-column prop="phone" label="Téléphone"/>
    <el-table-column fixed="right" label="Actions">
      <template #default="scope">
        <div style="display: flex;">
          <el-button type="info" size="small" @click.prevent="showUser(scope.$index)">Voir</el-button>
          <el-button type="primary" size="small" @click.prevent="editUser(scope.$index)">Éditer</el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>

  <el-pagination layout="prev, pager, next" :total="users.length"
                 @current-change="handlerCurrentChange">
  </el-pagination>

</template>

<script>
import {
  ElTable,
  ElTableColumn,
  ElButton,
  ElPagination,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDialog,
} from 'element-plus';
import { ref } from 'vue';

import axios from 'axios';
import userForm from '../../components/admin/User/form.vue';
import userShow from '../../components/admin/User/show.vue';

export default {
  name: 'Users',
  components: {
    ElTable,
    ElTableColumn,
    ElButton,
    ElPagination,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElDialog,
    userForm,
    userShow,
  },
  setup() {
    const formVisible = ref(false);
    const showVisible = ref(false);
    const editVisible = ref(false);

    return {
      formVisible,
      showVisible,
      editVisible,
    };
  },
  data() {
    return {
      users: [],
      userToShow: null,
      userToEdit: null,
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
        console.error(e);
      }
    },
    handlerCurrentChange(val) {
      console.log(val);
    },
    showUser(userIndex) {
      this.userToShow = this.users[userIndex];
      this.showVisible = true;
    },
    editUser(userIndex) {
      this.userToEdit = this.users[userIndex];
      this.editVisible = true;
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>
