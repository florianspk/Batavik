<template>
  <el-form ref="form" :model="user" :rules="rules" label-width="120px">
    <el-form-item label="Nom">
      <el-input v-model="user.firstname"></el-input>
    </el-form-item>
    <el-form-item label="Pseudo">
      <el-input v-model="user.lastname"></el-input>
    </el-form-item>
    <el-form-item label="Email">
      <el-input v-model="user.email"></el-input>
    </el-form-item>
    <el-form-item>
      <span class="dialog-footer" style="display: flex;justify-content: flex-end;">
        <el-button @click="close">Annuler</el-button>
        <el-button type="primary" @click="onSubmit">Créer</el-button>
      </span>
    </el-form-item>
  </el-form>
</template>

<script>
import {
  ElForm, ElInput, ElFormItem, ElButton,
} from 'element-plus';

export default {
  name: 'form',
  props: { edit: Boolean, userToEdit: [Object, null] },
  components: {
    ElForm,
    ElInput,
    ElFormItem,
    ElButton,
  },
  data() {
    return {
      user: {
        firstname: '',
        lastname: '',
        email: '',
        enabled: 1,
      },
    };
  },
  methods: {
    setConfig() {
      return {
        headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
      };
    },
    async onSubmit() {
      if (!this.edit) {
        await this.$axios.post(
          `${this.$baseURL}:${this.$port.USER_SERVICE}/api/user`, this.user, this.setConfig(),
        );
      } else {
        await this.$axios.patch(
          `${this.$baseURL}:${this.$port.USER_SERVICE}/api/user/${this.user.id}`, this.user, this.setConfig(),
        );
      }
      this.close();
    },
    close() {
      this.$emit('close');
    },
    changeUser() {
      if (this.edit && this.userToEdit != null) {
        this.user = this.userToEdit;
      }
    },
  },
  watch: {
    userToEdit() {
      this.changeUser();
    },
  },
  mounted() {
    this.changeUser();
  },
};
</script>

<style scoped>

</style>
