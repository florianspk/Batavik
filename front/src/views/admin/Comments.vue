<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/admin' }">Administration</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/admin/commentaires' }">Commentaires</el-breadcrumb-item>
  </el-breadcrumb>

  <el-table stripe style="width: 99%;margin-top: 50px;" :data="comments" highlight-current-row>
    <el-table-column prop="id" label="Id" width="80" sortable/>
    <el-table-column prop="text" label="Commentaire"/>
    <el-table-column prop="rate" label="Note" width="80" sortable/>
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
    <el-table-column fixed="right" label="Actions">
      <template #default="scope">
        <div style="display: flex;">
          <el-button type="danger" size="small" @click.prevent="deleteComment(scope.$index)"><f-icon :icon="'trash'"></f-icon></el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>

  <el-pagination layout="prev, pager, next" :total="this.totalItems"
                 @current-change="getComments">
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
} from 'element-plus';

export default {
  name: 'Comments',
  components: {
    ElTable,
    ElTableColumn,
    ElButton,
    ElPagination,
    ElBreadcrumb,
    ElBreadcrumbItem,
  },
  data() {
    return {
      comments: [],
      totalItems: null,
    };
  },
  methods: {
    setConfig() {
      return {
        headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
      };
    },
    async getComments(val = 1) {
      try {
        const { data: comment } = await this.$axios.get(`${this.$baseURL}:${this.$port.COMM_SERVICE}/api/comment/all?size=10&page=${val}`, this.setConfig());
        this.totalItems = comment.totalItems;
        this.comments = comment.comments;
      } catch (e) {
        console.error(e);
      }
    },
    deleteComment(commentIndex) {
      this.$axios.delete(
        `${this.$baseURL}:${this.$port.COMM_SERVICE}/api/comment/${this.comments[commentIndex].id}`, this.setConfig(),
        this.comment,
      );
      this.comments.splice(commentIndex, 1);
    },
    formatDate(dateToFormat) {
      const date = this.$date.fromISO(dateToFormat, { locale: 'fr-FR' });
      return date.setZone('Europe/Paris').toFormat('dd MMMM yyyy HH:mm');
    },
  },
  mounted() {
    this.getComments();
  },
};
</script>
