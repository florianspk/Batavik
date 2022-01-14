<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/admin' }">Administration</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/admin/commandes' }">Commandes</el-breadcrumb-item>
  </el-breadcrumb>

  <el-dialog v-model="showVisible" title="Voir une commande">
    <order-show :order="orderToShow" @close="showVisible = false"/>
  </el-dialog>

  <el-table stripe style="width: 99%;margin-top: 50px;" :data="orders" highlight-current-row>
    <el-table-column prop="id" label="Id" width="80" sortable/>
    <el-table-column prop="tradeInformation" label="Information"/>
    <el-table-column prop="orderPrice" label="Prix" width="80" sortable/>
    <el-table-column prop="deadLineOrder" label="Date limite le" width="175" sortable>
      <template #default="scope">
        {{ formatDate(scope.row.deadLineOrder) }}
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
    <el-table-column fixed="right" label="Actions">
      <template #default="scope">
        <div style="display: flex;">
          <el-button type="info" size="small" @click.prevent="showOrder(scope.$index)">
            <f-icon :icon="'eye'"></f-icon>
          </el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>

  <el-pagination layout="prev, pager, next" :total="this.totalItems"
                 @current-change="getOrders">
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

import {
  ref,
} from 'vue';

import orderShow from '../../components/admin/Order/show.vue';

export default {
  name: 'Orders',
  components: {
    ElTable,
    ElTableColumn,
    ElButton,
    ElPagination,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElDialog,
    orderShow,
  },
  setup() {
    const showVisible = ref(false);
    return {
      showVisible,
    };
  },
  data() {
    return {
      orders: [],
      totalItems: null,
      orderToShow: null,
    };
  },
  methods: {
    setConfig() {
      return {
        headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
      };
    },
    async getOrders(val = 1) {
      try {
        const { data: order } = await this.$axios.get(`${this.$baseURL}:${this.$port.ORDER_SERVICE}/api/order/all?size=10&page=${val}`, this.setConfig());
        this.totalItems = order.totalItems;
        this.orders = order.orders;
        console.log(this.orders);
      } catch (e) {
        console.error(e);
      }
    },
    showOrder(orderIndex) {
      this.orderToShow = this.orders[orderIndex];
      this.showVisible = true;
    },
    formatDate(dateToFormat) {
      const date = this.$date.fromISO(dateToFormat, { locale: 'fr-FR' });
      return date.setZone('Europe/Paris').toFormat('dd MMMM yyyy HH:mm');
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>
