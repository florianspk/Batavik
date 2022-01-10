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

  <el-table stripe style="width: 99%" :data="users" highlight-current-row>
    <el-table-column prop="id" label="Id" width="80" sortable/>
    <el-table-column prop="lastname" label="Nom" sortable/>
    <el-table-column prop="firstname" label="Prénom" sortable/>
    <el-table-column prop="email" label="Email" sortable/>
    <el-table-column prop="enabled" label="Actif" sortable>
      <template #default="scope">
        <div v-if="scope.row.enabled">Oui</div>
        <div v-else>Non</div>
      </template>
    </el-table-column>
    <el-table-column prop="createdAt" label="Créé le" width="175" sortable>
      <template #default="scope">
        {{ formatDate(scope.row.createdAt) }}
      </template>
    </el-table-column>
    <el-table-column prop="updatedAt" label="Mis à jour le" width="175" sortable>
      <template #default="scope">
        {{ formatDate(scope.row.updatedAt) }}
      </template>
    </el-table-column>
    <el-table-column prop="lastLogin" label="Dernière connexion le" width="175" sortable>
      <template #default="scope">
        {{ formatDate(scope.row.lastLogin) }}
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="Actions">
      <template #default="scope">
        <div style="display: flex;">
          <el-button type="info" size="small" @click.prevent="showUser(scope.$index)"><f-icon :icon="'eye'"></f-icon></el-button>
          <el-button type="primary" size="small" @click.prevent="editUser(scope.$index)"><f-icon :icon="'pen'"></f-icon></el-button>
          <el-button type="danger" size="small" @click.prevent="deleteUser(scope.$index)"><f-icon :icon="'trash'"></f-icon></el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>

  <el-pagination layout="prev, pager, next" :total="this.totalItems"
                 @current-change="getUsers">
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
      totalItems: null,
      userToShow: null,
      userToEdit: null,
    };
  },
  methods: {
    setConfig() {
      return {
        headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
      };
    },
    async getUsers(val = 1) {
      try {
        const { data: user } = await this.$axios.get(`${this.$baseURL}:${this.$port.USER_SERVICE}/api/users?size=10&page=${val}`, this.setConfig());
        this.totalItems = user.totalItems;
        this.users = user.users;
      } catch (e) {
        console.error(e);
      }
    },
    showUser(userIndex) {
      this.userToShow = this.users[userIndex];
      this.showVisible = true;
    },
    editUser(userIndex) {
      this.userToEdit = this.users[userIndex];
      this.editVisible = true;
    },
    deleteUser(userIndex) {
      this.$axios.delete(
        `${this.$baseURL}:${this.$port.USER_SERVICE}/api/user/${this.users[userIndex].id}`, this.setConfig(),
        this.user,
      );
      this.users.splice(userIndex, 1);
    },
    formatDate(dateToFormat) {
      const date = this.$date.fromISO(dateToFormat, { locale: 'fr-FR' });
      return date.setZone('Europe/Paris').toFormat('dd MMMM yyyy HH:mm');
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>
