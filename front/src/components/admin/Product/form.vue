<template>
  <el-form ref="form" :model="product" :rules="rules" label-width="120px">
    <el-form-item label="Nom" prop="name">
      <el-input v-model="product.name"></el-input>
    </el-form-item>
    <el-form-item label="Prix" prop="price">
      <el-input-number v-model="product.price"></el-input-number>
      €
    </el-form-item>
    <el-form-item label="Description" prop="description">
      <el-input v-model="product.description" type="textarea"></el-input>
    </el-form-item>
    <div v-if="product.info.length >= 1">
      <el-form-item label="Hauteur" prop="info[0].height">
        <el-input-number v-model="product.info[0].height"></el-input-number>
      </el-form-item>
      <el-form-item label="Profondeur" prop="info[0].depth">
        <el-input-number v-model="product.info[0].depth"></el-input-number>
      </el-form-item>
      <el-form-item label="Largeur" prop="info[0].length">
        <el-input-number v-model="product.info[0].length"></el-input-number>
      </el-form-item>
      <el-form-item label="Couleur" prop="info[0].color">
        <el-input v-model="product.info[0].color"></el-input>
      </el-form-item>
    </div>
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
        image: null,
        categId: 1,
        info: [
          {
            height: 0,
            depth: 0,
            length: 0,
            color: null,
          },
        ],
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Le nom est obligatoire',
            trigger: 'blur',
          },
        ],
        price: [
          {
            required: true,
            message: 'Le prix est obligatoire',
            trigger: 'blur',
          },
        ],
        description: [
          {
            required: true,
            message: 'La description est obligatoire',
            trigger: 'blur',
          },
        ],
        info: [
          {
            height: [
              {
                required: true,
                message: 'La hauteur est obligatoire',
                trigger: 'blur',
              },
            ],
            depth: [
              {
                required: true,
                message: 'La profondeur est obligatoire',
                trigger: 'blur',
              },
            ],
            length: [
              {
                required: true,
                message: 'La largeur est obligatoire',
                trigger: 'blur',
              },
            ],
            color: [
              {
                required: true,
                message: 'La couleur est obligatoire',
                trigger: 'blur',
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    async onSubmit() {
      if (!this.edit) {
        await this.$axios.post(
          `${this.$baseURL}:${this.$port.PRODUCT_SERVICE}/api/product`,
          this.product,
        );
      } else {
        await this.$axios.patch(
          `${this.$baseURL}:${this.$port.PRODUCT_SERVICE}/api/product/${this.product.id}`,
          this.product,
        );
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
