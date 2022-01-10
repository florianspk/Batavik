<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/admin' }">Administration</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/admin/products' }">Produits</el-breadcrumb-item>
  </el-breadcrumb>

  <div style="display: flex;justify-content: flex-end; margin-right: 20px;margin-bottom: 10px;">
    <el-button type="primary" @click="formVisible = true">Créer</el-button>
  </div>

  <el-dialog v-model="formVisible" title="Créer un produit">
    <product-form @close="formVisible = false"/>
  </el-dialog>

  <el-dialog v-model="showVisible" title="Voir un produit">
    <product-show :product="productToShow" @close="showVisible = false"/>
  </el-dialog>

  <el-dialog v-model="editVisible" title="Éditer un produit">
    <product-form @close="editVisible = false" :edit="true" :product-to-edit="productToEdit"/>
  </el-dialog>

  <el-table stripe style="width: 100%" :data="products" highlight-current-row>
    <el-table-column prop="id" label="Id" width="80" sortable/>
    <el-table-column prop="image" label="Image">
      <template #default="scope">
        <el-image :src="scope.row.image" :fit="fit"/>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="Nom" sortable/>
    <el-table-column prop="price" label="Prix (€)" width="80" sortable/>
    <el-table-column prop="description" label="Description"/>
    <el-table-column prop="rate" label="Note" width="80" sortable/>
    <el-table-column prop="info[0].height" label="Hauteur (cm)" width="80" sortable/>
    <el-table-column prop="info[0].depth" label="Profondeur (cm)" width="80" sortable/>
    <el-table-column prop="info[0].width" label="Largeur (cm)" width="80" sortable/>
    <el-table-column prop="info[0].color" label="Couleur" width="100" sortable/>
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
        <div style="display: flex">
          <el-button type="info" size="small" @click.prevent="showProduct(scope.$index)">
            <f-icon :icon="'eye'"></f-icon>
          </el-button>
          <el-button type="primary" size="small" @click.prevent="editProduct(scope.$index)">
            <f-icon :icon="'pen'"></f-icon>
          </el-button>
          <el-button type="danger" size="small" @click.prevent="deleteProduct(scope.$index)">
            <f-icon :icon="'trash'"></f-icon>
          </el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination layout="prev, pager, next" :total="this.totalItems"
                 @current-change="getProducts"></el-pagination>
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

import {
  ref,
} from 'vue';

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
      totalItems: null,
      productToShow: null,
      productToEdit: null,
    };
  },
  methods: {
    setConfig() {
      return {
        headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
      };
    },
    async getProducts(val = 1) {
      try {
        const { data: product } = await this.$axios.get(`${this.$baseURL}:${this.$port.PRODUCT_SERVICE}/api/products?size=10&page=${val}`, this.setConfig());
        this.totalItems = product.totalItems;
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
      this.$axios.delete(
        `${this.$baseURL}:${this.$port.PRODUCT_SERVICE}/api/product/${this.products[productIndex].id}`, this.setConfig(),
        this.product,
      );
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
