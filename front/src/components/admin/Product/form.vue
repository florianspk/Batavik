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
<!--    <el-form-item label="Hauteur">
      <el-input-number v-model="product.info.height"></el-input-number>
    </el-form-item>
    <el-form-item label="Profondeur">
      <el-input-number v-model="product.info.depth"></el-input-number>
    </el-form-item>
    <el-form-item label="Largeur">
      <el-input-number v-model="product.info.length"></el-input-number>
    </el-form-item>
    <el-form-item label="Couleur">
      <el-input v-model="product.info.color"></el-input>
    </el-form-item>-->
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
        price: 0,
        description: '',
        // image: null,
        categId: 1,
        // info: {
        //   height: 0,
        //   depth: 0,
        //   length: 0,
        //   color: '',
        // },
      },
    };
  },
  methods: {
    async onSubmit() {
      if (!this.edit) {
        console.log('create :', this.product);
        console.log(JSON.stringify(this.product));
        const product = await this.$axios.post(
          `${this.$baseURL}:${this.$port.PRODUCT_SERVICE}/api/product`,
          this.product,
        );
        console.log(product);
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
