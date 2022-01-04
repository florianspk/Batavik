<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/admin' }">Administration</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/admin/products' }">Produits</el-breadcrumb-item>
  </el-breadcrumb>

  <div style="display: flex;justify-content: flex-end; margin-right: 20px;margin-bottom: 10px;">
    <el-button type="primary" @click="formVisible = true">Créer</el-button>
  </div>

  <el-dialog v-model="formVisible" title="Créer un produit" width="60%">
    <product-form @close="formVisible = false" />
  </el-dialog>

  <el-dialog v-model="showVisible" title="Voir un produit" width="60%">
    <product-show :product="productToShow" @close="showVisible = false" />
  </el-dialog>

  <el-dialog v-model="editVisible" title="Éditer un produit" width="60%">
    <product-form @close="editVisible = false" :edit="true" :product-to-edit="productToEdit" />
  </el-dialog>

  <el-table stripe style="width: 100%" :data="products" highlight-current-row>
    <el-table-column prop="id" label="Id" sortable/>
    <el-table-column prop="image" label="Image">
      <template #default="scope">
        <el-image :src="scope.row.image" :fit="fit"/>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="Nom" sortable/>
    <el-table-column prop="price" label="Prix (€)" sortable/>
    <el-table-column prop="description" label="Description"/>
    <el-table-column prop="note" label="Note" sortable/>
    <el-table-column prop="createdAt" label="Créé le" sortable>
      <template #default="scope">
        {{ formatDate(scope.row.createdAt) }}
      </template>
    </el-table-column>
    <el-table-column prop="updatedAt" label="Mis à jour le" sortable>
      <template #default="scope">
        {{ formatDate(scope.row.updatedAt) }}
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="Actions">
      <template #default="scope">
        <div style="display: flex;">
          <el-button type="info" size="small" @click.prevent="showProduct(scope.$index)">Voir</el-button>
          <el-button type="primary" size="small" @click.prevent="editProduct(scope.$index)">Éditer</el-button>
          <el-button type="danger" size="small" @click.prevent="deleteProduct(scope.$index)">Supprimer</el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>

  <el-pagination layout="prev, pager, next" :total="products.length"
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
  ElImage,
} from 'element-plus';
import { ref } from 'vue';

import productForm from '../../components/admin/Product/form.vue';
import productShow from '../../components/admin/Product/show.vue';

export default {
  name: 'Products',
  components: {
    ElTable,
    ElTableColumn,
    ElButton,
    ElPagination,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElDialog,
    productForm,
    productShow,
    ElImage,
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
      products: [],
      productToShow: null,
      productToEdit: null,
    };
  },
  methods: {
    async getProducts() {
      try {
        const { data: product } = await this.$axios.get(
          `${this.$baseURL}:${this.$port.PRODUCT_SERVICE}/api/products`,
        );
        this.products = product.products;
      } catch (e) {
        console.error(e);
      }
    },
    handlerCurrentChange(val) {
      console.log(val);
    },
    showProduct(productIndex) {
      this.productToShow = this.products[productIndex];
      this.showVisible = true;
    },
    editProduct(productIndex) {
      this.productToEdit = this.products[productIndex];
      this.editVisible = true;
    },
    deleteProduct(productIndex) {
      this.products.splice(productIndex, 1);
    },
    formatDate(dateToFormat) {
      const date = this.$date.fromISO(dateToFormat, { locale: 'fr-FR' });
      return date.setZone('Europe/Paris').toFormat('dd MMMM yyyy HH:mm');
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
