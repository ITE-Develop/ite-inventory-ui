import { createRouter, createWebHistory } from "vue-router";

import ProductListScreen from "../components/ProductList.vue"
import ProductTable from '../components/ProductTable.vue'
import InventoryScreen from '../components/Inventory.vue'
import ReportScreen from '../components/Report.vue'


const routes = [

  {
    path: '/product',
    name: 'ProductTable',
    component: ProductTable
  },
  {
    path: '/productlist',
    name: 'ProductList',
    component: ProductListScreen
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: InventoryScreen
  },
  {
    path: '/report',
    name: 'Report',
    component: ReportScreen
  }
]
  // { 
  //   path: '/', 
  //   redirect: { name: 'DashboardHome' } 
  // },
 
const BASE_URL = "/";

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes,
});

export default router;
