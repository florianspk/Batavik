<template>
  <el-form ref="form" :model="user" :rules="rules" label-width="120px">
    <el-form-item label="Prénom" prop="firstname">
      <el-input v-model="user.firstname"></el-input>
    </el-form-item>
    <el-form-item label="Nom" prop="lastname">
      <el-input v-model="user.lastname"></el-input>
    </el-form-item>
    <el-form-item label="Email" prop="email">
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
import UserService from '../../../services/UserService';

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
      rules: {
        firstname: [
          {
            required: true,
            message: 'Le prénom est obligatoire',
            trigger: 'blur',
          },
        ],
        lastname: [
          {
            required: true,
            message: 'Le nom est obligatoire',
            trigger: 'blur',
          },
        ],
        email: [
          {
            required: true,
            message: 'L\'adresse email est obligatoire',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    async onSubmit() {
      if (!this.edit) {
        await UserService.post('/user', this.user);
      } else {
        await UserService.patch(`/user/${this.user.id}`, this.user);
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
