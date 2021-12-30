<template>
  <el-form ref="form" :model="user" label-width="120px">
    <el-form-item label="Nom">
      <el-input v-model="user.name"></el-input>
    </el-form-item>
    <el-form-item label="Pseudo">
      <el-input v-model="user.username"></el-input>
    </el-form-item>
    <el-form-item label="Email">
      <el-input v-model="user.email"></el-input>
    </el-form-item>
    <el-form-item label="Adresse">
      <el-input v-model="user.address.street"></el-input>
    </el-form-item>
    <el-form-item label="Téléphone">
      <el-input v-model="user.phone"></el-input>
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
        name: '',
        username: '',
        email: '',
        address: { street: '' },
        phone: '',
      },
    };
  },
  methods: {
    onSubmit() {
      if (!this.edit) {
        console.log('create :', this.user);
      } else {
        console.log('edit :', this.user);
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
