<template>
  <el-form ref="form" :model="product" label-width="120px">
    <el-form-item label="Nom">
      <el-input v-model="product.name"></el-input>
    </el-form-item>
    <el-form-item label="Prix">
      <el-input-number v-model="product.price"></el-input-number> €
    </el-form-item>
    <el-form-item label="Description">
      <el-input v-model="product.description" type="textarea"></el-input>
    </el-form-item>
    <el-form-item label="Note">
      <el-input v-model.number="product.note"></el-input>
    </el-form-item>
    <el-form-item label="Créé le">
      <el-input v-model="product.createdAt"></el-input>
    </el-form-item>
    <el-form-item label="Mis à jour le">
      <el-input v-model="product.updatedAt"></el-input>
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
  ElForm, ElInput, ElFormItem, ElButton, ElInputNumber,
} from 'element-plus';

export default {
  name: 'form',
  props: { edit: Boolean, productToEdit: [Object, null] },
  components: {
    ElForm,
    ElInput,
    ElInputNumber,
    ElFormItem,
    ElButton,
  },
  data() {
    return {
      product: {
        name: '',
        price: '',
        description: '',
        note: '',
        createdAt: '',
        updatedAt: '',
      },
    };
  },
  methods: {
    onSubmit() {
      if (!this.edit) {
        console.log('create :', this.product);
      } else {
        console.log('edit :', this.product);
      }
      this.close();
    },
    close() {
      this.$emit('close');
    },
    changeProduct() {
      if (this.edit && this.productToEdit != null) {
        this.product = this.productToEdit;
      }
    },
  },
  watch: {
    productToEdit() {
      this.changeProduct();
    },
  },
  mounted() {
    this.changeProduct();
  },
};
</script>

<style scoped>

</style>
